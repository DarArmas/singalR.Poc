using FormulaOne.Service.Models;
using Microsoft.AspNetCore.SignalR;

namespace FormulaOne.Service.Hubs
{
    public class ChatHub : Hub
    {
        public async Task JoinChat(UserConnection connection)
        {
            //Send message to all the connected clients
            await Clients.All.SendAsync("ReceiveMessage", "admin",
                $"{connection.Username} has joined the chat");
        }

        public async Task JoinSpecificChatRoom(UserConnection connection)
        {
            //Ad id (1 client) to a specific group 
            await Groups.AddToGroupAsync(Context.ConnectionId, connection.ChatRoom);
            //Send notification only to the ones connected to the group
            await Clients.Group(connection.ChatRoom).SendAsync("ReceiveMessage", "admin",
                $"{connection.Username} has joined the group {connection.ChatRoom}");
        }
    }
}
