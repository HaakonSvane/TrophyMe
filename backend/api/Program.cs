using System.Reflection;
using api.Database;
using api.Repository;
using api.Transport;
using Microsoft.EntityFrameworkCore;
using Npgsql;

namespace api;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);
     
        IConfiguration config  = new ConfigurationBuilder()
            .SetBasePath(builder.Environment.ContentRootPath)
            .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
            .AddJsonFile($"appsettings.{builder.Environment.EnvironmentName}.json", optional: true)
            .AddUserSecrets(Assembly.GetExecutingAssembly(), true)
            .AddEnvironmentVariables()
            .Build();

        var connectionStringBuilder = new NpgsqlConnectionStringBuilder();
        connectionStringBuilder.Host = config["Database:Host"];
        connectionStringBuilder.Port = config.GetValue<int>("Database:Port");
        connectionStringBuilder.Username = config["Database:User"];
        connectionStringBuilder.Password = config["Database:Password"];
        
        builder.Services.AddDbContextPool<TrophyDbContext>(options =>
            options
                .LogTo(Console.WriteLine)
                .UseNpgsql(connectionStringBuilder.ConnectionString));
                
        
        var authBuilder = builder.Services.AddAuthentication();

        if (builder.Environment.IsDevelopment())
        {
            authBuilder.AddScheme<FakeAuthHandlerOptions, FakeAuthHandler>(FakeAuthHandler.AuthenticationScheme,
                _ => { });
        }
        
        builder.Services
            .AddScoped<IUserRepository, UserRepository>();

        builder.Services
            .AddGraphQLServer()
            .RegisterService<IUserRepository>(ServiceKind.Resolver)
            .AddAuthorization()
            .AddTypes()
            .AddGlobalObjectIdentification()
            .AddMutationConventions()
            .AddHttpRequestInterceptor<TrophyHttpRequestInterceptor>();

        var app = builder.Build();

        app.UseAuthentication();        
        app.MapGraphQL();
        app.Run();
    }
}