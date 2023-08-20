using api.Database.Models;

namespace api.Repository;

public interface IGroupRepository
{
    public Task<ILookup<string, Group>> GetGroupsForUsersIds(IReadOnlyList<string> ids,
        CancellationToken cancellationToken);
    
    public Task<IReadOnlyDictionary<int, Group>> GetGroupsByIdsAsync(IReadOnlyList<int> ids,
        CancellationToken cancellationToken);

    public Task<Group> CreateGroupAsync(string adminUserId, Group group, CancellationToken cancellationToken);
}