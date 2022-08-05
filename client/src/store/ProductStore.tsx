import { makeAutoObservable } from "mobx";
import { Product } from "../pages/Product";


export interface IProduct {
  id: number,
  name: string,
  description: string | null,
  price: number,
  product_slug: string,
  sizetable_path: string | null,
  ProductOptions: Array<IProductOptions>
  Categories?: ICategory[];
  sku?: string | number | null;
  ProductsToCategories?: IProductToCategory;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string | null;
}

export interface ICategory {
  id: number;
  name: string;
  description: string | null;
  category_slug: string;
  category_order: number | null;
  Products?: IProduct[];
  ProductsToCategories?: IProductToCategory;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string | null;
}

export interface IProductToCategory {
  id: number,
  productId: number,
  categoryId: number,
}

export interface IProductOptions {
  id: number;
  description: string | null;
  product_color: string;
  price_increase: number;
  po_order: number | null;
  options_slug: string;
  ProductId: number;
  ProductOptionsImages: Array<IProductOptionsImages | null>
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string | null;
}

export interface IProductOptionsImages {
  id: number;
  img_path: string;
  main_image: boolean;
  ProductOptionId: number;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string | null;
}


export interface IProductStore {
  categories: Array<ICategory>
  allProducts: Array<IProduct>
  productWithOptions: IProduct;
  oneProductOption: IProduct;
}

