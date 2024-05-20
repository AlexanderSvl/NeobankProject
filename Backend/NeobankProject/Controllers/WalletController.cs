using Microsoft.AspNetCore.Mvc;
using NeobankProject.DataAccess.Repositories.Interfaces;
using NeobankProject.Models;

namespace NeobankProject.Controllers
{
    [ApiController]
    [Route("api/wallets")]
    public class WalletController : ControllerBase
    {
        private readonly IWalletRepository _walletRepository;

        public WalletController(IWalletRepository walletRepository)
        {
            _walletRepository = walletRepository ?? throw new ArgumentNullException(nameof(walletRepository));
        }

        [HttpPost("add-balance")]
        public async Task<ActionResult<WalletModel>> AddBalanceToWallet(Guid walletId, decimal balance)
        {
            var updatedWallet = await _walletRepository.AddBalanceToWalletAsync(walletId, balance);
            if (updatedWallet == null)
            {
                return NotFound();
            }

            return Ok(updatedWallet);
        }

        [HttpPost("remove-balance")]
        public async Task<ActionResult<WalletModel>> RemoveBalanceFromWallet(Guid walletId, decimal balance)
        {
            var updatedWallet = await _walletRepository.RemoveBalanceFromWalletAsync(walletId, balance);
            if (updatedWallet == null)
            {
                return NotFound();
            }

            return Ok(updatedWallet);
        }

        [HttpPost("change-currency")]
        public async Task<ActionResult<WalletModel>> ChangeWalletCurrency(Guid walletId, CurrencyModel newCurrency)
        {
            var updatedWallet = await _walletRepository.ChangeWalletCurrencyAsync(walletId, newCurrency);
            if (updatedWallet == null)
            {
                return NotFound();
            }

            return Ok(updatedWallet);
        }

        [HttpPost("create")]
        public async Task<ActionResult<WalletModel>> CreateWallet([FromBody] WalletModel wallet)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var createdWallet = await _walletRepository.CreateWalletAsync(wallet);

            return CreatedAtAction(nameof(GetWalletById), new { id = createdWallet.Id }, createdWallet);
        }

        [HttpGet("get/{id}")]
        public async Task<ActionResult<WalletModel>> GetWalletById(Guid id)
        {
            var wallet = await _walletRepository.GetWalletByIDAsync(id);

            if (wallet == null)
            {
                return NotFound();
            }

            return Ok(wallet);
        }
    }
}