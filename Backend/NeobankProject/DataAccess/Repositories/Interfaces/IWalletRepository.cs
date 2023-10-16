using NeobankProject.Models;

namespace NeobankProject.DataAccess.Repositories.Interfaces
{
    public interface IWalletRepository
    {
        Task<WalletModel> GetWalletByIDAsync(Guid ID);
        Task<WalletModel> CreateWalletAsync(WalletModel wallet);
        Task<WalletModel> AddBalanceToWalletAsync(Guid walletId, decimal ballance);
        Task<WalletModel> RemoveBalanceFromWalletAsync(Guid walletId, decimal ballance);
        Task<WalletModel> ChangeWalletCurrencyAsync(Guid walletId, CurrencyModel newCurrency);
    }
}
