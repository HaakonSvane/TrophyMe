using api.Database;
using api.Database.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repository;

public class GroupRepository : IGroupRepository
{
    private readonly TrophyDbContext _context;

    public GroupRepository(TrophyDbContext context)
    {
        _context = context;
    }

    public async Task<IReadOnlyDictionary<string, IEnumerable<Group>>> GetGroupsForUsersIds(IReadOnlyList<string> ids,
        CancellationToken cancellationToken)
    {
        return await _context.Users
            .Where(user => ids.Contains(user.Id))
            .Include(user => user.UserGroups)
            .ThenInclude(userGroup => userGroup.Group)
            .ToDictionaryAsync(
                user => user.Id,
                user => user.UserGroups
                    .Select(userGroup => userGroup.Group)
                    .ToList() as IEnumerable<Group>,
                cancellationToken);
    }
}