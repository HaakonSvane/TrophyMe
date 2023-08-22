using api.API.Account;
using api.Database.Models;
using api.Repository;
using HotChocolate.Authorization;

namespace api.API.Group;

[Authorize(Policy = "IsGroupMember", Apply = ApplyPolicy.AfterResolver)]
[ExtendObjectType(typeof(Database.Models.Group))]
public static class GroupNode
{
    
    public static async Task<GroupInvite?> GetInviteAsync(
        [Parent] Database.Models.Group group,
        IInvitesByGroupIdsDataLoader dataLoader,
        CancellationToken cancellationToken)
    {
        return await dataLoader.LoadAsync(group.Id, cancellationToken);
    } 
    
    public static async Task<IEnumerable<Database.Models.User>> GetMembersAsync(
        [Parent] Database.Models.Group group,
        IUsersByGroupIdsDataLoader dataloader,
        CancellationToken cancellationToken)
    {
        return await dataloader.LoadAsync(group.Id, cancellationToken);
    }
    
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
        return await repository.GetGroupsForUsersIdsAsync(ids, cancellationToken);
    }
    
    [DataLoader]
    internal static async Task<IReadOnlyDictionary<int, GroupInvite>> GetInvitesByGroupIdsAsync(
        IReadOnlyList<int> ids, IGroupRepository repository, CancellationToken cancellationToken)
    {
        return await repository.GetInvitesForGroupIdsAsync(ids, cancellationToken);
    }

    [DataLoader]
    internal static async Task<IReadOnlyDictionary<string, GroupInvite>> GetInvitesByInviteCodeAsync(
        IReadOnlyList<string> ids,
        IGroupRepository repository,
        CancellationToken cancellationToken)
    {
        return await repository.GetInvitesForInviteCodesAsync(ids, cancellationToken);
    }
}