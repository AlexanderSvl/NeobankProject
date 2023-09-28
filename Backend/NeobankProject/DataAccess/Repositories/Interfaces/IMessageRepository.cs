using Microsoft.AspNetCore.Mvc;
using NeobankProject.Models;

namespace NeobankProject.DataAccess.Repositories.Interfaces
{
    public interface IMessageRepository
    {
        Task<IEnumerable<MessagesModel>> GetMessagesAsync();
        Task AddMessage(MessagesModel message);
        Task<bool> EdiMessageAsync(Guid messageId, MessagesModel newMessage);
        Task<bool> DeleteMessageAsync(Guid ID);
        Task<MessagesModel> GetMessageByIDAsync(Guid ID);
        Task<int> GetTotalMessagesCountAsync();
    }
}