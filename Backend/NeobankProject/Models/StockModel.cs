using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NeobankProject.Models
{
    public class StockModel
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        public string Symbol { get; set; }

        [Required]
        [StringLength(100)]
        public string CompanyName { get; set; }

        [Required]
        public decimal LastOpenPrice { get; set; }

        [Required]
        public decimal CurrentPrice { get; set; }

        [Required]
        public decimal LastClosePrice { get; set; }

        [Required]
        public DateTime LastTradeDate { get; set; }
    }
}
