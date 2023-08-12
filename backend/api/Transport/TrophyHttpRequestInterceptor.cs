using System.Security.Claims;
using HotChocolate.AspNetCore;
using HotChocolate.Execution;

namespace api.Transport;

public class TrophyHttpRequestInterceptor : DefaultHttpRequestInterceptor
{
    public override ValueTask OnCreateAsync(HttpContext context, IRequestExecutor requestExecutor, IQueryRequestBuilder requestBuilder,
        CancellationToken cancellationToken)
    {
        string? userId = context.User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        string? userName = context.User.FindFirst(ClaimTypes.Name)?.Value;
        
        if (userId is not null && userName is not null){
            requestBuilder.SetProperty("User", new TokenUser(userName, userId));    
        }
        
        return base.OnCreateAsync(context, requestExecutor, requestBuilder, cancellationToken);
    }
}