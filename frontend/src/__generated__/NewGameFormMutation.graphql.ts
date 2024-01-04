/**
 * @generated SignedSource<<62d5044fece23ca8311b0fc15a08acb2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateGameInput = {
  additionalInfo?: string | null | undefined;
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
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "symbol",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "description",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
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
      (v3/*: any*/)
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
      (v3/*: any*/),
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
    "cacheID": "ed9be8e1c881eb9b6ef02099a3635f55",
    "id": null,
    "metadata": {},
    "name": "NewGameFormMutation",
    "operationKind": "mutation",
    "text": "mutation NewGameFormMutation(\n  $input: CreateGameInput!\n) {\n  createGame(input: $input) {\n    game {\n      id\n      symbol\n      name\n      description\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "b5c2029338e2e53120547d7126a1024c";

export default node;
