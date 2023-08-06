using api.Database.Models;
using api.Repository;

namespace api.API.Account;

[QueryType]
public static class UserQueries
{
    public static async Task<User?> GetMeAsync(
        [GlobalState] string? userId,
        IUserRepository repository,
        CancellationToken cancellationToken)
    {
        if (userId is null) return null;
        return await repository.GetUserByIdAsync(userId, cancellationToken);
    }

    [NodeResolver]
    public static async Task<User?> GetUserByIdAsync(
        string id,
        IUserByIdDataLoader dataLoader,
        CancellationToken cancellationToken)
    {
        return await dataLoader.LoadAsync(id, cancellationToken);
    }
}