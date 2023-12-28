/**
 * @generated SignedSource<<2fc0a8981fe96ee7b72f535b566d08bd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GroupBoxFragment$data = {
  readonly description: string | null | undefined;
  readonly id: string;
  readonly members: ReadonlyArray<{
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"MemberRowFragment">;
  }>;
  readonly name: string;
  readonly " $fragmentType": "GroupBoxFragment";
};
export type GroupBoxFragment$key = {
  readonly " $data"?: GroupBoxFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"GroupBoxFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "GroupBoxFragment",
  "selections": [
    (v0/*: any*/),
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
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "members",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "MemberRowFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Group",
  "abstractKey": null
};
})();

(node as any).hash = "7d6abcf05b06641001dd5d24200f1137";

export default node;
