using api.Database;
using api.Database.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repository;

public class UserRepository: IUserRepository
{
    private readonly TrophyDbContext _context;

    public UserRepository(TrophyDbContext context)
    {
        _context = context;
    }

    public async Task<User?> GetUserByIdAsync(string id, CancellationToken cancellationToken)
    {
        return await _context.Users
            .FirstOrDefaultAsync(user => user.Id == id, cancellationToken);
    }

    public async Task<IReadOnlyDictionary<string, User>> GetUsersByIdsAsync(IReadOnlyList<string> ids, CancellationToken cancellationToken)
    {
        return await _context.Users
            .Where(user => ids.Contains(user.Id))
            .ToDictionaryAsync(user => user.Id, user => user, cancellationToken);
    }

    public async Task<User> CreateUserAsync(User user, CancellationToken cancellationToken)
    {
        var results = await _context.Users.AddAsync(user, cancellationToken);
        return results.Entity;
    }
}