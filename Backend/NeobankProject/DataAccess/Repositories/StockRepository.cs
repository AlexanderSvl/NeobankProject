using CarTradeWebsite.Context;
using Microsoft.EntityFrameworkCore;
using NeobankProject.DataAccess.Repositories.Interfaces;
using NeobankProject.Models;

namespace NeobankProject.DataAccess.Repositories
{
    public class StockRepository : IStockRepository
    {
        private static DatabaseContext context = new DatabaseContext();

        public async Task<StockModel> AddStockAsync(StockModel stock)
        {
            await context.Stocks.AddAsync(stock);
            await context.SaveChangesAsync();

            return stock;
        }

        public async Task<bool> DeleteStockAsync(Guid Id)
        {
            StockModel stockToRemove = await context.Stocks
                .Where(stock => stock.Id == Id)
                .FirstAsync();

            if (stockToRemove != null)
            {
                context.Stocks.Remove(stockToRemove);
                await context.SaveChangesAsync();

                return true;
            }

            return false;
        }

        public async Task<StockModel> GetStockByIdAsync(Guid Id)
        {
            StockModel stockToGet = await context.Stocks
                .Where(stock => stock.Id == Id)
                .FirstAsync();

            if(stockToGet != null)
            {
                return stockToGet;
            }

            return null;
        }

        public async Task<StockModel> UpdateStockAsync(Guid Id, StockModel updatedStock)
        {
            StockModel stockToUpdate = await context.Stocks
                .Where(stock => stock.Id == Id)
                .FirstAsync();

            stockToUpdate.Symbol = updatedStock.Symbol;
            stockToUpdate.CompanyName = updatedStock.CompanyName;
            stockToUpdate.LastTradeDate = updatedStock.LastTradeDate;
            stockToUpdate.LastOpenPrice = updatedStock.LastOpenPrice;
            stockToUpdate.LastClosePrice = updatedStock.LastClosePrice;
            stockToUpdate.CurrentPrice = updatedStock.CurrentPrice;

            await context.SaveChangesAsync();

            return stockToUpdate;
        }
    }
}
