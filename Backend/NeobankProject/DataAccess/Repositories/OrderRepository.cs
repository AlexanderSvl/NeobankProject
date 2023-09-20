using CarTradeWebsite.Context;
using Microsoft.EntityFrameworkCore;
using NeobankProject.DataAccess.Repositories.Interfaces;
using NeobankProject.Models;

namespace NeobankProject.DataAccess.Repositories
{
    public class OrderRepository : IOrderRepository
    {
        private static DatabaseContext context = new DatabaseContext();

        public async Task<OrderModel> AddOrderAsync(OrderModel order)
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
    }
}
