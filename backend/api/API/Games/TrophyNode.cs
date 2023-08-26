using api.Database.Models;
using api.Repository;

namespace api.API.Games;

[ExtendObjectType<api.Database.Models.Trophy>]
public static class TrophyNode
{
    [DataLoader]
    internal static async Task<ILookup<int, Trophy>> GetTrophiesByGroupIds(
        IReadOnlyList<int> groupIds,
        IGameRepository repository,
        CancellationToken cancellationToken)
    {
        return await repository.GetTrophiesByGroupIdsAsync(groupIds, cancellationToken);
    }
    
    [DataLoader]
    internal static async Task<IReadOnlyDictionary<int, Trophy>> GetTrophiesByIdsAsync(
        IReadOnlyList<int> ids,
        IGameRepository repository,
        CancellationToken cancellationToken)
    {
        return await repository.GetTrophiesByIdsAsync(ids, cancellationToken);
    }
}