using System.ComponentModel.DataAnnotations;

namespace NeobankProject.Models
{
    public class WalletModel
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        public string Type { get; set; }

        [Required]
        public UserModel User { get; set; }

        [Required]
        public decimal Balance { get; set; }

        [Required]
        public CurrencyModel Currency { get; set; }
    }
}
