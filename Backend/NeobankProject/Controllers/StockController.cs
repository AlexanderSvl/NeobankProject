﻿using Microsoft.AspNetCore.Mvc;
using NeobankProject.DataAccess.Repositories.Interfaces;
using NeobankProject.Models;

namespace NeobankProject.Controllers
{
    [ApiController]
    [Route("api/stocks")]
    public class StockController : ControllerBase
    {
        private IStockRepository _stockRepository { get; set; }

        public StockController(IStockRepository stockRepository)
        {
            this._stockRepository = stockRepository;
        }

        [HttpGet("{ID}/get")]
        public async Task<ActionResult<StockModel>> GetStockById(Guid ID)
        {
            StockModel order = await this._stockRepository.GetStockByIdAsync(ID);

            if (order == null)
            {
                return NoContent();
            }

            return Ok(order);
        }

        [HttpGet("get")]
        public async Task<ActionResult<IEnumerable<StockModel>>> GetAllStocks()
        {
            IEnumerable<StockModel> order = await this._stockRepository.GetAllStocksAsync();

            if (order == null)
            {
                return NoContent();
            }

            return Ok(order);
        }

        [HttpPost("add")]
        public async Task<ActionResult<StockModel>> AddStock([FromBody] StockModel order)
        {
            StockModel createdOrder = await this._stockRepository.AddStockAsync(order);

            if (createdOrder == null)
            {
                return BadRequest();
            }

            return Ok(createdOrder);
        }

        [HttpGet("{ID}/delete")]
        public async Task<ActionResult<IEnumerable<StockModel>>> DeleteStock(Guid ID)
        {
            bool isDeleted = await this._stockRepository.DeleteStockAsync(ID);

            if (isDeleted == false)
            {
                return NoContent();
            }

            return Ok();
        }

        [HttpPost("{ID}/update")]
        public async Task<ActionResult<StockModel>> UpdateStock(Guid ID, [FromBody] StockModel order)
        {
            StockModel updatedOrder = await this._stockRepository.UpdateStockAsync(ID, order);

            if (updatedOrder == null)
            {
                return BadRequest();
            }

            return Ok(updatedOrder);
        }
    }
}
