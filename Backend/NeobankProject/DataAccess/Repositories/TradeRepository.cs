using CarTradeWebsite.Context;
using Microsoft.EntityFrameworkCore;
using NeobankProject.DataAccess.Repositories.Interfaces;
using NeobankProject.Models;

namespace NeobankProject.DataAccess.Repositories
{
    public class TradeRepository : ITradeRepository
    {
        private static DatabaseContext context = new DatabaseContext();

        public async Task<TradeModel> CreateTradeAsync(TradeModel trade)
        {
            await context.Trades.AddAsync(trade);
            await context.SaveChangesAsync();

            return trade;
        }

        public async Task<IEnumerable<TradeModel>> GetAllTradesAsync()
        {
            return await context.Trades
                .ToListAsync();
        }

        public async Task<IEnumerable<TradeModel>> GetAllTradesFromUserAsync(Guid userId)
        {
            return await context.Trades
                .Where(trade => trade.User.ID == userId)
                .ToListAsync();
        }

        public async Task<TradeModel> GetTradeByIdAsync(Guid ID)
        {
            return await context.Trades
                .Where(trade => trade.Id == ID)
                .FirstAsync();
        }
    }
}
