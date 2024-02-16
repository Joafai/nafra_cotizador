using Configuration;
using Configuration.Implementation;
using Services;
using Services.Implementations;

namespace WebApi;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        //builder.Services.AddAuthorization();

        builder.Configuration.AddJsonFile("appsettings.Development.json", optional: true, reloadOnChange: true);

        builder.Services.AddControllers();

        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();

        builder.Services.AddScoped<IInfoAutoConfiguration, InfoAutoConfiguration>();
        builder.Services.AddScoped<IInfoAutoApiService, InfoAutoApiService>();

        var app = builder.Build();

        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        //app.UseHttpsRedirection();

        //app.UseAuthorization();

        app.MapControllers();

        app.Run();
    }
}
