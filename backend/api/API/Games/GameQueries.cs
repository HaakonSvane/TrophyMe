using api.Database.Models;

namespace api.API.Games;

[QueryType]
public static class GameQueries
{
    [NodeResolver]
    public static async Task<Game?> GetGameByIdAsync(
        int id,
        IGamesByIdsDataLoader dataLoader,
        CancellationToken cancellationToken)
    {
        return await dataLoader.LoadAsync(id, cancellationToken);
    }
}