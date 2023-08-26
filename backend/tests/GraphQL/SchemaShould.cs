using HotChocolate.Execution;
using Microsoft.Extensions.DependencyInjection;
using Snapper;

namespace tests.GraphQL;

[TestFixture]
public class SchemaShould
{
    [Test]
    public async Task HaveNoUnconfirmedChanges()
    {
        var schema = await new ServiceCollection()
            .AddGraphQLServer()
            .AddTypes()
            .BuildSchemaAsync();
        schema.ToDocument().ShouldMatchSnapshot();
    }
}