/**
 * @generated SignedSource<<431dfc9a1a16112a2891b46feb0fd036>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RuleType = "DEMOCRACY" | "DICTATORSHIP" | "%future added value";
export type CreateGroupInput = {
  decisionModel?: RuleType | null | undefined;
  description?: string | null | undefined;
  name: string;
};
export type NewGroupFormMutation$variables = {
  connections: ReadonlyArray<string>;
  input: CreateGroupInput;
};
export type NewGroupFormMutation$data = {
  readonly createGroup: {
    readonly group: {
      readonly " $fragmentSpreads": FragmentRefs<"DashboardGroupFragment">;
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
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "NewGroupFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
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
                "args": null,
                "kind": "FragmentSpread",
                "name": "DashboardGroupFragment"
              }
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
    "name": "NewGroupFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
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
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "members",
                "plural": true,
                "selections": [
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "username",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "UserProfile",
                    "kind": "LinkedField",
                    "name": "userProfile",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "firstName",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "lastName",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Trophy",
                    "kind": "LinkedField",
                    "name": "trophies",
                    "plural": true,
                    "selections": [
                      (v3/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "awardedDate",
                        "storageKey": null
                      },
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
                            "name": "groupId",
                            "storageKey": null
                          },
                          (v3/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "symbol",
                            "storageKey": null
                          },
                          (v4/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "appendNode",
            "key": "",
            "kind": "LinkedHandle",
            "name": "group",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              },
              {
                "kind": "Literal",
                "name": "edgeTypeName",
                "value": "GroupsEdge"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d2d7cc5c18e7f342a4984e4410e04ea1",
    "id": null,
    "metadata": {},
    "name": "NewGroupFormMutation",
    "operationKind": "mutation",
    "text": "mutation NewGroupFormMutation(\n  $input: CreateGroupInput!\n) {\n  createGroup(input: $input) {\n    group {\n      ...DashboardGroupFragment\n      id\n    }\n  }\n}\n\nfragment DashboardGroupFragment on Group {\n  id\n  name\n  members {\n    id\n    ...MemberRowFragment\n  }\n}\n\nfragment MemberRowFragment on User {\n  username\n  userProfile {\n    firstName\n    lastName\n  }\n  ...TrophyStackFragment\n}\n\nfragment TrophyAvatarFragment on Trophy {\n  game {\n    symbol\n    name\n    id\n  }\n}\n\nfragment TrophyStackFragment on User {\n  trophies {\n    id\n    awardedDate\n    game {\n      groupId\n      id\n    }\n    ...TrophyAvatarFragment\n  }\n}\n"
  }
};
})();

(node as any).hash = "170afe900b27e3fc34b06d4b4ee7606e";

export default node;
