import {
  Environment,
  Network,
  RequestParameters,
  Variables,
  GraphQLResponse,
  QueryResponseCache,
  CacheConfig,
  Store,
  RecordSource,
} from "relay-runtime";
import { graphQlQuery } from "src/app/api/graphql/query/graphQlQuery";

const IS_SERVER = typeof window === "undefined";
const CACHE_TTL = 5 * 1000;

export async function networkFetch(
  request: RequestParameters,
  variables: Variables
): Promise<GraphQLResponse> {
  const body = JSON.stringify({
    query: request.text,
    variables,
  });
  let response: Response;
  if (IS_SERVER) {
    response = await graphQlQuery(body);
  } else {
    response = await fetch(`/api/graphql/query`, { method: "POST", body });
  }
  if (!response.ok) {
    throw new Error(`Network fetch error: ${response.status}`);
  }
  const json = await response.json();
  if (Array.isArray(json.errors)) {
    console.error(json.errors);
    throw new Error(
      `Error fetching GraphQL query: '${
        request.name
      }' with variables '${JSON.stringify(variables)}':\n${JSON.stringify(
        json.errors
      )}`
    );
  }
  return json;
}

export const responseCache: QueryResponseCache | null = IS_SERVER
  ? null
  : new QueryResponseCache({
      size: 100,
      ttl: CACHE_TTL,
    });

function createNetwork() {
  async function fetchResponse(
    params: RequestParameters,
    variables: Variables,
    cacheConfig: CacheConfig
  ) {
    const isQuery = params.operationKind === "query";
    const cacheKey = params.id ?? params.cacheID;
    const forceFetch = cacheConfig && cacheConfig.force;
    if (responseCache != null && isQuery && !forceFetch) {
      const fromCache = responseCache.get(cacheKey, variables);
      if (fromCache != null) {
        return Promise.resolve(fromCache);
      }
    }
    return networkFetch(params, variables);
  }
  const network = Network.create(fetchResponse);
  return network;
}

function createEnvironment() {
  return new Environment({
    network: createNetwork(),
    store: new Store(RecordSource.create()),
    isServer: IS_SERVER,
  });
}

export const environment = createEnvironment();

export function getCurrentEnvironment() {
  if (IS_SERVER) {
    return createEnvironment();
  }
  return environment;
}
