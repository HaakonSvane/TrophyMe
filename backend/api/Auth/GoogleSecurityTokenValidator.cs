using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Google.Apis.Auth;
using Google.Apis.Util;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;

namespace api.Auth;

// https://developers.google.com/identity/sign-in/web/backend-auth
public class GoogleSecurityTokenValidator : ISecurityTokenValidator
{
    private readonly JwtSecurityTokenHandler _tokenHandler;
    private readonly IConfiguration _config;

    public GoogleSecurityTokenValidator(IConfiguration config)
    {
        _config = config;
        _tokenHandler = new JwtSecurityTokenHandler();
    }

    public bool CanValidateToken => true;

    public int MaximumTokenSizeInBytes { get; set; } = TokenValidationParameters.DefaultMaximumTokenSizeInBytes;

    public bool CanReadToken(string securityToken)
    {
        return _tokenHandler.CanReadToken(securityToken);
    }

    public ClaimsPrincipal ValidateToken(string securityToken, TokenValidationParameters validationParameters, out SecurityToken validatedToken)
    {
        try
        {
            var audience = _config["Providers:Google:ClientId"];
            if (string.IsNullOrEmpty(audience))
            {
                throw new Exception("Google client id not found");
            }
        
            var validationSettings = new GoogleJsonWebSignature.ValidationSettings()
            {
                Audience = new List<string>() { audience },
            };
        
            var payload = GoogleJsonWebSignature.ValidateAsync(securityToken, validationSettings).Result;

            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, payload.Name),
                new Claim(ClaimTypes.Name, payload.Name),
                new Claim(JwtRegisteredClaimNames.FamilyName, payload.FamilyName),
                new Claim(JwtRegisteredClaimNames.GivenName, payload.GivenName),
                new Claim(JwtRegisteredClaimNames.Email, payload.Email),
                new Claim(JwtRegisteredClaimNames.Sub, payload.Subject),
                new Claim(JwtRegisteredClaimNames.Iss, payload.Issuer),
            };

        
            var principle = new ClaimsPrincipal();
            principle.AddIdentity(new ClaimsIdentity(claims, JwtBearerDefaults.AuthenticationScheme));
            validatedToken = new JwtSecurityToken(payload.Issuer, audience, claims);
            return principle;
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;

        }
    }
}