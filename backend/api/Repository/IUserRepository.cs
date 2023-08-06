using api.Database;
using api.Database.Models;

namespace api.Repository;

public interface IUserRepository
{
    public Task<User> GetUserByIdAsync(string id, CancellationToken cancellationToken);
    public Task<IReadOnlyDictionary<string, User>> GetUsersByIdsAsync(IReadOnlyList<string> ids, CancellationToken cancellationToken);
}