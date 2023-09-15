﻿using System.ComponentModel.DataAnnotations;

namespace NeobankProject.Models
{
    public class WalletModel
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        public UserModel User { get; set; }

        [Required]
        public decimal Value { get; set; }

        [Required]
        public CurrencyModel Currency { get; set; }
    }
}
