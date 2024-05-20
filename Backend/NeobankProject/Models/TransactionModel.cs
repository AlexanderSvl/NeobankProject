using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NeobankProject.Models
{
    public class TransactionModel
    {
        [Key]
        public Guid Id { get; set; }

        public UserModel User { get; set; }

        [Required]
        [StringLength(50)]
        public string TransactionType { get; set; } // e.g., Deposit, Withdrawal, Transfer

        [Required]
        public decimal Amount { get; set; }

        [Required]
        public DateTime TransactionDate { get; set; }

        [StringLength(250)]
        public string Description { get; set; }

        [StringLength(50)]
        public string Status { get; set; } // e.g., Pending, Completed, Failed
    }
}