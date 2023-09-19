using NeobankProject.Models;

namespace NeobankProject.DataAccess.Repositories.Interfaces
{
    public interface IWalletRepository
    {
        Task<WalletModel> CreateWallet(WalletModel wallet);
        Task<WalletModel> AddBalanceToWallet(Guid walletId, decimal ballance);
        Task<WalletModel> RemoveBalanceFromWallet(Guid walletId, decimal ballance);
        Task<WalletModel> ChangeWalletCurrency(Guid walletId, CurrencyModel newCurrency);
    }
}
