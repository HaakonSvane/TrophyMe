using System.Reflection;
using api.API.Middleware;
using api.Auth;
using api.Auth.Handlers;
using api.Auth.Requirements;
using api.Database;
using api.Repository;
using api.Transport;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication.JwtBearer;
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
        
        var authBuilder = builder.Services.AddAuthentication(options =>
        {
            options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
        });
        
        authBuilder.AddJwtBearer(jwtOptions =>
        {
            
            jwtOptions.IncludeErrorDetails = true;
            jwtOptions.SecurityTokenValidators.Clear();
            jwtOptions.SecurityTokenValidators.Add(new GoogleSecurityTokenValidator(config));
        });

        // if (builder.Environment.IsDevelopment())
        // {
        //     authBuilder.AddScheme<FakeAuthHandlerOptions, FakeAuthHandler>(FakeAuthHandler.AuthenticationScheme,
        //         _ => { });
        // }
        
        builder.Services.AddAuthorization(cfg => 
            cfg.AddPolicy("IsGroupMember", policy => policy.Requirements.Add(new GroupMemberRequirement()))
            );

        builder.Services
            .AddScoped<IUserRepository, UserRepository>()
            .AddScoped<IGroupRepository, GroupRepository>()
            .AddScoped<IGameRepository, GameRepository>();

        builder.Services.AddSingleton<IAuthorizationHandler, GroupMemberHandler>();

        builder.Services
            .AddGraphQLServer()
            .AddAuthorization()
            .RegisterService<IUserRepository>(ServiceKind.Resolver)
            .RegisterService<IGroupRepository>(ServiceKind.Resolver)
            .RegisterService<IGameRepository>(ServiceKind.Resolver)
            .AddTypes()
            .AddGlobalObjectIdentification()
            .AddMutationConventions(applyToAllMutations: true)
            .AddQueryFieldToMutationPayloads()
            .AddHttpRequestInterceptor<TrophyHttpRequestInterceptor>()
            .UseRequest<UserMiddleware>()
            .UseDefaultPipeline()
            .AddSorting();

        var app = builder.Build();

        app
            .UseAuthentication()
            .UseAuthorization();

        if (builder.Environment.IsDevelopment())
        {
            app.MapBananaCakePop("/dev");
        }
        app.MapGraphQLHttp().RequireAuthorization();
        app.MapGraphQLWebSocket();
        app.MapGraphQLSchema();
        
        if (args.Length > 0)
        {
            app.RunWithGraphQLCommandsAsync(args);
            return;
        }
        
        app.Run();
    }
}
