using System.Security.Claims;
using System.Text.Encodings.Web;
using Microsoft.AspNetCore.Authentication;
using Microsoft.Extensions.Options;

namespace api.Transport;

public class FakeAuthHandlerOptions : AuthenticationSchemeOptions
{
    
}

public class FakeAuthHandler : AuthenticationHandler<FakeAuthHandlerOptions>
{
    public const string AuthenticationScheme = "DEV";
    public FakeAuthHandler(IOptionsMonitor<FakeAuthHandlerOptions> options, ILoggerFactory logger, UrlEncoder encoder, ISystemClock clock) : base(options, logger, encoder, clock)
    {
    }

    protected override Task<AuthenticateResult> HandleAuthenticateAsync()
    {
        var claims = new List<Claim>
        {
            new(ClaimTypes.NameIdentifier, "123"),
            new(ClaimTypes.Name, "Developer Dude"),
            new(ClaimTypes.Email, "dev@trophydev.com"),
            new(ClaimTypes.Role, "Admin"),
        };
        var identity = new ClaimsIdentity(claims, AuthenticationScheme);
        var principal = new ClaimsPrincipal(identity);
        var ticket = new AuthenticationTicket(principal, AuthenticationScheme);

        var result = AuthenticateResult.Success(ticket);

        return Task.FromResult(result);
    }
}