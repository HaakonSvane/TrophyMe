/**
 * @generated SignedSource<<c34282bb8dd0b878220e6fc34952ea7f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GroupGamesPanelFragment$data = {
  readonly games: {
    readonly __id: string;
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly description: string | null | undefined;
        readonly id: string;
        readonly name: string;
        readonly symbol: string;
        readonly topPlayers: {
          readonly edges: ReadonlyArray<{
            readonly node: {
              readonly username: string;
            };
          }> | null | undefined;
        } | null | undefined;
        readonly trophies: ReadonlyArray<{
          readonly id: string;
        }>;
      };
    }> | null | undefined;
  } | null | undefined;
  readonly id: string;
  readonly " $fragmentType": "GroupGamesPanelFragment";
};
export type GroupGamesPanelFragment$key = {
  readonly " $data"?: GroupGamesPanelFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"GroupGamesPanelFragment">;
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
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "forward",
        "path": [
          "games"
        ]
      }
    ]
  },
  "name": "GroupGamesPanelFragment",
  "selections": [
    (v0/*: any*/),
    {
      "alias": "games",
      "args": [
        {
          "kind": "Literal",
          "name": "order",
          "value": [
            {
              "createdDate": "DESC"
            }
          ]
        }
      ],
      "concreteType": "GamesConnection",
      "kind": "LinkedField",
      "name": "__GroupGamesPanel_games_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "GamesEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Game",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v0/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "symbol",
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
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "Trophy",
                  "kind": "LinkedField",
                  "name": "trophies",
                  "plural": true,
                  "selections": [
                    (v0/*: any*/)
                  ],
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": [
                    {
                      "kind": "Literal",
                      "name": "first",
                      "value": 1
                    }
                  ],
                  "concreteType": "TopPlayersConnection",
                  "kind": "LinkedField",
                  "name": "topPlayers",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "TopPlayersEdge",
                      "kind": "LinkedField",
                      "name": "edges",
                      "plural": true,
                      "selections": [
                        {
                          "alias": null,
                          "args": null,
                          "concreteType": "User",
                          "kind": "LinkedField",
                          "name": "node",
                          "plural": false,
                          "selections": [
                            {
                              "alias": null,
                              "args": null,
                              "kind": "ScalarField",
                              "name": "username",
                              "storageKey": null
                            }
                          ],
                          "storageKey": null
                        }
                      ],
                      "storageKey": null
                    }
                  ],
                  "storageKey": "topPlayers(first:1)"
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "kind": "ClientExtension",
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "__id",
              "storageKey": null
            }
          ]
        }
      ],
      "storageKey": "__GroupGamesPanel_games_connection(order:[{\"createdDate\":\"DESC\"}])"
    }
  ],
  "type": "Group",
  "abstractKey": null
};
})();

(node as any).hash = "f71ed6b8c7138480865f853d5f091937";

export default node;
