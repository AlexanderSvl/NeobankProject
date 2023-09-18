using System.ComponentModel.DataAnnotations;

namespace NeobankProject.Models
{
    public class CurrencyModel
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        [StringLength(3)]
        public string Code { get; set; }

        [Required]
        public string Symbol { get; set; }

        [Required]
        public int NumericCode { get; set; } 
    }
}
