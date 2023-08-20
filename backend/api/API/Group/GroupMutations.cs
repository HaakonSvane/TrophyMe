using api.API.Errors;
using api.Repository;
using api.Transport;

namespace api.API.Group;

[MutationType]
public static class GroupMutations
{
    [Error(typeof(NoUserException))]
    public static async Task<api.Database.Models.Group> CreateGroupAsync(
        [TokenUser] TokenUser? tokenUser,
        string name,
        string description,
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
            CreatedDate = DateTimeOffset.Now.ToUniversalTime()
        };
        return await groupRepository.CreateGroupAsync(tokenUser.Id, group, cancellationToken);
    }
}