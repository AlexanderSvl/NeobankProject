using NeobankProject.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace NeobankProject.DataAccess.Repositories.Interfaces
{
    public interface ITransactionRepository
    {
        Task<TransactionModel> CreateTransactionAsync(TransactionModel transaction);
        Task<TransactionModel> GetTransactionByIdAsync(Guid ID);
        Task<IEnumerable<TransactionModel>> GetAllTransactionsAsync();
        Task<IEnumerable<TransactionModel>> GetAllTransactionsFromUserAsync(Guid userId);
        Task<bool> UpdateTransactionStatusAsync(Guid ID, string status);
        Task<bool> DeleteTransactionAsync(Guid ID);
    }
}
