namespace api.API.Errors;

public class NoApprovalRequiredException : Exception
{
    public NoApprovalRequiredException() : base("The user is not required to approve this request.")
    {
    }
}