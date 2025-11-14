/**
 * @generated SignedSource<<6c48cc9bbb0f27df7b03c9f3213048a5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ProductCard_product$data = {
  readonly category: string;
  readonly description: string | null | undefined;
  readonly id: string;
  readonly imageUrl: string | null | undefined;
  readonly inStock: boolean;
  readonly name: string;
  readonly price: number;
  readonly rating: number | null | undefined;
  readonly " $fragmentType": "ProductCard_product";
};
export type ProductCard_product$key = {
  readonly " $data"?: ProductCard_product$data;
  readonly " $fragmentSpreads": FragmentRefs<"ProductCard_product">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ProductCard_product",
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
      "kind": "ScalarField",
      "name": "price",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "category",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "imageUrl",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "inStock",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "rating",
      "storageKey": null
    }
  ],
  "type": "Product",
  "abstractKey": null
};

(node as any).hash = "3940562b410ef36c768fb7985e38491f";

export default node;
