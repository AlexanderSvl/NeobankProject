using CarTradeWebsite.Context;
using Microsoft.EntityFrameworkCore;
using NeobankProject.DataAccess.Repositories.Interfaces;
using NeobankProject.Models;

namespace NeobankProject.DataAccess.Repositories
{
    public class MessageRepository : IMessageRepository
    {
        private static DatabaseContext context = new DatabaseContext();

        public async Task AddMessage(MessageModel message)
        {
            context.Messages.Add(message);
            await context.SaveChangesAsync();
        }

        public async Task<bool> DeleteMessageAsync(Guid ID)
        {
            var messageForDelete = await context.Messages
                .FindAsync(ID);

            if (messageForDelete != null)
            {
                context.Messages.Remove(messageForDelete);
                await context.SaveChangesAsync();

                return true;
            }

            return false;
        }

        public async Task<IEnumerable<MessageModel>> GetMessagesAsync()
        {
            return await context.Messages
                .ToListAsync();
        }

        public async Task<int> GetTotalMessagesCountAsync()
        {
            return await context.Messages
                .CountAsync();
        }

        public async Task<bool> EdiMessageAsync(Guid messageId, MessageModel newMessage)
        {
            MessageModel messageToUpdate = await context.Messages
                .FindAsync(messageId);

            if (messageToUpdate != null)
            {
                messageToUpdate.MessageValue = newMessage.MessageValue;
                await context.SaveChangesAsync();
                return true;
            }

            return false;
        }

        public async Task<MessageModel> GetMessageByIDAsync(Guid ID)
        {
            return await context.Messages
                .FindAsync(ID);
        }
    }
}
