/**
 * @generated SignedSource<<25518fd4d87637d788cdeb7cde5073ca>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GroupSectionFragment$data = {
  readonly groups: ReadonlyArray<{
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"DashboardGroupFragment">;
  }>;
  readonly " $fragmentType": "GroupSectionFragment";
};
export type GroupSectionFragment$key = {
  readonly " $data"?: GroupSectionFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"GroupSectionFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "GroupSectionFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Group",
      "kind": "LinkedField",
      "name": "groups",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "DashboardGroupFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "e5e78559328f0777f061577cd3f30a6e";

export default node;
