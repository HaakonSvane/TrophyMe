using api.Database;
using api.Repository;
using Microsoft.EntityFrameworkCore;

namespace api;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);
        builder.Services.AddDbContextPool<TrophyDbContext>(options =>
            options.UseNpgsql(Environment.GetEnvironmentVariable("CONNECTION_STRING")));
        
        Console.Write($"HELLO {Environment.GetEnvironmentVariable("CONNECTION_STRING")}");

        builder.Services
            .AddScoped<IUserRepository, UserRepository>();
            
        
        builder.Services
            .AddGraphQLServer()
            .RegisterService<IUserRepository>(ServiceKind.Resolver)
            .AddTypes()
            .AddGlobalObjectIdentification()
            .AddMutationConventions();

        var app = builder.Build();

        app.MapGraphQL();
        app.Run();
    }
}