using api.Repository;
using HotChocolate.Authorization;

namespace api.API.Group;

[Authorize(Policy = "IsGroupMember", Apply = ApplyPolicy.AfterResolver)]
[ExtendObjectType(typeof(Database.Models.Group))]
public class GroupNode
{
    [DataLoader]
    internal static async Task<IReadOnlyDictionary<int, Database.Models.Group>> GetGroupsByIdsAsync(
        IReadOnlyList<int> ids, IGroupRepository repository, CancellationToken cancellationToken)
    {
        return await repository.GetGroupsByIdsAsync(ids, cancellationToken);
    }
    
    [DataLoader]
    internal static async Task<ILookup<string, Database.Models.Group>> GetGroupsByUserIdsAsync(
        IReadOnlyList<string> ids, IGroupRepository repository, CancellationToken cancellationToken)
    {
        return await repository.GetGroupsForUsersIds(ids, cancellationToken);
    }
}