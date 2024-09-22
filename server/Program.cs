var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      policy  =>
                      {
                          policy.WithOrigins("https://localhost:3000",
                                              "http://braeniaks.vercel.app");
                      });
});


app.MapGet("/", () => "Hello World!");

app.Run();
