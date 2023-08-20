using api.Database;
using api.Database.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repository;

public sealed class GroupRepository : IGroupRepository
{
    private readonly TrophyDbContext _context;

    public GroupRepository(TrophyDbContext context)
    {
        _context = context;
    }

    public async Task<ILookup<string, Group>> GetGroupsForUsersIds(
        IReadOnlyList<string> ids,
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

    public async Task<IReadOnlyDictionary<int, Group>> GetGroupsByIdsAsync(
        IReadOnlyList<int> ids,
        CancellationToken cancellationToken)
    {
        return await _context.Groups
            .Where(group => ids.Contains(group.Id))
            .ToDictionaryAsync(group => group.Id, cancellationToken);
    }

    public async Task<Group> CreateGroupAsync(
        string adminUserId,
        Group group,
        CancellationToken cancellationToken)
    {
        group.Admin = null;
        group.AdminId = adminUserId;

        var userGroup = new UserGroup()
        {
            Group = group,
            UserId = adminUserId,
        };
        
        await _context.Groups.AddAsync(group, cancellationToken);
        await _context.UserGroups.AddAsync(userGroup, cancellationToken);
        await _context.SaveChangesAsync(cancellationToken);
        return group;
    }
}