using api.Database.Models;
using api.Repository;

namespace api.API.Account;

[Node]
[ExtendObjectType(typeof(User))]
public static class UserNode
{
    [DataLoader]
    internal static async Task<IReadOnlyDictionary<string, User>> GetUserByIdAsync(
        IReadOnlyList<string> ids,
        IUserRepository repository,
        CancellationToken cancellationToken)
    {
        return await repository.GetUsersByIdsAsync(ids, cancellationToken);
    }
}
