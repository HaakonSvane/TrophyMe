using System.Reflection;
using api.API.Middleware;
using api.Auth.Handlers;
using api.Auth.Requirements;
using api.Database;
using api.Repository;
using api.Transport;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;
using Npgsql;

namespace api;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        IConfiguration config = new ConfigurationBuilder()
            .SetBasePath(builder.Environment.ContentRootPath)
            .AddJsonFile("appsettings.json", true, true)
            .AddJsonFile($"appsettings.{builder.Environment.EnvironmentName}.json", true)
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
                .UseNpgsql(connectionStringBuilder.ConnectionString));


        var authBuilder = builder.Services.AddAuthentication();

        if (builder.Environment.IsDevelopment())
            authBuilder.AddScheme<FakeAuthHandlerOptions, FakeAuthHandler>(FakeAuthHandler.AuthenticationScheme,
                _ => { });
        
        builder.Services.AddAuthorization(config => 
            config.AddPolicy("IsGroupMember", policy => policy.Requirements.Add(new GroupMemberRequirement()))
            );

        builder.Services
            .AddScoped<IUserRepository, UserRepository>()
            .AddScoped<IGroupRepository, GroupRepository>()
            .AddScoped<IGameRepository, GameRepository>();

        builder.Services.AddSingleton<IAuthorizationHandler, GroupMemberHandler>();

        builder.Services
            .AddGraphQLServer()
            .RegisterService<IUserRepository>(ServiceKind.Resolver)
            .RegisterService<IGroupRepository>(ServiceKind.Resolver)
            .RegisterService<IGameRepository>(ServiceKind.Resolver)
            .AddAuthorization()
            .AddTypes()
            .AddGlobalObjectIdentification()
            .AddMutationConventions(applyToAllMutations: true)
            .AddQueryFieldToMutationPayloads()
            .AddHttpRequestInterceptor<TrophyHttpRequestInterceptor>()
            .UseRequest<UserMiddleware>()
            .UseDefaultPipeline();

        var app = builder.Build();

        app
            .UseAuthentication()
            .UseAuthorization();
        
        app.MapGraphQL();
        
        /*if (args.Length > 0)
        {
            app.RunWithGraphQLCommandsAsync(args);
            return;
        }*/
        app.Run();
    }
}