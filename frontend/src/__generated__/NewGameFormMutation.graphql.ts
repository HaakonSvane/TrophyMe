/**
 * @generated SignedSource<<45716dabcf81b3e76301cd476efb3747>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateGameInput = {
  description?: string | null | undefined;
  groupId: string;
  name: string;
  symbol: string;
};
export type NewGameFormMutation$variables = {
  connections: ReadonlyArray<string>;
  input: CreateGameInput;
};
export type NewGameFormMutation$data = {
  readonly createGame: {
    readonly game: {
      readonly description: string | null | undefined;
      readonly id: string;
      readonly name: string;
      readonly symbol: string;
      readonly topPlayers: {
        readonly edges: ReadonlyArray<{
          readonly node: {
            readonly username: string;
          };
        }> | null | undefined;
      } | null | undefined;
      readonly trophies: ReadonlyArray<{
        readonly id: string;
      }>;
    } | null | undefined;
  };
};
export type NewGameFormMutation = {
  response: NewGameFormMutation$data;
  variables: NewGameFormMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connections"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "input"
},
v2 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "symbol",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "username",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "concreteType": "Trophy",
  "kind": "LinkedField",
  "name": "trophies",
  "plural": true,
  "selections": [
    (v3/*: any*/)
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "NewGameFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateGamePayload",
        "kind": "LinkedField",
        "name": "createGame",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Game",
            "kind": "LinkedField",
            "name": "game",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "TopPlayersConnection",
                "kind": "LinkedField",
                "name": "topPlayers",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "TopPlayersEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "User",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v7/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v8/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "NewGameFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateGamePayload",
        "kind": "LinkedField",
        "name": "createGame",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Game",
            "kind": "LinkedField",
            "name": "game",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "TopPlayersConnection",
                "kind": "LinkedField",
                "name": "topPlayers",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "TopPlayersEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "User",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v7/*: any*/),
                          (v3/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v8/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
        "filters": null,
        "handle": "prependNode",
        "key": "",
        "kind": "LinkedHandle",
        "name": "createGame",
        "handleArgs": [
          {
            "kind": "Variable",
            "name": "connections",
            "variableName": "connections"
          },
          {
            "kind": "Literal",
            "name": "edgeTypeName",
            "value": "GamesEdge"
          }
        ]
      }
    ]
  },
  "params": {
    "cacheID": "ae043086167f978e8ade250cddefc9b3",
    "id": null,
    "metadata": {},
    "name": "NewGameFormMutation",
    "operationKind": "mutation",
    "text": "mutation NewGameFormMutation(\n  $input: CreateGameInput!\n) {\n  createGame(input: $input) {\n    game {\n      id\n      name\n      symbol\n      description\n      topPlayers {\n        edges {\n          node {\n            username\n            id\n          }\n        }\n      }\n      trophies {\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "e27f18d6c195b094ab28eebc10402a9c";

export default node;
