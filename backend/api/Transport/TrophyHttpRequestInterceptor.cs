using System.Security.Claims;
using api.Database.Models;
using api.Repository;
using HotChocolate.AspNetCore;
using HotChocolate.Execution;

namespace api.Transport;

public class TrophyHttpRequestInterceptor : DefaultHttpRequestInterceptor
{
    public override async ValueTask OnCreateAsync(HttpContext context, IRequestExecutor requestExecutor,
        IQueryRequestBuilder requestBuilder,
        CancellationToken cancellationToken)
    {
        
        var userId = context.User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        
        if (userId is not null)
        {
            requestBuilder.SetGlobalState("User", new TokenUser(userId));
        }
        await base.OnCreateAsync(context, requestExecutor, requestBuilder, cancellationToken);
    }
}