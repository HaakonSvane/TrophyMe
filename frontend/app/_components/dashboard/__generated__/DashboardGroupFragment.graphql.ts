/**
 * @generated SignedSource<<c04f0824ec9bf8d9cbdf255bf4761f8d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DashboardGroupFragment$data = {
  readonly name: string;
  readonly " $fragmentType": "DashboardGroupFragment";
};
export type DashboardGroupFragment$key = {
  readonly " $data"?: DashboardGroupFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DashboardGroupFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DashboardGroupFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "Group",
  "abstractKey": null
};

(node as any).hash = "9792f76130bd6a0a93b29ebf1249d33e";

export default node;
