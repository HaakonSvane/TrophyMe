using api.Database.Models;

namespace api.Services;

public interface IGroupService
{
    //public Task<Group> JoinGroupAsync(string inviteCode, CancellationToken cancellationToken);
    
    public Task<GroupInvite> ResetGroupInviteAsync(string userId, int groupId, CancellationToken cancellationToken);
}