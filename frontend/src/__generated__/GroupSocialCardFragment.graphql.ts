/**
 * @generated SignedSource<<81261c0a68ed9791425355751ac459d2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GroupSocialCardFragment$data = {
  readonly description: string | null | undefined;
  readonly name: string;
  readonly " $fragmentSpreads": FragmentRefs<"GroupInviteFragment">;
  readonly " $fragmentType": "GroupSocialCardFragment";
};
export type GroupSocialCardFragment$key = {
  readonly " $data"?: GroupSocialCardFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"GroupSocialCardFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "GroupSocialCardFragment",
  "selections": [
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "GroupInviteFragment"
    }
  ],
  "type": "Group",
  "abstractKey": null
};

(node as any).hash = "18796782a813d73916434501ea021f44";

export default node;
