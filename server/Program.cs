using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Builder;
using System.Net.WebSockets;
using System.Text;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.UseWebSockets();

app.Use(async (context, next) =>
{
    if (context.WebSockets.IsWebSocketRequest)
    {
        using var webSocket = await context.WebSockets.AcceptWebSocketAsync();
        await Receive(webSocket, async (result, buffer) =>
        {
            if (result.MessageType == WebSocketMessageType.Close)
            {
                await webSocket.CloseAsync((WebSocketCloseStatus)result.CloseStatus.Value, result.CloseStatusDescription, CancellationToken.None);
                return;
            }

            if (result.MessageType == WebSocketMessageType.Text)
            {
                var text = Encoding.UTF8.GetString(buffer, 0, result.Count);
                await SendMessage(webSocket, text);
            }
        });
    }
    else
    {
        await next();
    }
});

async Task Receive(WebSocket webSocket, Action<WebSocketReceiveResult, byte[]> handleMessage)
{
    var buffer = new ArraySegment<byte>(new byte[1024 * 4]);
    while (true)
    {
        var result = await webSocket.ReceiveAsync(buffer, CancellationToken.None);
        handleMessage(result, buffer.Array);
    }
}

async Task SendMessage(WebSocket webSocket, string message)
{
    var bytes = Encoding.UTF8.GetBytes(message);
    var arraySegment = new ArraySegment<byte>(bytes, 0, bytes.Length);
    await webSocket.SendAsync(arraySegment, WebSocketMessageType.Text, endOfMessage: true, cancellationToken: CancellationToken.None);
}

app.MapGet("/", () =>{
    return "Hello, World!";
});

app.Run();

