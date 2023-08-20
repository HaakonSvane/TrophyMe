namespace api.API.Errors;

public sealed class NoUserException : Exception
{
    public NoUserException()
        : base("There exists no user in the request context. Please log in.")
    {
    }
}