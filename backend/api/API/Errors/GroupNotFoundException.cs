namespace api.API.Errors;

public class GroupNotFoundException : Exception
{
    public GroupNotFoundException(string id) : base($"Group with ID {id} not found.")
    {
    }
}