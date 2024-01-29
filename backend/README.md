# TROJI GraphQL api
This solution contains all code related to the GraphQL web api that the troji.me client app communicates to.
It is responsible for fetching data from a PostgreSQL database and blobs from a MinIO database.

## Common commands
__Generate migration:__
````shell
dotnet ef migrations add <MIGRATION_NAME>
```

__Apply migration(s):__
```shell
dotnet ef database update
```

__Generate GraphQL schema:__
````shell
dotnet run schema export --output schema.graphql
```
