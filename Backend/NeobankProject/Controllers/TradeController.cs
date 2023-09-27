using Microsoft.AspNetCore.Mvc;
using NeobankProject.DataAccess.Repositories.Interfaces;
using NeobankProject.Models;

namespace NeobankProject.Controllers
{
    public class TradeController : ControllerBase
    {
        private ITradeRepository _tradeRepository;

        public TradeController(ITradeRepository tradeRepository)
        {
            this._tradeRepository = tradeRepository;
        }

        [HttpPost("trades/add")]
        public async Task<ActionResult<TradeModel>> CreateTrade([FromBody] TradeModel tradeModel)
        {
            TradeModel createdTrade = await this._tradeRepository.CreateTradeAsync(tradeModel);

            if(createdTrade == null)
            {
                return BadRequest(createdTrade);
            }

            return Ok(createdTrade);
        }

        [HttpGet("trades/all")]
        public async Task<ActionResult<IEnumerable<TradeModel>>> GetAllTrades()
        {
            IEnumerable<TradeModel> trades = await this._tradeRepository.GetAllTradesAsync();

            if(trades == null)
            {
                return NoContent();
            }

            return Ok();
        }

        [HttpGet("trades/{ID}/get")]
        public async Task<ActionResult<IEnumerable<TradeModel>>> GetStockById(Guid ID)
        {
            TradeModel trade = await this._tradeRepository.GetTradeByIdAsync(ID);

            if (trade == null)
            {
                return NoContent();
            }

            return Ok(trade);
        }

        [HttpGet("trades/userId={ID}/get")]
        public async Task<ActionResult<IEnumerable<TradeModel>>> GetAllOrdersFromUser(Guid ID)
        {
            IEnumerable<TradeModel> trades = await this._tradeRepository.GetAllTradesFromUserAsync(ID);

            if (trades == null)
            {
                return NoContent();
            }

            return Ok(trades);
        }
    }
}
