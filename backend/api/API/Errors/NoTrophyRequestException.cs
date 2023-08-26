namespace api.API.Errors;

public class NoTrophyRequestException : Exception
{
    public NoTrophyRequestException(string trophyId) : base($"No trophy request for trophy with id {trophyId} found.")
    {
    }
}