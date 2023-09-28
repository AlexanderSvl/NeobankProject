using CarTradeWebsite.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using NeobankProject.DataAccess.Repositories.Interfaces;
using NeobankProject.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace NeobankProject.DataAccess.Repositories
{
    public class AuthenticationRepository : IAuthenticationRepository
    {
        private static DatabaseContext context = new DatabaseContext();

        public async Task<AuthenticatedResponseModel> Login(UserLoginModel user)
        {
            UserModel doesUserExist = await context.Users
                .Where(u => u.Email == user.Email && u.Password == user.Password)
                .FirstOrDefaultAsync();

            if (doesUserExist != null)
            {
                var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345"));
                var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
                var tokeOptions = new JwtSecurityToken(
                    issuer: "https://localhost:5001",
                    audience: "https://localhost:5001",
                    claims: new List<Claim>(),
                    expires: DateTime.Now.AddMinutes(5),
                    signingCredentials: signinCredentials
                );

                var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);

                return new AuthenticatedResponseModel { Token = tokenString };
            }

            return null;
        }
    }
}
