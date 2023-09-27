using NeobankProject.Models;

namespace NeobankProject.DataAccess.Repositories.Interfaces
{
    public interface ITradeRepository
    {
        Task<TradeModel> CreateTradeAsync(TradeModel trade);
        Task<TradeModel> GetTradeByIdAsync(Guid ID);
        Task<IEnumerable<TradeModel>> GetAllTradesAsync();
        Task<IEnumerable<TradeModel>> GetAllTradesFromUserAsync(Guid userId);
    }
}
