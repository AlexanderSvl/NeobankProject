using Microsoft.AspNetCore.Mvc;
using NeobankProject.DataAccess.Repositories.Interfaces;
using NeobankProject.Models;

namespace NeobankProject.Controllers
{
    [ApiController]
    [Route("api/users")]
    public class UserController : ControllerBase
    {
        private IUserRepository _userRepository { get; set; }

        public UserController(IUserRepository userRepository)
        {
            this._userRepository = userRepository;
        }

        [HttpGet("count")]
        public async Task<ActionResult<int>> GetUserCount()
        {
            int count = await this._userRepository.GetTotalUsersCountAsync();

            return Ok(count);
        }

        [HttpGet("get")]
        public async Task<ActionResult<IEnumerable<UserModel>>> GetUsers()
        {
            IEnumerable<UserModel> users = await this._userRepository.GetUsersAsync();

            if (users == null || users.Count() == 0)
            {
                return NoContent();
            }

            return Ok(users);
        }

        [HttpGet("get/{ID}")]
        public async Task<ActionResult<UserModel>> GetUserById(Guid ID)
        {
            UserModel user = await this._userRepository.GetUserByIDAsync(ID);

            if (user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }

        [HttpPost("new")]
        public async Task<ActionResult<UserModel>> CreateUser([FromBody] UserModel user)
        {
            UserModel createdUser = await this._userRepository.CreateUserAsync(user);

            if (createdUser == null)
            {
                return BadRequest();
            }

            return Ok(createdUser);
        }

        [HttpPut("{userId}/edit")]
        public async Task<ActionResult<UserModel>> EditUser(Guid userId, UserModel user)
        {
            UserModel updatedUser = await this._userRepository.EditUserAsync(userId, user);

            if (updatedUser == null)
            {
                return BadRequest();
            }

            return Ok(updatedUser);
        }

        [HttpDelete("{userId}/delete")]
        public async Task<ActionResult<bool>> DeleteUser(Guid userId)
        {
            bool isDeleted = await this._userRepository.DeleteUserAsync(userId);

            if (!isDeleted)
            {
                return NotFound(userId);
            }

            return Ok();
        }
    }
}
