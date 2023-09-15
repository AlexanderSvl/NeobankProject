using System.ComponentModel.DataAnnotations;

namespace NeobankProject.Models
{
    public class WalletModel
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public UserModel User { get; set; }

        [Required]
        public decimal Value { get; set; }

        [Required]
        public string DefaultCurrencyCode { get; set; }
    }
}
