using Microsoft.EntityFrameworkCore;
using NeobankProject.Models;

namespace CarTradeWebsite.Context
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext()
        {
        }

        public DatabaseContext(DbContextOptions<DatabaseContext> options)
           : base(options)
        {
        }

        public DbSet<UserModel> Users { get; set; }
        public DbSet<CurrencyModel> Currencies { get; set; }
        public DbSet<WalletModel> Wallets { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();

            optionsBuilder
                .UseSqlServer("Server=(localdb)\\MSSQLLocalDB;Database=NeobankDB;Integrated Security=True;");
        }
    }
}
