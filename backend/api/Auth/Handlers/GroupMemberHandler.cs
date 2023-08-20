using System.Text.Json;
using api.API.Group;
using api.Auth.Requirements;
using api.Transport;
using HotChocolate.Resolvers;
using Microsoft.AspNetCore.Authorization;

namespace api.Auth.Handlers;

public class GroupMemberHandler : AuthorizationHandler<GroupMemberRequirement, IMiddlewareContext>
{
    
    protected override async Task HandleRequirementAsync(
        AuthorizationHandlerContext context,
        GroupMemberRequirement requirement,
        IMiddlewareContext middlewareContext)
    {
        if (
            middlewareContext.ContextData.TryGetValue("User", out var tokenUserObject) &&
            tokenUserObject is TokenUser tokenUser)
        {
            var dataLoader = middlewareContext.Services.GetService<IGroupsByUserIdsDataLoader>();
            if (dataLoader is null)
            { 
                context.Fail();
                return;
            }
            if (!(middlewareContext.Result is JsonElement middlewareContextResult))
            {
                context.Succeed(requirement);
                return;
            }
            var cancellationToken = middlewareContext.RequestAborted;
            var groups = await dataLoader.LoadAsync(tokenUser.Id, cancellationToken);
            
        }

        context.Fail();
    }
}