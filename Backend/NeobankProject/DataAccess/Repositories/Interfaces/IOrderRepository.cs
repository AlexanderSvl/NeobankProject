using NeobankProject.Models;

namespace NeobankProject.DataAccess.Repositories.Interfaces
{
    public interface IOrderRepository
    {
        Task<OrderModel> AddOrderAsync(OrderModel order);
        Task<bool> DeleteOrderAsync(Guid orderId);
        Task<OrderModel> GetOrderByIDAsync(Guid ID);
    }
}