export default class ProductStore implements IProductStore {
  private _categories: Array<ICategory>;
  private _allProducts: Array<IProduct>;
  private _productWithOptions: IProduct;
  private _oneProductOption: IProduct;
  constructor() {
    this._categories = [
      {
        "id": 1,
        "name": "Брюки",
        "description": null,
        "category_slug": "bruki",
        "category_order": null,
        "createdAt": "2022-07-19T09:28:55.622Z",
        "updatedAt": "2022-07-19T09:28:55.622Z",
        "deletedAt": null,
        "Products": [
          {
            "id": 1,
            "name": "leather",
            "description": null,
            "price": 4444,
            "product_slug": "leather",
            "sizetable_path": null,
            "sku": null,
            "createdAt": "2022-07-19T09:30:14.961Z",
            "updatedAt": "2022-07-19T09:30:14.961Z",
            "deletedAt": null,
            "ProductsToCategories": {
              "id": 1,
              "productId": 1,
              "categoryId": 1
            },
            "ProductOptions": [
              {
                "id": 1,
                "description": null,
                "product_color": "black",
                "price_increase": 0,
                "po_order": null,
                "options_slug": "black",
                "ProductId": 1,
                "createdAt": "2022-07-19T09:32:14.149Z",
                "updatedAt": "2022-07-19T09:32:14.149Z",
                "deletedAt": null,
                "ProductOptionsImages": [
                  {
                    "id": 2,
                    "img_path": "1_black_palaco.jpg",
                    "main_image": false,
                    "ProductOptionId": 1,
                    "createdAt": "2022-07-19T09:32:14.169Z",
                    "updatedAt": "2022-07-19T09:32:14.169Z",
                    "deletedAt": null
                  },
                  {
                    "id": 3,
                    "img_path": "1_black_palaco.jpg",
                    "main_image": false,
                    "ProductOptionId": 1,
                    "createdAt": "2022-07-19T09:32:14.178Z",
                    "updatedAt": "2022-07-19T09:32:14.178Z",
                    "deletedAt": null
                  },
                  {
                    "id": 1,
                    "img_path": "1_black_palaco.jpg",
                    "main_image": true,
                    "ProductOptionId": 1,
                    "createdAt": "2022-07-19T09:32:14.159Z",
                    "updatedAt": "2022-07-19T09:32:14.159Z",
                    "deletedAt": null
                  },
                  {
                    "id": 4,
                    "img_path": "1_black_palaco.jpg",
                    "main_image": false,
                    "ProductOptionId": 1,
                    "createdAt": "2022-07-19T09:32:14.186Z",
                    "updatedAt": "2022-07-19T09:32:14.186Z",
                    "deletedAt": null
                  }
                ]
              }
            ]
          },
          {
            "id": 2,
            "name": "palazo",
            "description": null,
            "price": 4444,
            "product_slug": "palazo",
            "sizetable_path": null,
            "sku": null,
            "createdAt": "2022-07-19T09:30:24.709Z",
            "updatedAt": "2022-07-19T09:30:24.709Z",
            "deletedAt": null,
            "ProductsToCategories": {
              "id": 2,
              "productId": 2,
              "categoryId": 1
            },
            "ProductOptions": [
              {
                "id": 4,
                "description": null,
                "product_color": "black",
                "price_increase": 0,
                "po_order": null,
                "options_slug": "black2",
                "ProductId": 2,
                "createdAt": "2022-07-19T09:54:22.756Z",
                "updatedAt": "2022-07-19T09:54:22.756Z",
                "deletedAt": null,
                "ProductOptionsImages": [
                  {
                    "id": 13,
                    "img_path": "1_black_palaco.jpg",
                    "main_image": true,
                    "ProductOptionId": 4,
                    "createdAt": "2022-07-19T09:54:22.767Z",
                    "updatedAt": "2022-07-19T09:54:22.767Z",
                    "deletedAt": null
                  },
                  {
                    "id": 16,
                    "img_path": "1_black_palaco.jpg",
                    "main_image": false,
                    "ProductOptionId": 4,
                    "createdAt": "2022-07-19T09:54:22.794Z",
                    "updatedAt": "2022-07-19T09:54:22.794Z",
                    "deletedAt": null
                  },
                  {
                    "id": 14,
                    "img_path": "1_black_palaco.jpg",
                    "main_image": false,
                    "ProductOptionId": 4,
                    "createdAt": "2022-07-19T09:54:22.778Z",
                    "updatedAt": "2022-07-19T09:54:22.778Z",
                    "deletedAt": null
                  },
                  {
                    "id": 15,
                    "img_path": "1_black_palaco.jpg",
                    "main_image": false,
                    "ProductOptionId": 4,
                    "createdAt": "2022-07-19T09:54:22.786Z",
                    "updatedAt": "2022-07-19T09:54:22.786Z",
                    "deletedAt": null
                  }
                ]
              },
              {
                "id": 2,
                "description": null,
                "product_color": "blue",
                "price_increase": 0,
                "po_order": null,
                "options_slug": "blue",
                "ProductId": 2,
                "createdAt": "2022-07-19T09:32:45.470Z",
                "updatedAt": "2022-07-19T09:32:45.470Z",
                "deletedAt": null,
                "ProductOptionsImages": [
                  {
                    "id": 6,
                    "img_path": "1_black_palaco.jpg",
                    "main_image": false,
                    "ProductOptionId": 2,
                    "createdAt": "2022-07-19T09:32:45.489Z",
                    "updatedAt": "2022-07-19T09:32:45.489Z",
                    "deletedAt": null
                  },
                  {
                    "id": 5,
                    "img_path": "1_black_palaco.jpg",
                    "main_image": true,
                    "ProductOptionId": 2,
                    "createdAt": "2022-07-19T09:32:45.481Z",
                    "updatedAt": "2022-07-19T09:32:45.481Z",
                    "deletedAt": null
                  },
                  {
                    "id": 8,
                    "img_path": "1_black_palaco.jpg",
                    "main_image": false,
                    "ProductOptionId": 2,
                    "createdAt": "2022-07-19T09:32:45.507Z",
                    "updatedAt": "2022-07-19T09:32:45.507Z",
                    "deletedAt": null
                  },
                  {
                    "id": 7,
                    "img_path": "1_black_palaco.jpg",
                    "main_image": false,
                    "ProductOptionId": 2,
                    "createdAt": "2022-07-19T09:32:45.499Z",
                    "updatedAt": "2022-07-19T09:32:45.499Z",
                    "deletedAt": null
                  }
                ]
              }
            ]
          },
          {
            "id": 3,
            "name": "banan",
            "description": null,
            "price": 4444,
            "product_slug": "banan",
            "sizetable_path": null,
            "sku": null,
            "createdAt": "2022-07-19T09:30:35.106Z",
            "updatedAt": "2022-07-19T09:30:35.106Z",
            "deletedAt": null,
            "ProductsToCategories": {
              "id": 3,
              "productId": 3,
              "categoryId": 1
            },
            "ProductOptions": [
              {
                "id": 3,
                "description": null,
                "product_color": "green",
                "price_increase": 0,
                "po_order": null,
                "options_slug": "green",
                "ProductId": 3,
                "createdAt": "2022-07-19T09:33:05.516Z",
                "updatedAt": "2022-07-19T09:33:05.516Z",
                "deletedAt": null,
                "ProductOptionsImages": [
                  {
                    "id": 9,
                    "img_path": "1_black_palaco.jpg",
                    "main_image": true,
                    "ProductOptionId": 3,
                    "createdAt": "2022-07-19T09:33:05.529Z",
                    "updatedAt": "2022-07-19T09:33:05.529Z",
                    "deletedAt": null
                  },
                  {
                    "id": 11,
                    "img_path": "1_black_palaco.jpg",
                    "main_image": false,
                    "ProductOptionId": 3,
                    "createdAt": "2022-07-19T09:33:05.545Z",
                    "updatedAt": "2022-07-19T09:33:05.545Z",
                    "deletedAt": null
                  },
                  {
                    "id": 10,
                    "img_path": "1_black_palaco.jpg",
                    "main_image": false,
                    "ProductOptionId": 3,
                    "createdAt": "2022-07-19T09:33:05.538Z",
                    "updatedAt": "2022-07-19T09:33:05.538Z",
                    "deletedAt": null
                  },
                  {
                    "id": 12,
                    "img_path": "1_black_palaco.jpg",
                    "main_image": false,
                    "ProductOptionId": 3,
                    "createdAt": "2022-07-19T09:33:05.553Z",
                    "updatedAt": "2022-07-19T09:33:05.553Z",
                    "deletedAt": null
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": 2,
        "name": "Костюмы",
        "description": null,
        "category_slug": "suits",
        "category_order": null,
        "createdAt": "2022-07-19T09:29:12.204Z",
        "updatedAt": "2022-07-19T09:29:12.204Z",
        "deletedAt": null,
        "Products": []
      }
    ]


    this._allProducts = [
      {
        "id": 1,
        "name": "leather",
        "description": null,
        "price": 4444,
        "product_slug": "leather",
        "sizetable_path": null,
        "sku": null,
        "createdAt": "2022-07-19T09:30:14.961Z",
        "updatedAt": "2022-07-19T09:30:14.961Z",
        "deletedAt": null,
        "Categories": [
          {
            "id": 1,
            "name": "Брюки",
            "description": null,
            "category_slug": "bruki",
            "category_order": null,
            "createdAt": "2022-07-19T09:28:55.622Z",
            "updatedAt": "2022-07-19T09:28:55.622Z",
            "deletedAt": null,
            "ProductsToCategories": {
              "id": 1,
              "productId": 1,
              "categoryId": 1
            }
          }
        ],
        "ProductOptions": [
          {
            "id": 1,
            "description": null,
            "product_color": "black",
            "price_increase": 0,
            "po_order": null,
            "options_slug": "black",
            "ProductId": 1,
            "createdAt": "2022-07-19T09:32:14.149Z",
            "updatedAt": "2022-07-19T09:32:14.149Z",
            "deletedAt": null,
            "ProductOptionsImages": [
              {
                "id": 2,
                "img_path": "1_black_palaco.jpg",
                "main_image": false,
                "ProductOptionId": 1,
                "createdAt": "2022-07-19T09:32:14.169Z",
                "updatedAt": "2022-07-19T09:32:14.169Z",
                "deletedAt": null
              },
              {
                "id": 3,
                "img_path": "1_black_palaco.jpg",
                "main_image": false,
                "ProductOptionId": 1,
                "createdAt": "2022-07-19T09:32:14.178Z",
                "updatedAt": "2022-07-19T09:32:14.178Z",
                "deletedAt": null
              },
              {
                "id": 1,
                "img_path": "1_black_palaco.jpg",
                "main_image": true,
                "ProductOptionId": 1,
                "createdAt": "2022-07-19T09:32:14.159Z",
                "updatedAt": "2022-07-19T09:32:14.159Z",
                "deletedAt": null
              },
              {
                "id": 4,
                "img_path": "1_black_palaco.jpg",
                "main_image": false,
                "ProductOptionId": 1,
                "createdAt": "2022-07-19T09:32:14.186Z",
                "updatedAt": "2022-07-19T09:32:14.186Z",
                "deletedAt": null
              }
            ]
          }
        ]
      },
      {
        "id": 2,
        "name": "palazo",
        "description": null,
        "price": 4444,
        "product_slug": "palazo",
        "sizetable_path": null,
        "sku": null,
        "createdAt": "2022-07-19T09:30:24.709Z",
        "updatedAt": "2022-07-19T09:30:24.709Z",
        "deletedAt": null,
        "Categories": [
          {
            "id": 1,
            "name": "Брюки",
            "description": null,
            "category_slug": "bruki",
            "category_order": null,
            "createdAt": "2022-07-19T09:28:55.622Z",
            "updatedAt": "2022-07-19T09:28:55.622Z",
            "deletedAt": null,
            "ProductsToCategories": {
              "id": 2,
              "productId": 2,
              "categoryId": 1
            }
          }
        ],
        "ProductOptions": [
          {
            "id": 4,
            "description": null,
            "product_color": "black",
            "price_increase": 0,
            "po_order": null,
            "options_slug": "black2",
            "ProductId": 2,
            "createdAt": "2022-07-19T09:54:22.756Z",
            "updatedAt": "2022-07-19T09:54:22.756Z",
            "deletedAt": null,
            "ProductOptionsImages": [
              {
                "id": 13,
                "img_path": "1_black_palaco.jpg",
                "main_image": true,
                "ProductOptionId": 4,
                "createdAt": "2022-07-19T09:54:22.767Z",
                "updatedAt": "2022-07-19T09:54:22.767Z",
                "deletedAt": null
              },
              {
                "id": 16,
                "img_path": "1_black_palaco.jpg",
                "main_image": false,
                "ProductOptionId": 4,
                "createdAt": "2022-07-19T09:54:22.794Z",
                "updatedAt": "2022-07-19T09:54:22.794Z",
                "deletedAt": null
              },
              {
                "id": 14,
                "img_path": "1_black_palaco.jpg",
                "main_image": false,
                "ProductOptionId": 4,
                "createdAt": "2022-07-19T09:54:22.778Z",
                "updatedAt": "2022-07-19T09:54:22.778Z",
                "deletedAt": null
              },
              {
                "id": 15,
                "img_path": "1_black_palaco.jpg",
                "main_image": false,
                "ProductOptionId": 4,
                "createdAt": "2022-07-19T09:54:22.786Z",
                "updatedAt": "2022-07-19T09:54:22.786Z",
                "deletedAt": null
              }
            ]
          },
          {
            "id": 2,
            "description": null,
            "product_color": "blue",
            "price_increase": 0,
            "po_order": null,
            "options_slug": "blue",
            "ProductId": 2,
            "createdAt": "2022-07-19T09:32:45.470Z",
            "updatedAt": "2022-07-19T09:32:45.470Z",
            "deletedAt": null,
            "ProductOptionsImages": [
              {
                "id": 6,
                "img_path": "1_black_palaco.jpg",
                "main_image": false,
                "ProductOptionId": 2,
                "createdAt": "2022-07-19T09:32:45.489Z",
                "updatedAt": "2022-07-19T09:32:45.489Z",
                "deletedAt": null
              },
              {
                "id": 5,
                "img_path": "1_black_palaco.jpg",
                "main_image": true,
                "ProductOptionId": 2,
                "createdAt": "2022-07-19T09:32:45.481Z",
                "updatedAt": "2022-07-19T09:32:45.481Z",
                "deletedAt": null
              },
              {
                "id": 8,
                "img_path": "1_black_palaco.jpg",
                "main_image": false,
                "ProductOptionId": 2,
                "createdAt": "2022-07-19T09:32:45.507Z",
                "updatedAt": "2022-07-19T09:32:45.507Z",
                "deletedAt": null
              },
              {
                "id": 7,
                "img_path": "1_black_palaco.jpg",
                "main_image": false,
                "ProductOptionId": 2,
                "createdAt": "2022-07-19T09:32:45.499Z",
                "updatedAt": "2022-07-19T09:32:45.499Z",
                "deletedAt": null
              }
            ]
          }
        ]
      },
      {
        "id": 3,
        "name": "banan",
        "description": null,
        "price": 4444,
        "product_slug": "banan",
        "sizetable_path": null,
        "sku": null,
        "createdAt": "2022-07-19T09:30:35.106Z",
        "updatedAt": "2022-07-19T09:30:35.106Z",
        "deletedAt": null,
        "Categories": [
          {
            "id": 1,
            "name": "Брюки",
            "description": null,
            "category_slug": "bruki",
            "category_order": null,
            "createdAt": "2022-07-19T09:28:55.622Z",
            "updatedAt": "2022-07-19T09:28:55.622Z",
            "deletedAt": null,
            "ProductsToCategories": {
              "id": 3,
              "productId": 3,
              "categoryId": 1
            }
          }
        ],
        "ProductOptions": [
          {
            "id": 3,
            "description": null,
            "product_color": "green",
            "price_increase": 0,
            "po_order": null,
            "options_slug": "green",
            "ProductId": 3,
            "createdAt": "2022-07-19T09:33:05.516Z",
            "updatedAt": "2022-07-19T09:33:05.516Z",
            "deletedAt": null,
            "ProductOptionsImages": [
              {
                "id": 9,
                "img_path": "1_black_palaco.jpg",
                "main_image": true,
                "ProductOptionId": 3,
                "createdAt": "2022-07-19T09:33:05.529Z",
                "updatedAt": "2022-07-19T09:33:05.529Z",
                "deletedAt": null
              },
              {
                "id": 11,
                "img_path": "1_black_palaco.jpg",
                "main_image": false,
                "ProductOptionId": 3,
                "createdAt": "2022-07-19T09:33:05.545Z",
                "updatedAt": "2022-07-19T09:33:05.545Z",
                "deletedAt": null
              },
              {
                "id": 10,
                "img_path": "1_black_palaco.jpg",
                "main_image": false,
                "ProductOptionId": 3,
                "createdAt": "2022-07-19T09:33:05.538Z",
                "updatedAt": "2022-07-19T09:33:05.538Z",
                "deletedAt": null
              },
              {
                "id": 12,
                "img_path": "1_black_palaco.jpg",
                "main_image": false,
                "ProductOptionId": 3,
                "createdAt": "2022-07-19T09:33:05.553Z",
                "updatedAt": "2022-07-19T09:33:05.553Z",
                "deletedAt": null
              }
            ]
          }
        ]
      }
    ]

    this._productWithOptions = {
      "id": 2,
      "name": "palazo",
      "description": null,
      "price": 4444,
      "product_slug": "palazo",
      "sizetable_path": null,
      "sku": null,
      "createdAt": "2022-07-19T09:30:24.709Z",
      "updatedAt": "2022-07-19T09:30:24.709Z",
      "deletedAt": null,
      "ProductOptions": [
        {
          "id": 2,
          "description": null,
          "product_color": "blue",
          "price_increase": 0,
          "po_order": null,
          "options_slug": "blue",
          "ProductId": 2,
          "createdAt": "2022-07-19T09:32:45.470Z",
          "updatedAt": "2022-07-19T09:32:45.470Z",
          "deletedAt": null,
          "ProductOptionsImages": [
            {
              "id": 5,
              "img_path": "1_black_palaco.jpg",
              "main_image": true,
              "ProductOptionId": 2,
              "createdAt": "2022-07-19T09:32:45.481Z",
              "updatedAt": "2022-07-19T09:32:45.481Z",
              "deletedAt": null
            }
          ]
        },
        {
          "id": 4,
          "description": null,
          "product_color": "black",
          "price_increase": 0,
          "po_order": null,
          "options_slug": "black2",
          "ProductId": 2,
          "createdAt": "2022-07-19T09:54:22.756Z",
          "updatedAt": "2022-07-19T09:54:22.756Z",
          "deletedAt": null,
          "ProductOptionsImages": [
            {
              "id": 13,
              "img_path": "1_black_palaco.jpg",
              "main_image": true,
              "ProductOptionId": 4,
              "createdAt": "2022-07-19T09:54:22.767Z",
              "updatedAt": "2022-07-19T09:54:22.767Z",
              "deletedAt": null
            }
          ]
        }
      ],
      "Categories": [
        {
          "id": 1,
          "name": "Брюки",
          "description": null,
          "category_slug": "bruki",
          "category_order": null,
          "createdAt": "2022-07-19T09:28:55.622Z",
          "updatedAt": "2022-07-19T09:28:55.622Z",
          "deletedAt": null,
          "ProductsToCategories": {
            "id": 2,
            "productId": 2,
            "categoryId": 1
          }
        }
      ]
    }

    this._oneProductOption = {
      "id": 2,
      "name": "palazo",
      "description": null,
      "price": 4444,
      "product_slug": "palazo",
      "sizetable_path": null,
      "sku": null,
      "createdAt": "2022-07-19T09:30:24.709Z",
      "updatedAt": "2022-07-19T09:30:24.709Z",
      "deletedAt": null,
      "ProductOptions": [
        {
          "id": 2,
          "description": null,
          "product_color": "blue",
          "price_increase": 0,
          "po_order": null,
          "options_slug": "blue",
          "ProductId": 2,
          "createdAt": "2022-07-19T09:32:45.470Z",
          "updatedAt": "2022-07-19T09:32:45.470Z",
          "deletedAt": null,
          "ProductOptionsImages": [
            {
              "id": 5,
              "img_path": "1_black_palaco.jpg",
              "main_image": true,
              "ProductOptionId": 2,
              "createdAt": "2022-07-19T09:32:45.481Z",
              "updatedAt": "2022-07-19T09:32:45.481Z",
              "deletedAt": null
            }
          ]
        }
      ],
      "Categories": [
        {
          "id": 1,
          "name": "Брюки",
          "description": null,
          "category_slug": "bruki",
          "category_order": null,
          "createdAt": "2022-07-19T09:28:55.622Z",
          "updatedAt": "2022-07-19T09:28:55.622Z",
          "deletedAt": null,
          "ProductsToCategories": {
            "id": 2,
            "productId": 2,
            "categoryId": 1
          }
        }
      ]
    }





    makeAutoObservable(this)
  }

  setCategory(category: any) {
    this._categories = category;
  }

  setProduct(product: any) {
    this._allProducts = product
  }

  get categories() {
    return this._categories
  }

  get allProducts() {
    return this._allProducts
  }

  get productWithOptions() {
    return this._productWithOptions
  }

  get oneProductOption() {
    return this._oneProductOption
  }


}
