using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NeobankProject.Models
{
    public class OrderModel
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        public bool IsArchived { get; set; }

        [Required]
        public string OrderType { get; set; }

        [Required]
        public UserModel User { get; set; }

        [Required]
        public StockModel Stock { get; set; }

        [Required]
        public DateTime DateOfExecution { get; set; }
    }
}
