using api.Database.Models;
using api.Repository;

namespace api.API.Games;

[ExtendObjectType<Game>]
public static class GameNode
{
    [BindMember(nameof(Game.ParentGroupId))]
    public static string GetGroupId(
        [Parent] Game game,
        [Service] IIdSerializer idSerializer)
    {
        var serializedId = idSerializer.Serialize(null,nameof(Group), game.ParentGroupId);
        return serializedId ?? "";
    }

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
