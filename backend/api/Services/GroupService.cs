using api.API.Errors;
using api.API.Group;
using api.Database.Models;
using api.Repository;

namespace api.Services;

public class GroupService : IGroupService
{
    private readonly IGroupRepository _groupRepository;
    private readonly IGroupsByIdsDataLoader _groupsByIdsDataLoader;
    private readonly IIdSerializer _idSerializer;
    
    public GroupService(IGroupRepository groupRepository)
    {
        _groupRepository = groupRepository;
    }

    public async Task<GroupInvite> ResetGroupInviteAsync(string userId, int groupId, CancellationToken cancellationToken)
    {
        var group = await _groupsByIdsDataLoader.LoadAsync(groupId, cancellationToken);
        if (group is null)
        {
            var serializedId = _idSerializer.Serialize(null, "Group", groupId) ?? "[MISSING]";
            throw new GroupNotFoundException(serializedId);
        }
        if (group.AdminId != userId)
        {
            throw new NoAdminException();
        }
        
        return await _groupRepository.UpsertGroupInviteAsync(group, cancellationToken);
    }
}