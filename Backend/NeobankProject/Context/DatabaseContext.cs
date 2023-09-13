using CarTradeWebsite.Models;
using Microsoft.EntityFrameworkCore;

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
        public DbSet<PostModel> Posts { get; set; }
        public DbSet<OptionModel> Options { get; set; }
        public DbSet<ImageModel> Images { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();

            optionsBuilder
                .UseSqlServer("Server=(localdb)\\MSSQLLocalDB;Database=CarTradeDB;Integrated Security=True;");
        }
    }
}
