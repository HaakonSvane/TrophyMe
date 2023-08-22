using api.Repository;
using api.Transport;
using HotChocolate.Execution;
using Microsoft.EntityFrameworkCore;

namespace api.API.Middleware;

internal sealed class UserMiddleware
{
    private readonly HotChocolate.Execution.RequestDelegate _next;

    public UserMiddleware(HotChocolate.Execution.RequestDelegate next)
    {
        _next = next;
    }

    public async ValueTask InvokeAsync(IRequestContext context)
    {
        if (context.ContextData.TryGetValue("User", out var tokenUserObject) && tokenUserObject is TokenUser tokenUser)
        {
            var repository = context.Services.GetService<IUserRepository>();
            if (repository is null)
            {
                await _next(context);
                return;
            }
            
            var cancellationToken = context.RequestAborted;
            try
            {
                await repository.CreateUserAsync(tokenUser.Id, cancellationToken);
            }
            catch (DbUpdateException ex){}
        }
        await _next(context);
    }
}