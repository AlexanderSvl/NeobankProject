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
    }
}
