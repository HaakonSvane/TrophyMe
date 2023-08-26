using api.Database.Models;

namespace api.Repository;

public interface IGameRepository
{
    public Task<ILookup<int, Game>> GetGamesByGroupIdsAsync(IReadOnlyList<int> groupIds, CancellationToken cancellationToken);
    public Task<Game> CreateGameAsync(Game game, Group group, CancellationToken cancellationToken);
    public Task<ILookup<int, Trophy>> GetTrophiesByGroupIdsAsync(IReadOnlyList<int> groupIds, CancellationToken cancellationToken);
    public Task<IReadOnlyDictionary<int, Trophy>> GetTrophiesByIdsAsync(IReadOnlyList<int> ids, CancellationToken cancellationToken);
    public Task<IReadOnlyDictionary<int, Game>> GetGamesByIdsAsync(IReadOnlyList<int> ids, CancellationToken cancellationToken);
    
    public Task<Trophy> CreateTrophyAsync(Trophy trophy, CancellationToken cancellationToken);
}