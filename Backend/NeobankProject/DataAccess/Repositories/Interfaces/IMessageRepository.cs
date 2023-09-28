using Microsoft.AspNetCore.Mvc;
using NeobankProject.Models;

namespace NeobankProject.DataAccess.Repositories.Interfaces
{
    public interface IMessageRepository
    {
        Task<IEnumerable<MessageModel>> GetMessagesAsync();
        Task AddMessage(MessageModel message);
        Task<bool> EdiMessageAsync(Guid messageId, MessageModel newMessage);
        Task<bool> DeleteMessageAsync(Guid ID);
        Task<MessageModel> GetMessageByIDAsync(Guid ID);
        Task<int> GetTotalMessagesCountAsync();
    }
}