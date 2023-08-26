using api.Repository;

namespace api.API.Games;

[ExtendObjectType<Database.Models.Game>]
public static class GameNode
{
    
    [DataLoader]
    internal static async Task<ILookup<int, Database.Models.Game>> GetGamesByGroupIdsAsync(
        IReadOnlyList<int> groupIds,
        IGameRepository repository,
        CancellationToken cancellationToken)
    {
        return await repository.GetGamesByGroupIdsAsync(groupIds, cancellationToken);
    }

    [DataLoader]
    internal static async Task<IReadOnlyDictionary<int, Database.Models.Game>> GetGamesByIdsAsync(
        IReadOnlyList<int> ids,
        IGameRepository repository,
        CancellationToken cancellationToken)
    {
        return await repository.GetGamesByIdsAsync(ids, cancellationToken);
    }
}
