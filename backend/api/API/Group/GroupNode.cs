using api.API.Account;
using api.API.Games;
using api.Database.Models;
using api.Repository;
using HotChocolate.Authorization;
using Game = api.Database.Models.Game;

namespace api.API.Group;

[Authorize(Policy = "IsGroupMember", Apply = ApplyPolicy.AfterResolver)]
[ExtendObjectType(typeof(Database.Models.Group))]
public static class GroupNode
{
    public static async Task<IReadOnlyList<Trophy>> GetTrophiesAsync(
        [Parent] Database.Models.Group group,
        ITrophiesByGroupIdsDataLoader dataLoader,
        CancellationToken cancellationToken)
    {
        return await dataLoader.LoadAsync(group.Id, cancellationToken);
    }
    
    [UsePaging(IncludeTotalCount = true)]
    public static async Task<IReadOnlyList<Game>> GetGamesAsync(
        [Parent] Database.Models.Group group,
        IGamesByGroupIdsDataLoader dataLoader,
        CancellationToken cancellationToken)
    {
        return await dataLoader.LoadAsync(group.Id, cancellationToken);
    }
    
    public static async Task<GroupInvite?> GetInviteAsync(
        [Parent] Database.Models.Group group,
        IInvitesByGroupIdsDataLoader dataLoader,
        CancellationToken cancellationToken)
    {
        return await dataLoader.LoadAsync(group.Id, cancellationToken);
    } 
    
    [UsePaging(IncludeTotalCount = true)]
    public static async Task<IEnumerable<User>> GetMembersAsync(
        [Parent] Database.Models.Group group,
        IUsersByGroupIdsDataLoader dataLoader,
        CancellationToken cancellationToken)
    {
        return await dataLoader.LoadAsync(group.Id, cancellationToken);
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