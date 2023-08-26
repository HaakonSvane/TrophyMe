namespace api.API.Errors;

public class InviteResetTooSoonException : Exception
{
    public InviteResetTooSoonException(TimeSpan deltaTime) : base("Invite reset too soon. Please wait.")
    {
        SecondsToWait = deltaTime.Seconds;
    }
    
    public int SecondsToWait { get; }
}