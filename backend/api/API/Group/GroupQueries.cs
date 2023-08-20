namespace api.API.Group;

[QueryType]
public static class GroupQueries
{
    [NodeResolver]
    public static async Task<Database.Models.Group?> GetGroupByIdAsync(
        int id,
        IGroupsByIdsDataLoader dataLoader,
        CancellationToken cancellationToken)
    {
        return await dataLoader.LoadAsync(id, cancellationToken);
    }
}