using api.Repository;

namespace api.API.Games;

[ExtendObjectType<api.Database.Models.TrophyRequest>]
public static class TrophyRequest
{
    [DataLoader]
    internal static async Task<IReadOnlyDictionary<int, api.Database.Models.TrophyRequest>> GetTrophyRequestsByTrophyIdsAsync(
        IReadOnlyList<int> trophyIds,
        IGameRepository repository,
        CancellationToken cancellationToken)
    {
        return await repository.GetTrophyRequestsByTrophyIdsAsync(trophyIds, cancellationToken);
    }
    
}