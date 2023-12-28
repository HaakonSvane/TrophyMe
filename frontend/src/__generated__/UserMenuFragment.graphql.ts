/**
 * @generated SignedSource<<32791fbc6eede8cdb00a725e0c9bfa65>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserMenuFragment$data = {
  readonly userProfile: {
    readonly firstName: string;
    readonly lastName: string;
  } | null | undefined;
  readonly username: string;
  readonly " $fragmentType": "UserMenuFragment";
};
export type UserMenuFragment$key = {
  readonly " $data"?: UserMenuFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"UserMenuFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserMenuFragment",
  "selections": [
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
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "1bd4df1b54f74522b0dce30c382efe80";

export default node;
