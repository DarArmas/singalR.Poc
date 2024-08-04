using FormulaOne.Service.DataService;
using FormulaOne.Service.Models;
using Microsoft.AspNetCore.SignalR;

namespace FormulaOne.Service.Hubs
{
    public class ChatHub : Hub
    {
        private readonly SharedDb _sharedDb;
        public ChatHub(SharedDb sharedDb) => _sharedDb = sharedDb;
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
            _sharedDb.connections[Context.ConnectionId] = connection;
            //Send notification only to the ones connected to the group
            await Clients.Group(connection.ChatRoom).SendAsync("JoinSpecificChatRoom", "admin",
                $"{connection.Username} has joined the group {connection.ChatRoom}");
        }

        public async Task SendMessage(string msg)
        {
            if (_sharedDb.connections.TryGetValue(Context.ConnectionId, out UserConnection connection))
            {
                //connection.Username <- who i am sending the message to
                //msg <- message i want to send to connection.Username
                await Clients.Group(connection.ChatRoom)
                    .SendAsync("ReceiveSpecificMessage",
                    connection.Username,
                    msg);
            }
        }
    }
}
