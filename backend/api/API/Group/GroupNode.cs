using api.Repository;

namespace api.API.Group;


[Node]
[ExtendObjectType(typeof(Database.Models.Group))]
public class GroupNode
{
    [DataLoader]
    internal static async Task<IReadOnlyDictionary<string, IEnumerable<Database.Models.Group>>> GetGroupsByUserIdsAsync(
        IReadOnlyList<string> ids, IGroupRepository repository, CancellationToken cancellationToken) =>
        await repository.GetGroupsForUsersIds(ids, cancellationToken);
}