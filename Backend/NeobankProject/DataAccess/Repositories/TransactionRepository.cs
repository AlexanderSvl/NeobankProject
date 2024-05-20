using CarTradeWebsite.Context;
using Microsoft.EntityFrameworkCore;
using NeobankProject.DataAccess.Repositories.Interfaces;
using NeobankProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NeobankProject.DataAccess.Repositories
{
    public class TransactionRepository : ITransactionRepository
    {
        private static DatabaseContext context = new DatabaseContext();

        public async Task<TransactionModel> CreateTransactionAsync(TransactionModel transaction)
        {
            await context.Transactions.AddAsync(transaction);
            await context.SaveChangesAsync();

            return transaction;
        }

        public async Task<IEnumerable<TransactionModel>> GetAllTransactionsAsync()
        {
            return await context.Transactions.ToListAsync();
        }

        public async Task<IEnumerable<TransactionModel>> GetAllTransactionsFromUserAsync(Guid userId)
        {
            return await context.Transactions
                .Where(transaction => transaction.User.ID == userId)
                .ToListAsync();
        }

        public async Task<TransactionModel> GetTransactionByIdAsync(Guid ID)
        {
            return await context.Transactions.FindAsync(ID);
        }

        public async Task<bool> UpdateTransactionStatusAsync(Guid ID, string status)
        {
            var transaction = await context.Transactions.FindAsync(ID);

            if (transaction == null)
            {
                return false;
            }

            transaction.Status = status;
            await context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> DeleteTransactionAsync(Guid ID)
        {
            var transaction = await context.Transactions.FindAsync(ID);

            if (transaction == null)
            {
                return false;
            }

            context.Transactions.Remove(transaction);
            await context.SaveChangesAsync();

            return true;
        }
    }
}
