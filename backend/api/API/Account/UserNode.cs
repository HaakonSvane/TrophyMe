using api.API.Group;
using api.Database.Models;
using api.Repository;
using HotChocolate.Authorization;

namespace api.API.Account;

[Authorize]
[ExtendObjectType(typeof(User))]
public static class UserNode
{
    public static async Task<IEnumerable<Database.Models.Group>> GetGroupsAsync([Parent] User user,
        IGroupsByUserIdsDataLoader dataLoader,
        CancellationToken cancellationToken)
    {
        return await dataLoader.LoadAsync(user.Id, cancellationToken);
    }
    
    public static async Task<UserProfile?> GetUserProfileAsync([Parent] User user,
        IUserProfilesByIdsDataLoader dataLoader,
        CancellationToken cancellationToken)
    {
        return await dataLoader.LoadAsync(user.Id, cancellationToken);
    }

    [DataLoader]
    internal static async Task<IReadOnlyDictionary<string, User>> GetUsersByIdsAsync(
        IReadOnlyList<string> ids,
        IUserRepository repository,
        CancellationToken cancellationToken)
    {
        return await repository.GetUsersByIdsAsync(ids, cancellationToken);
    }
    
    [DataLoader]
    internal static async Task<IReadOnlyDictionary<string, UserProfile>> GetUserProfilesByIdsAsync(
        IReadOnlyList<string> ids,
        IUserRepository repository,
        CancellationToken cancellationToken)
    {
        return await repository.GetUserProfilesByIdsAsync(ids, cancellationToken);
    }
}