using api.API.Errors;
using api.Database.Models;
using api.Repository;
using api.Transport;
using IIdSerializer = HotChocolate.Types.Relay.IIdSerializer;

namespace api.API.Group;

[MutationType]
public static class GroupMutations
{
    [Error(typeof(InviteResetTooSoonException))]
    [Error(typeof(NoUserException))]
    [Error(typeof(GroupNotFoundException))]
    [Error(typeof(NoAdminException))]
    public static async Task<GroupInvite> CreateGroupInviteAsync(
        [TokenUser] TokenUser? tokenUser,
        [ID] int groupId,
        IGroupRepository groupRepository,
        IGroupsByIdsDataLoader dataLoader,
        CancellationToken cancellationToken,
        [Service] IIdSerializer serializer)
    {
        if (tokenUser is null)
        {
            throw new NoUserException();
        }

        var group = await dataLoader.LoadAsync(groupId, cancellationToken);
        if (group is null)
        {
            var serializedId = serializer.Serialize(null, "Group", groupId) ?? "[MISSING]";
            throw new GroupNotFoundException(serializedId);
        }
        if (group.AdminId != tokenUser.Id)
        {
            throw new NoAdminException();
        }
        
        return await groupRepository.UpsertGroupInviteAsync(group, cancellationToken);
    }
    
    [Error(typeof(NoInviteException))]
    [Error(typeof(NoUserException))]
    [Error(typeof(InviteExpiredException))]
    [Error(typeof(GroupNotFoundException))]
    [Error(typeof(AlreadyMemberException))]
    public static async Task<api.Database.Models.Group> JoinGroupAsync(
        [TokenUser] TokenUser? tokenUser,
        string inviteCode,
        IInvitesByInviteCodeDataLoader invitesDataLoader,
        IGroupRepository groupRepository,
        IGroupsByIdsDataLoader groupsByIdsDataLoader,
        IGroupsByUserIdsDataLoader groupsByUserIdsDataLoader,
        CancellationToken cancellationToken)
    {
        if (tokenUser is null)
        {
            throw new NoUserException();
        }

        var invite = await invitesDataLoader.LoadAsync(inviteCode, cancellationToken);
        if (invite is null)
        {
            throw new NoInviteException();
        }
        
        if (invite.ExpirationDate < DateTimeOffset.UtcNow)
        {
            throw new InviteExpiredException(invite.ExpirationDate);
        }

        var group = await groupsByIdsDataLoader.LoadAsync(invite.GroupId, cancellationToken);

        if (group is null)
        {
            throw new GroupNotFoundException(invite.GroupId.ToString());
        }

        var myGroups = await groupsByUserIdsDataLoader.LoadAsync(tokenUser.Id, cancellationToken);
        if (myGroups.Any(myGroup => myGroup.Id == group.Id))
        {
            throw new AlreadyMemberException();
        }
        groupsByUserIdsDataLoader.Clear();
        return await groupRepository.AddUserToGroup(tokenUser.Id, group, cancellationToken);
    }
        
    
    [Error<NoUserException>]
    public static async Task<api.Database.Models.Group> CreateGroupAsync(
        [TokenUser] TokenUser? tokenUser,
        string name,
        string description,
        api.Database.Models.Group.RuleType? decisionModel,
        IGroupRepository groupRepository,
        CancellationToken cancellationToken)
    {
        if (tokenUser is null)
        {
            throw new NoUserException();
        }

        var group = new api.Database.Models.Group()
        {
            Name = name,
            Description = description,
            CreatedDate = DateTimeOffset.Now.ToUniversalTime(),
            DecisionModel = decisionModel ?? api.Database.Models.Group.RuleType.Democracy,
        };
        return await groupRepository.CreateGroupAsync(tokenUser.Id, group, cancellationToken);
    }
}