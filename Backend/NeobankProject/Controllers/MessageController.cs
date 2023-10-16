using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NeobankProject.DataAccess.Repositories.Interfaces;
using NeobankProject.Models;

namespace NeobankProject.Controllers
{
    [ApiController]
    [Route("api/messages")]
    public class MessageController : ControllerBase
    {
        private IMessageRepository _messageRepository { get; set; }

        public MessageController(IMessageRepository messageRepository)
        {
            this._messageRepository = messageRepository;
        }

        [HttpGet("all")]
        public async Task<IEnumerable<MessageModel>> GetMessagesAsync()
        {
            return await _messageRepository.GetMessagesAsync();
        }

        [HttpGet("get/{Id}")]
        public async Task<ActionResult<MessageModel>> GetMessageById(Guid Id)
        {
            MessageModel targetMessage = await _messageRepository.GetMessageByIDAsync(Id);

            if(targetMessage != null)
            {
                return Ok(targetMessage);
            }

            return NotFound();
        }

        [HttpPost("new")]
        public async Task<ActionResult<MessageModel>> AddMessage([FromBody] MessageModel newMessage)
        {
            await _messageRepository.AddMessage(newMessage);
            return CreatedAtAction("GetMessageById", new { id = newMessage.Id }, newMessage);

        }

        [HttpPut("messages/edit")]
        public async Task<ActionResult<MessageModel>> EditMessage(Guid Id, MessageModel newMessage)
        {
            bool succesfullyEditted = await _messageRepository.EdiMessageAsync(Id, newMessage);

            if(!succesfullyEditted)
            {
                return NotFound();
            }

            return Ok();
        }

        [HttpDelete("messages/delete")]
        public async Task<ActionResult<MessageModel>> DeleteMessage(Guid Id)
        {
            bool succesfullyEditted = await _messageRepository.DeleteMessageAsync(Id);

            if (!succesfullyEditted)
            {
                return NotFound();
            }

            return Ok();
        }




    }
}
