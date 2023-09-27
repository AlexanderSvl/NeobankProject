using Microsoft.AspNetCore.Mvc;
using NeobankProject.DataAccess.Repositories.Interfaces;
using NeobankProject.Models;

namespace NeobankProject.Controllers
{
    public class OrderController : ControllerBase
    {
        private IOrderRepository _orderRepository { get; set; }

        public OrderController(IOrderRepository orderRepository)
        {
            this._orderRepository = orderRepository;
        }

        [HttpGet("orders/get/{ID}")]
        public async Task<ActionResult<IEnumerable<OrderModel>>> GetOrderById(Guid ID)
        {
            OrderModel order = await this._orderRepository.GetOrderByIDAsync(ID);

            if (order == null)
            {
                return NoContent();
            }

            return Ok(order);
        }

        [HttpGet("orders/get/userId={ID}")]
        public async Task<ActionResult<IEnumerable<OrderModel>>> GetAllOrdersFromUser(Guid ID)
        {
            IEnumerable<OrderModel> order = await this._orderRepository.GetAllOrdersFromUserAsync(ID);

            if (order == null)
            {
                return NoContent();
            }

            return Ok(order);
        }

        [HttpPost("orders/new")]
        public async Task<ActionResult<OrderModel>> CreateOrder([FromBody] OrderModel order)
        {
            OrderModel createdOrder = await this._orderRepository.CreateOrderAsync(order);

            if (createdOrder == null)
            {
                return BadRequest();
            }

            return Ok(createdOrder);
        }

        [HttpPost("orders/{ID}/execute")]
        public async Task<ActionResult<OrderModel>> ExecuteOrder(Guid ID, [FromBody] int quantity)
        {
            bool isOrderCreated = await this._orderRepository.ExecuteOrderAsync(ID, quantity);

            if (isOrderCreated == false)
            {
                return BadRequest();
            }

            return Ok(isOrderCreated);
        }
    }
}
