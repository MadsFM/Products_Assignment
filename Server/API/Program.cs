using Service;


var builder = WebApplication.CreateBuilder(args);
builder.Services.AddSingleton<ProductService>();
builder.Services.AddControllers();
builder.Services.AddOpenApiDocument();



var app = builder.Build();

app.UseOpenApi();
app.UseSwaggerUi();

app.MapControllers();

app.UseCors(opt =>
{
    opt.AllowAnyHeader();
    opt.AllowAnyMethod();
    opt.AllowAnyHeader();
});


app.Run();