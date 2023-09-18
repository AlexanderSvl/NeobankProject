using System.ComponentModel.DataAnnotations;

namespace NeobankProject.Models
{
    public class TradeModel
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        public StockModel Stock { get; set; }

        [Required]
        public UserModel Buyer { get; set; }

        [Required]
        public decimal Price { get; set; }

        [Required]
        public int Quantity { get; set; }

        [Required]
        public DateTime DateOfExecution { get; set; }
    }
}
