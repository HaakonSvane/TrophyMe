using api.Database.Models;

namespace api.Repository;

public interface IUserRepository
{
    public Task<User?> GetUserByIdAsync(string userId, CancellationToken cancellationToken);

    public Task<IReadOnlyDictionary<string, User>> GetUsersByIdsAsync(IReadOnlyList<string> ids,
        CancellationToken cancellationToken);

    public Task<User> CreateUserAsync(User user, CancellationToken cancellationToken);
}