using Microsoft.AspNetCore.Mvc;
using NeobankProject.DataAccess.Repositories.Interfaces;
using NeobankProject.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace NeobankProject.Controllers
{
    [ApiController]
    [Route("api/transactions")]
    public class TransactionController : ControllerBase
    {
        private ITransactionRepository _transactionRepository;

        public TransactionController(ITransactionRepository transactionRepository)
        {
            this._transactionRepository = transactionRepository;
        }

        [HttpPost("add")]
        public async Task<ActionResult<TransactionModel>> CreateTransaction([FromBody] TransactionModel transactionModel)
        {
            TransactionModel createdTransaction = await this._transactionRepository.CreateTransactionAsync(transactionModel);

            if (createdTransaction == null)
            {
                return BadRequest(createdTransaction);
            }

            return Ok(createdTransaction);
        }

        [HttpGet("all")]
        public async Task<ActionResult<IEnumerable<TransactionModel>>> GetAllTransactions()
        {
            IEnumerable<TransactionModel> transactions = await this._transactionRepository.GetAllTransactionsAsync();

            if (transactions == null)
            {
                return NoContent();
            }

            return Ok(transactions);
        }

        [HttpGet("{ID}/get")]
        public async Task<ActionResult<TransactionModel>> GetTransactionById(Guid ID)
        {
            TransactionModel transaction = await this._transactionRepository.GetTransactionByIdAsync(ID);

            if (transaction == null)
            {
                return NoContent();
            }

            return Ok(transaction);
        }

        [HttpGet("userId={ID}/get")]
        public async Task<ActionResult<IEnumerable<TransactionModel>>> GetAllTransactionsFromUser(Guid ID)
        {
            IEnumerable<TransactionModel> transactions = await this._transactionRepository.GetAllTransactionsFromUserAsync(ID);

            if (transactions == null)
            {
                return NoContent();
            }

            return Ok(transactions);
        }

        [HttpPut("{ID}/status")]
        public async Task<ActionResult> UpdateTransactionStatus(Guid ID, [FromBody] string status)
        {
            bool isUpdated = await this._transactionRepository.UpdateTransactionStatusAsync(ID, status);

            if (!isUpdated)
            {
                return BadRequest("Update failed.");
            }

            return Ok("Status updated successfully.");
        }

        [HttpDelete("{ID}/delete")]
        public async Task<ActionResult> DeleteTransaction(Guid ID)
        {
            bool isDeleted = await this._transactionRepository.DeleteTransactionAsync(ID);

            if (!isDeleted)
            {
                return BadRequest("Delete failed.");
            }

            return Ok("Transaction deleted successfully.");
        }
    }
}
