using Service;
using FluentValidation.AspNetCore;
using Service.Validators;


var builder = WebApplication.CreateBuilder(args);
builder.Services.AddSingleton<ProductService>();
builder.Services.AddControllers();
builder.Services.AddOpenApiDocument();
builder.Services.AddProblemDetails();
builder.Services.AddFluentValidation(fv => {fv.RegisterValidatorsFromAssemblyContaining<ProductValidator>();});



var app = builder.Build();

app.UseOpenApi();
app.UseSwaggerUi();

app.MapControllers();

app.UseCors(opt =>
{
    opt.AllowAnyHeader();
    opt.AllowAnyMethod();
    opt.AllowAnyOrigin();
});


app.Run();