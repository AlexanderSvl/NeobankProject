using CarTradeWebsite.Context;
using Microsoft.EntityFrameworkCore;
using NeobankProject.DataAccess.Repositories.Interfaces;
using NeobankProject.Models;

namespace NeobankProject.DataAccess.Repositories
{
    public class WalletRepository : IWalletRepository
    {
        private static DatabaseContext context = new DatabaseContext();

        public async Task<WalletModel> GetWalletByIDAsync(Guid ID)
        {
            return await context.Wallets
                .FindAsync(ID);
        }

        public async Task<WalletModel> AddBalanceToWalletAsync(Guid walletId, decimal balance)
        {
            WalletModel walletToAddMoneyTo = await context.Wallets
                .Where(wallet => wallet.Id == walletId)
                .FirstAsync();

            walletToAddMoneyTo.Balance += balance;
            await context.SaveChangesAsync();

            return walletToAddMoneyTo;
        }

        public async Task<WalletModel> RemoveBalanceFromWalletAsync(Guid walletId, decimal balance)
        {
            WalletModel walletToAddMoneyTo = await context.Wallets
                .Where(wallet => wallet.Id == walletId)
                .FirstAsync();

            walletToAddMoneyTo.Balance -= balance;
            await context.SaveChangesAsync();

            return walletToAddMoneyTo;
        }

        public async Task<WalletModel> ChangeWalletCurrencyAsync(Guid walletId, CurrencyModel newCurrency)
        {
            WalletModel walletToChangeCurrencyTo = await context.Wallets
                .Where(wallet => wallet.Id == walletId)
                .FirstAsync();

            walletToChangeCurrencyTo.Currency = newCurrency;
            await context.SaveChangesAsync();

            return walletToChangeCurrencyTo;
        }

        public async Task<WalletModel> CreateWalletAsync(WalletModel wallet)
        {
            await context.Wallets.AddAsync(wallet);
            await context.SaveChangesAsync();

            return wallet;
        }
    }
}
