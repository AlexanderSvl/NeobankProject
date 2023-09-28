using System.ComponentModel.DataAnnotations;

namespace NeobankProject.Models
{
    public class MessageModel
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        public string MessageValue { get; set; }
    }
}
