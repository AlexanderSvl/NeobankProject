using NeobankProject.Models;

namespace NeobankProject.DataAccess.Repositories.Interfaces
{
    public interface IStockRepository
    {
        Task<StockModel> GetStockByIdAsync(Guid Id);
        Task<IEnumerable<StockModel>> GetAllStocksAsync();
        Task<StockModel> AddStockAsync(StockModel stock);
        Task<StockModel> UpdateStockAsync(Guid Id, StockModel updatedStock);
        Task<bool> DeleteStockAsync(Guid Id);
    }
}
