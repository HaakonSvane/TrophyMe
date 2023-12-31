/**
 * @generated SignedSource<<1fab85a14a8acb45c040d328f692384f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GroupGamesPanelFragment$data = {
  readonly games: ReadonlyArray<{
    readonly id: string;
  }>;
  readonly " $fragmentType": "GroupGamesPanelFragment";
};
export type GroupGamesPanelFragment$key = {
  readonly " $data"?: GroupGamesPanelFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"GroupGamesPanelFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "GroupGamesPanelFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Game",
      "kind": "LinkedField",
      "name": "games",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Group",
  "abstractKey": null
};

(node as any).hash = "d87fa2ba187990acc004a7631477a010";

export default node;
