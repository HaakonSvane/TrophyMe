using api.Database.Models;

namespace api.Repository;

public interface IGroupRepository
{
    public Task<IReadOnlyDictionary<string, IEnumerable<Group>>> GetGroupsForUsersIds(IReadOnlyList<string> ids,
        CancellationToken cancellationToken);
}