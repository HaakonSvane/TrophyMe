using api.Database.Models;

namespace api.Repository;

public interface IGroupRepository
{
    public Task<ILookup<string, Group>> GetGroupsForUsersIds(IReadOnlyList<string> ids,
        CancellationToken cancellationToken);
}