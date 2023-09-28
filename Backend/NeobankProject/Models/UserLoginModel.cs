using System.ComponentModel.DataAnnotations;

namespace NeobankProject.Models
{
    public class UserLoginModel
    {
        [Required]
        [StringLength(100)]
        public string Email { get; set; }

        [Required]
        [StringLength(100)]
        public string Password { get; set; }
    }
}