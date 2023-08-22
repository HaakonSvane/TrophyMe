namespace api.API.Errors;

public class NoInviteException : Exception
{
    public NoInviteException() : base("No invite found for the given invite code.")
    {
    }
}