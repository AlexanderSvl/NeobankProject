using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NeobankProject.DataAccess.Repositories.Interfaces;
using NeobankProject.Models;

namespace NeobankProject.Controllers
{
    public class MessagesController : ControllerBase
    {
        private IMessageRepository _messageRepository { get; set; }

        public MessagesController(IMessageRepository messageRepository)
        {
            this._messageRepository = messageRepository;
        }

        [HttpGet("messages/all")]
        public async Task<IEnumerable<MessagesModel>> GetMessagesAsync()
        {
            return await _messageRepository.GetMessagesAsync();
        }

        [HttpGet("messages/get/{Id}")]
        public async Task<ActionResult<MessagesModel>> GetMessageById(Guid Id)
        {
            MessagesModel targetMessage = await _messageRepository.GetMessageByIDAsync(Id);

            if(targetMessage != null)
            {
                return Ok(targetMessage);
            }

            return NotFound();
        }

        [HttpPost("messages/new")]
        public async Task<ActionResult<MessagesModel>> AddMessage([FromBody] MessagesModel newMessage)
        {
            await _messageRepository.AddMessage(newMessage);
            return CreatedAtAction("GetMessageById", new { id = newMessage.Id }, newMessage);

        }

        [HttpPut("messages/edit")]
        public async Task<ActionResult<MessagesModel>> EditMessage(Guid Id, MessagesModel newMessage)
        {
            bool succesfullyEditted = await _messageRepository.EdiMessageAsync(Id, newMessage);

            if(!succesfullyEditted)
            {
                return NotFound();
            }

            return Ok();
        }

        [HttpDelete("messages/delete")]
        public async Task<ActionResult<MessagesModel>> DeleteMessage(Guid Id)
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
