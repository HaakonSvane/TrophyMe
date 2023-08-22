namespace api.API.Errors;

public class InviteExpiredException : Exception
{
    public InviteExpiredException(DateTimeOffset expiration) : base($"Invite expired ({expiration.ToUniversalTime().ToString()})")
    {
    }
}