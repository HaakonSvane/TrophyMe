/**
 * @generated SignedSource<<cec441e19414e547aa5702649e829322>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GroupPageQuery$variables = {
  groupId: string;
};
export type GroupPageQuery$data = {
  readonly groupById: {
    readonly id: string;
    readonly name: string;
    readonly " $fragmentSpreads": FragmentRefs<"GroupGamesPanelFragment" | "GroupSocialCardFragment">;
  } | null | undefined;
};
export type GroupPageQuery = {
  response: GroupPageQuery$data;
  variables: GroupPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "groupId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "groupId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "GroupPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Group",
        "kind": "LinkedField",
        "name": "groupById",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "GroupSocialCardFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "GroupGamesPanelFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "GroupPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Group",
        "kind": "LinkedField",
        "name": "groupById",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "description",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Invite",
            "kind": "LinkedField",
            "name": "invite",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "inviteCode",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "expirationDate",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Game",
            "kind": "LinkedField",
            "name": "games",
            "plural": true,
            "selections": [
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d48684965e312d7db81f5838c7a650a8",
    "id": null,
    "metadata": {},
    "name": "GroupPageQuery",
    "operationKind": "query",
    "text": "query GroupPageQuery(\n  $groupId: ID!\n) {\n  groupById(id: $groupId) {\n    id\n    name\n    ...GroupSocialCardFragment\n    ...GroupGamesPanelFragment\n  }\n}\n\nfragment GroupGamesPanelFragment on Group {\n  games {\n    id\n  }\n}\n\nfragment GroupInviteFragment on Group {\n  id\n  invite {\n    inviteCode\n    expirationDate\n  }\n}\n\nfragment GroupSocialCardFragment on Group {\n  name\n  description\n  ...GroupInviteFragment\n}\n"
  }
};
})();

(node as any).hash = "4e80bfa971cde1806e1c1b015e528478";

export default node;
