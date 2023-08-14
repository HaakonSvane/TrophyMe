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

    public async Task<ILookup<string, Group>> GetGroupsForUsersIds(IReadOnlyList<string> ids,
        CancellationToken cancellationToken)
    {
        var usersWithGroups = await _context.Users
            .Where(user => ids.Contains(user.Id))
            .Include(user => user.UserGroups)
            .ThenInclude(userGroup => userGroup.Group)
            .ToListAsync(cancellationToken);

        var lookup = usersWithGroups
            .SelectMany(
                user => user.UserGroups,
                (user, userGroup) => new { user.Id, Group = userGroup.Group }
            )
            .ToLookup(x => x.Id, x => x.Group);

        return lookup;
    }
}