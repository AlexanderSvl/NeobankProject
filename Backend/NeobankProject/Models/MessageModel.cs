using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NeobankProject.Models
{
    public class MessageModel
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        public string Description { get; set; }
    }
}
