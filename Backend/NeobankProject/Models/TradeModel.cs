using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NeobankProject.Models
{
    public class TradeModel
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        public StockModel Stock { get; set; }

        [Required]
        public UserModel User { get; set; }
        
        [Required]
        public string TradeType { get; set; }

        [Required]
        public decimal Price { get; set; }

        [Required]
        public int Quantity { get; set; }

        [Required]
        public DateTime DateOfExecution { get; set; }
    }
}
