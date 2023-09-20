using NeobankProject.Models;

namespace NeobankProject.DataAccess.Repositories.Interfaces
{
    public interface IOrderRepository
    {
        Task<OrderModel> CreateOrderAsync(OrderModel order);
        Task<bool> DeleteOrderAsync(Guid orderId);
        Task<IEnumerable<OrderModel>> GetAllOrdersFromUserAsync(Guid userId);
        Task<OrderModel> GetOrderByIDAsync(Guid ID);
        Task<bool> ExecuteOrderAsync(Guid ID, int quantity);
    }
}
