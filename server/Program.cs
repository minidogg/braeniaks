using System.Diagnostics;
using System.Net;
using System.Net.WebSockets;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();

var app = builder.Build();

bool IsNotOpen(WebSocket ws){
    return (ws.State != WebSocketState.Open);
}
async Task<bool> SendMessage(WebSocket ws, string message){
    byte[] bytes = Encoding.UTF8.GetBytes(message);
    ArraySegment<byte> arraySegment = new ArraySegment<byte>(bytes, 0, bytes.Length);
    if(IsNotOpen(ws)) return false;
    await ws.SendAsync(arraySegment,
                    WebSocketMessageType.Text,
                    true,
                    CancellationToken.None);
    
    return true;
}

async Task ReceiveMessage(WebSocket socket, Action<WebSocketReceiveResult, byte[]> handleMessage){
    byte[] buffer = new byte[1024 * 4];
    
    while(IsNotOpen(socket)){
        var result = await socket.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);

        handleMessage(result, buffer); 
    }
}

app.UseWebSockets();
app.Map("/ws", async context => {
    if (!context.WebSockets.IsWebSocketRequest){
        context.Response.StatusCode = (int)HttpStatusCode.UpgradeRequired;
        return;
    }

    using var ws = await context.WebSockets.AcceptWebSocketAsync();
    await ReceiveMessage(ws, async (result, buffer)=>{
        Debug.WriteLine("Message received");
        if(result.MessageType == WebSocketMessageType.Text){
                    string message = Encoding.UTF8.GetString(buffer, 0, result.Count);
                    await SendMessage(ws, message);
        }


    });
    while(true){
        
        var message = DateTime.Now.ToString("HH:mm:ss");
        var sent = await SendMessage(ws, message);
        if(!sent)break;
        Debug.WriteLine(message);
        
        Thread.Sleep(1000);
    }

});
app.Map("/", async context => {
    context.Response.Redirect("/quiz.html");
});

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapRazorPages();

app.Run();
