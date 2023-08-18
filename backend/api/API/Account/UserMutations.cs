using api.Database.Models;
using api.Repository;
using api.Transport;

namespace api.API.Account;

[MutationType]
public static class UserMutations
{
    public static async Task<UserProfile> CreateUserProfileAsync(
        [TokenUser] TokenUser? user,
        string firstName,
        string? middleName,
        string lastName,
        IUserRepository repository,
        CancellationToken cancellationToken)
    {
        if (user is null) return null;
        var userProfile = new UserProfile()
        {
            FirstName = firstName,
            MiddleName = middleName,
            LastName = lastName
        };
        return await repository.CreateUserProfileAsync(user.Id, userProfile, cancellationToken);
    }
}