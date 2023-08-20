using System.Text.Json;
using api.API.Group;
using api.Auth.Requirements;
using api.Database.Models;
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
            if (!(middlewareContext.Result is Group requestGroup))
            {
                context.Succeed(requirement);
                return;
            }
            
            var cancellationToken = middlewareContext.RequestAborted;
            var myGroups = await dataLoader.LoadAsync(tokenUser.Id, cancellationToken);
            if (myGroups.Any(group => group.Id == requestGroup.Id))
            {
                context.Succeed(requirement);
                return;
            }
            
        }

        context.Fail();
    }
}