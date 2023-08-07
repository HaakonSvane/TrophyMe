using api.Database;
using api.Repository;
using api.Transport;
using Microsoft.EntityFrameworkCore;

namespace api;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);
        builder.Services.AddDbContextPool<TrophyDbContext>(options =>
            options.UseNpgsql(Environment.GetEnvironmentVariable("CONNECTION_STRING")));
        var authBuilder = builder.Services.AddAuthentication();

        if (builder.Environment.IsDevelopment())
        {
            authBuilder.AddScheme<FakeAuthHandlerOptions, FakeAuthHandler>(FakeAuthHandler.AuthenticationScheme, options => { });
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