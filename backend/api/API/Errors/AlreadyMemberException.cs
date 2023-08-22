namespace api.API.Errors;

public class AlreadyMemberException : Exception
{
    public AlreadyMemberException() : base("User is already a member of this group.")
    {
    }
}