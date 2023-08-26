using api.Database;
using api.Database.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repository;

public class GameRepository : IGameRepository
{
    
    private readonly TrophyDbContext _context;
    
    public GameRepository(TrophyDbContext context)
    {
        _context = context;
    }
    
    public async Task<ILookup<int, Game>> GetGamesByGroupIdsAsync(IReadOnlyList<int> groupIds, CancellationToken cancellationToken)
    {
        var games = await _context.Games
            .Where(game => groupIds.Contains(game.ParentGroupId))
            .ToListAsync(cancellationToken);
        return games.ToLookup(game => game.ParentGroupId, game => game);
    }

    public async Task<Game> CreateGameAsync(Game game, Group group, CancellationToken cancellationToken)
    {
        game.ParentGroup = null;
        game.ParentGroupId = group.Id;
        await _context.Games.AddAsync(game, cancellationToken);
        await _context.SaveChangesAsync(cancellationToken);
        return game;
    }

    public async Task<ILookup<int, Trophy>> GetTrophiesByGroupIdsAsync(IReadOnlyList<int> groupIds, CancellationToken cancellationToken)
    {
        var trophies = await _context.Trophies
            .Include(trophy => trophy.Game)
            .Where(trophy => groupIds.Contains(trophy.Game.ParentGroupId))
            .ToListAsync(cancellationToken);
        return trophies.ToLookup(trophy => trophy.Game.ParentGroupId, trophy => trophy);
    }

    public async Task<IReadOnlyDictionary<int, Trophy>> GetTrophiesByIdsAsync(IReadOnlyList<int> ids, CancellationToken cancellationToken)
    {
        return await _context.Trophies
            .Where(trophy => ids.Contains(trophy.Id))
            .ToDictionaryAsync(trophy => trophy.Id, cancellationToken);
    }

    public async Task<IReadOnlyDictionary<int, Game>> GetGamesByIdsAsync(IReadOnlyList<int> ids, CancellationToken cancellationToken)
    {
        return await _context.Games
            .Where(game => ids.Contains(game.Id))
            .ToDictionaryAsync(game => game.Id, cancellationToken);
    }

    public async Task<Trophy> CreateTrophyAsync(Trophy trophy, TrophyRequest request, IReadOnlyList<TrophyRequestApproval> approvals,
        CancellationToken cancellationToken)
    {
        await _context.TrophyRequestApprovals.AddRangeAsync(approvals, cancellationToken);
        await _context.TrophyRequests.AddAsync(request, cancellationToken);
        await _context.Trophies.AddAsync(trophy, cancellationToken);
        await _context.SaveChangesAsync(cancellationToken);
        return trophy;
    }

    public async Task<IReadOnlyDictionary<int, TrophyRequest>> GetTrophyRequestsByTrophyIdsAsync(IReadOnlyList<int> trophyIds, CancellationToken cancellationToken)
    {
        return await _context.TrophyRequests
            .Where(request => trophyIds.Contains(request.TrophyId))
            .Include(request => request.Approvals)
            .ToDictionaryAsync(request => request.TrophyId, cancellationToken);
    }
}