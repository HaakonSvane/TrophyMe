using api.Database.Models;
using api.Transport;

namespace api.API.Account;

[QueryType]
public static class UserQueries
{
    public static async Task<User?> GetMeAsync(
        [UserId] string? userId,
        IUsersByIdsDataLoader dataLoader,
        CancellationToken cancellationToken)
    {
        if (userId is null) return null;
        return await dataLoader.LoadAsync(userId, cancellationToken);
    }

    [NodeResolver]
    public static async Task<User?> GetUserByIdAsync(
        string id,
        IUsersByIdsDataLoader dataLoader,
        CancellationToken cancellationToken)
    {
        return await dataLoader.LoadAsync(id, cancellationToken);
    }
}