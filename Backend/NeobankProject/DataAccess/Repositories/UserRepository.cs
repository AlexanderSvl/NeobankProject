using CarTradeWebsite.Context;
using Microsoft.EntityFrameworkCore;
using NeobankProject.DataAccess.Repositories.Interfaces;
using NeobankProject.Models;

namespace NeobankProject.Repositories
{
    public class UserRepository : IUserRepository
    {
        private static DatabaseContext context = new DatabaseContext();

        public async Task<UserModel> CreateUserAsync(UserModel user)
        {
            await context.Users.AddAsync(user);
            await context.SaveChangesAsync();

            return user;
        }

        public async Task<int> GetTotalUsersCountAsync()
        {
            return await context.Users
                .CountAsync();
        }

        public async Task<UserModel> GetUserByIDAsync(Guid ID)
        {
            return await context.Users
                .FindAsync(ID);
        }

        public async Task<IEnumerable<UserModel>> GetUsersAsync()
        {
            return await context.Users
                .ToListAsync();
        }

        public async Task<bool> DeleteUserAsync(Guid ID)
        {
            UserModel userToRemove = await context.Users
                .Where(user => user.ID == ID)
                .FirstAsync();

            if (userToRemove != null)
            {
                context.Users.Remove(userToRemove);
                await context.SaveChangesAsync();

                return true;
            }

            return false;
        }

        public async Task<UserModel> EditUserAsync(Guid userId, UserModel user)
        {
            UserModel userToUpdate = await context.Users
                .Where(user => user.ID == userId)
                .FirstAsync();

            if (userToUpdate != null)
            {
                userToUpdate.UserName = user.UserName;
                userToUpdate.FirstName = user.FirstName;
                userToUpdate.LastName = user.LastName;
                userToUpdate.Role = user.Role;
                userToUpdate.Email = user.Email;

                await context.SaveChangesAsync();
                return userToUpdate;
            }

            return null;
        }
    }
}
