namespace api.API.Errors;

public class NoAdminException : Exception
{
    public NoAdminException() : base("You are not the admin of this group.")
    {
    }
}