namespace api.API.Errors;

public sealed class NoMemberException : Exception
{
    public NoMemberException(string userId, string groupId) : base($"No member with id {userId} found in group {groupId}.")
    {
    }
}