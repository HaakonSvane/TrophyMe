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
        requestBuilder.SetProperty("UserId", userId);
        return base.OnCreateAsync(context, requestExecutor, requestBuilder, cancellationToken);
    }
}