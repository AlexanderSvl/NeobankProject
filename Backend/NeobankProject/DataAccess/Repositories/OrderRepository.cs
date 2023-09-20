using CarTradeWebsite.Context;
using Microsoft.EntityFrameworkCore;
using NeobankProject.DataAccess.Repositories.Interfaces;
using NeobankProject.DataAccess.Repositories;
using NeobankProject.Models;

namespace NeobankProject.DataAccess.Repositories
{
    public class OrderRepository : IOrderRepository
    {
        private static DatabaseContext context = new DatabaseContext();
        private TradeRepository tradeRepository = new TradeRepository();

        public async Task<OrderModel> CreateOrderAsync(OrderModel order)
        {
            await context.Orders.AddAsync(order);
            await context.SaveChangesAsync();

            return order;
        }

        public async Task<bool> DeleteOrderAsync(Guid orderId)
        {
            OrderModel orderToRemove = await context.Orders
                .Where(order => order.Id == orderId)
                .FirstAsync();

            if(orderToRemove != null)
            {
                context.Orders.Remove(orderToRemove);
                await context.SaveChangesAsync();

                return true;
            }

            return false;
        }

        public async Task<OrderModel> GetOrderByIDAsync(Guid ID)
        {
            return await context.Orders
                .Where(order => order.Id == ID)
                .FirstAsync();
        }

        public async Task<bool> ExecuteOrderAsync(Guid ID, int quantity)
        {
            OrderModel orderToExecute = await context.Orders
                .Where(order => order.Id == ID)
                .FirstAsync();

            if(orderToExecute == null)
            {
                return false;
            }

            TradeModel trade = new TradeModel();

            trade.Stock = orderToExecute.Stock;
            trade.User = orderToExecute.User;
            trade.TradeType = orderToExecute.OrderType.Split(" ")[1];
            trade.Price = orderToExecute.Stock.CurrentPrice;
            trade.Quantity = quantity;
            trade.DateOfExecution = DateTime.Now;

            await tradeRepository.CreateTradeAsync(trade);
            orderToExecute.IsArchived = true;
            await context.SaveChangesAsync();

            return true;
        }

        public async Task<IEnumerable<OrderModel>> GetAllOrdersFromUserAsync(Guid userId)
        {
            IEnumerable<OrderModel> ordersFromUser = await context.Orders
                .Where(order => order.User.ID == userId)
                .ToListAsync();

            return ordersFromUser;
        }
    }
}
