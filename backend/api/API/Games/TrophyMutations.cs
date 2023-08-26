using api.API.Account;
using api.API.Errors;
using api.API.Group;
using api.Database.Models;
using api.Repository;
using api.Transport;
using HotChocolate.Language;

namespace api.API.Games;

[MutationType]
public static class TrophyMutations
{
    [Error<NoUserException>]
    [Error<NoGameException>]
    [Error<GroupNotFoundException>]
    public static async Task<Trophy> CreateTrophyRequest(
        [TokenUser] TokenUser? tokenUser,
        string userId,
        int gameId,
        string? description,
        IGamesByIdsDataLoader gamesByIdsDataLoader,
        IUsersByGroupIdsDataLoader usersByGroupIdsDataLoader,
        IGroupsByIdsDataLoader groupsByIdsDataLoader,
        IGameRepository gameRepository,
        CancellationToken cancellationToken,
        [Service] IIdSerializer serializer)
    {
        if (tokenUser is null)
        {
            throw new NoUserException();
        }
        
        var game = await gamesByIdsDataLoader.LoadAsync(gameId, cancellationToken);

        if (game is null)
        {
            throw new NoGameException(gameId.ToString());
        }

        var members = await usersByGroupIdsDataLoader.LoadAsync(game.ParentGroupId, cancellationToken);
        if (members.All(member => member.Id != tokenUser.Id))
        {
            string serializedGroupId = serializer.Serialize(null, nameof(Group), game.ParentGroupId) ?? "[MISSING]";
            throw new NoMemberException(tokenUser.Id, serializedGroupId);
        }
        if (members.All(member => member.Id != userId))
        {
            string serializedGroupId = serializer.Serialize(null, nameof(Group), game.ParentGroupId) ?? "[MISSING]";
            throw new NoMemberException(tokenUser.Id, serializedGroupId);
        }

        var group = await groupsByIdsDataLoader.LoadAsync(game.ParentGroupId, cancellationToken);
        if (group is null)
        {
            string serializedGroupId = serializer.Serialize(null, nameof(Group), game.ParentGroupId) ?? "[MISSING]";
            throw new GroupNotFoundException(serializedGroupId);
        }

        var trophy = new Trophy()
        {
            GameId = game.Id,
            ReceiverId = userId,
            Description = description,
        };

        var request = new TrophyRequest()
        {
            Trophy = trophy,
        };

        List<TrophyRequestApproval> approvals = new List<TrophyRequestApproval>()
        {
            new()
            {
                UserId = tokenUser.Id,
                Request = request,
                IsApproved = true,
            }
        };
        if (group.DecisionModel == Database.Models.Group.RuleType.Democracy)
        {
            foreach (var member in members)
            {
                if (member.Id == tokenUser.Id)
                {
                    continue;
                }
                approvals.Push(new TrophyRequestApproval()
                {
                    UserId = member.Id,
                    Request = request,
                    IsApproved = false
                });
            }
        }

        if (approvals.All(approval => approval.IsApproved))
        {
            trophy.AwardedDate = DateTimeOffset.UtcNow;
        }
        return await gameRepository.CreateTrophyAsync(trophy, cancellationToken);

    }
}