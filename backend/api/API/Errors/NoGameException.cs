namespace api.API.Errors;

public sealed class NoGameException : Exception
{
    public NoGameException(string serializedId) : base($"No game with id {serializedId} found.")
    {
    }
}