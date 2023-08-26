using api.Database.Models;

namespace api.API.Games;

[QueryType]
public static class TrophyQueries
{
    [NodeResolver]
    public static async Task<Trophy?> GetTrophyByIdAsync (
        int id,
        ITrophiesByIdsDataLoader dataLoader,
        CancellationToken cancellationToken)
    {
        return await dataLoader.LoadAsync(id, cancellationToken);
    }
}