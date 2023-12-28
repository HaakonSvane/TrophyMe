/**
 * @generated SignedSource<<19a6cbd04299561ae8fa9598f84bf495>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type GroupPageQuery$variables = {
  groupId: string;
};
export type GroupPageQuery$data = {
  readonly groupById: {
    readonly id: string;
    readonly name: string;
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "groupId"
      }
    ],
    "concreteType": "Group",
    "kind": "LinkedField",
    "name": "groupById",
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
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "GroupPageQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "GroupPageQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "809c0eb8b68839acb751e59513c9d58b",
    "id": null,
    "metadata": {},
    "name": "GroupPageQuery",
    "operationKind": "query",
    "text": "query GroupPageQuery(\n  $groupId: ID!\n) {\n  groupById(id: $groupId) {\n    id\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "f6cec0a3094241ed67af217f33ff1679";

export default node;
