using NeobankProject.Models;

namespace NeobankProject.DataAccess.Repositories.Interfaces
{
    public interface IAuthenticationRepository
    {
        Task<AuthenticatedResponseModel> Login(UserLoginModel user);
    }
}
