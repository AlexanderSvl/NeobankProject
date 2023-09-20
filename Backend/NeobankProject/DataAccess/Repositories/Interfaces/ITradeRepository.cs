using NeobankProject.Models;

namespace NeobankProject.DataAccess.Repositories.Interfaces
{
    public interface ITradeRepository
    {
        Task<TradeModel> CreateTradeAsync(TradeModel trade);
    }
}
