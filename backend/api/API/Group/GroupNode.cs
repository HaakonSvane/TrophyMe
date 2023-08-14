using api.Repository;

namespace api.API.Group;

[Node]
[ExtendObjectType(typeof(Database.Models.Group))]
public class GroupNode
{
    [DataLoader]
    internal static async Task<ILookup<string, Database.Models.Group>> GetGroupsByUserIdsAsync(
        IReadOnlyList<string> ids, IGroupRepository repository, CancellationToken cancellationToken)
    {
        return await repository.GetGroupsForUsersIds(ids, cancellationToken);
    }
}