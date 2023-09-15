using System.ComponentModel.DataAnnotations;

namespace NeobankProject.Models
{
    public class UserModel
    {
        [Key] 
        public Guid Id { get; set; }

        [Required]
        [StringLength(100)]
        public string UserName { get; set; }

        [Required]
        [StringLength(100)]
        public string Email { get; set; }

        [Required]
        [StringLength(100)]
        public string Password { get; set; }
    }
}
