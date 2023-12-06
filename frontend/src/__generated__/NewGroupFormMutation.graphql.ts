/**
 * @generated SignedSource<<acda1309f57ee1ccec63e004c4a7782f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type RuleType = "DEMOCRACY" | "DICTATORSHIP" | "%future added value";
export type NewGroupFormMutation$variables = {
  description?: string | null | undefined;
  desicionModel: RuleType;
  name: string;
};
export type NewGroupFormMutation$data = {
  readonly createGroup: {
    readonly group: {
      readonly description: string | null | undefined;
      readonly id: string;
      readonly name: string;
    } | null | undefined;
  };
};
export type NewGroupFormMutation = {
  response: NewGroupFormMutation$data;
  variables: NewGroupFormMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "description"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "desicionModel"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "decisionModel",
            "variableName": "desicionModel"
          },
          {
            "kind": "Variable",
            "name": "description",
            "variableName": "description"
          },
          {
            "kind": "Variable",
            "name": "name",
            "variableName": "name"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "CreateGroupPayload",
    "kind": "LinkedField",
    "name": "createGroup",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Group",
        "kind": "LinkedField",
        "name": "group",
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
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "NewGroupFormMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "NewGroupFormMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "2a71b5cb5cac5a8ffa074cae51ed4f39",
    "id": null,
    "metadata": {},
    "name": "NewGroupFormMutation",
    "operationKind": "mutation",
    "text": "mutation NewGroupFormMutation(\n  $name: String!\n  $description: String\n  $desicionModel: RuleType!\n) {\n  createGroup(input: {name: $name, description: $description, decisionModel: $desicionModel}) {\n    group {\n      id\n      name\n      description\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "12604351b5626758eb8cd0ee7cc54ded";

export default node;
