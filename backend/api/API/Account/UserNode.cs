using api.API.Group;
using api.Repository;
using api.Database.Models;

namespace api.API.Account;

[Node]
[ExtendObjectType(typeof(User))]
public static class UserNode
{
    public static async Task<IEnumerable<Database.Models.Group>> GetGroupsAsync([Parent] User user, IGroupsByUserIdsDataLoader dataLoader,
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
}
