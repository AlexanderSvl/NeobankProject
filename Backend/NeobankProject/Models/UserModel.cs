using System.ComponentModel.DataAnnotations;

namespace NeobankProject.Models
{
    public class UserModel
    {
        [Key] 
        public Guid ID { get; set; }

        [Required]
        [StringLength(100)]
        public string UserName { get; set; }

        [Required]
        [StringLength(100)]
        public string FirstName { get; set; }

        [Required]
        [StringLength(110)]
        public string LastName { get; set; }

        [Required]
        public string Role { get; set; }

        [Required]
        [StringLength(100)]
        public string Email { get; set; }

        [Required]
        [StringLength(100)]
        public string Password { get; set; }
    }
}
