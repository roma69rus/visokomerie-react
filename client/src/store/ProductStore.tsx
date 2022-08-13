import { timeStamp } from "console";
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
export interface ICategoryOptions extends ICategory {
  ProductOptions: IProductOptions[]
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
  Product?: IProduct;
  ProductOptionsImages: Array<IProductOptionsImages>;
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

export interface IProductsWithId {
  [key: string]: IProduct;
}

export interface IProductStore {
  categories: Array<ICategory>
  category: ICategory;
  allProducts: Array<IProduct>
  productWithOptions: IProduct;
  productWithOneOption: IProduct;
  allOptions: IProductOptions[];
  oneOption: IProductOptions;
  catsOptions: ICategoryOptions[];
  setCategories(categories: ICategory[]): void;
  setCategory(category: ICategory): void;
  setAllProducts(products: IProduct[]): void;
  setProductWithOptions(products: IProduct): void;
  setProductWithOneOption(product: IProduct | null): void;
  setAllOptions(productOptions: IProductOptions[]): void;
  setOneOption(option: IProductOptions): void;
  setCatsOptions(catsOptions: ICategoryOptions[]): void;
}

export default class ProductStore implements IProductStore {
  private _categories: Array<ICategory>;
  private _category: ICategory;
  private _allProducts: Array<IProduct>;
  private _productWithOptions: IProduct;
  private _productWithOneOption: IProduct | null;
  private _allOptions: IProductOptions[];
  private _oneOption: IProductOptions | null;
  private _catsOptions: ICategoryOptions[];
  constructor() {
    this._categories = []

    this._category = {
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
                  "img_path": "9989e7c0-cf9f-4b21-9ce0-83d9772b321e.jpg",
                  "main_image": false,
                  "ProductOptionId": 1,
                  "createdAt": "2022-07-19T09:32:14.169Z",
                  "updatedAt": "2022-07-19T09:32:14.169Z",
                  "deletedAt": null
                },
                {
                  "id": 3,
                  "img_path": "b2d5ef1c-d870-414a-9b91-5e7d392e0778.jpg",
                  "main_image": false,
                  "ProductOptionId": 1,
                  "createdAt": "2022-07-19T09:32:14.178Z",
                  "updatedAt": "2022-07-19T09:32:14.178Z",
                  "deletedAt": null
                },
                {
                  "id": 1,
                  "img_path": "cf3d6770-2bef-4dbd-868a-10606556de22.jpg",
                  "main_image": true,
                  "ProductOptionId": 1,
                  "createdAt": "2022-07-19T09:32:14.159Z",
                  "updatedAt": "2022-07-19T09:32:14.159Z",
                  "deletedAt": null
                },
                {
                  "id": 4,
                  "img_path": "f2895f63-062e-475a-aff8-2158c81e414e.jpg",
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
                  "img_path": "3d9b2ae0-a9c5-4126-96f0-e257323f211e.jpg",
                  "main_image": true,
                  "ProductOptionId": 4,
                  "createdAt": "2022-07-19T09:54:22.767Z",
                  "updatedAt": "2022-07-19T09:54:22.767Z",
                  "deletedAt": null
                },
                {
                  "id": 16,
                  "img_path": "3e2620e2-4413-4ce5-8beb-037de388c35e.jpg",
                  "main_image": false,
                  "ProductOptionId": 4,
                  "createdAt": "2022-07-19T09:54:22.794Z",
                  "updatedAt": "2022-07-19T09:54:22.794Z",
                  "deletedAt": null
                },
                {
                  "id": 14,
                  "img_path": "ced1c1e8-47e4-4e58-a308-6cf6fbf4264b.jpg",
                  "main_image": false,
                  "ProductOptionId": 4,
                  "createdAt": "2022-07-19T09:54:22.778Z",
                  "updatedAt": "2022-07-19T09:54:22.778Z",
                  "deletedAt": null
                },
                {
                  "id": 15,
                  "img_path": "fd76b6ac-7dfd-48ea-8b2a-18b88b116b45.jpg",
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
                  "img_path": "18d78693-b38f-4b75-a874-214c60fabcf0.jpg",
                  "main_image": false,
                  "ProductOptionId": 2,
                  "createdAt": "2022-07-19T09:32:45.489Z",
                  "updatedAt": "2022-07-19T09:32:45.489Z",
                  "deletedAt": null
                },
                {
                  "id": 5,
                  "img_path": "a96bbe7d-7da6-4bad-a5b7-8545b04339b2.jpg",
                  "main_image": true,
                  "ProductOptionId": 2,
                  "createdAt": "2022-07-19T09:32:45.481Z",
                  "updatedAt": "2022-07-19T09:32:45.481Z",
                  "deletedAt": null
                },
                {
                  "id": 8,
                  "img_path": "d144d0db-88fe-42c1-a155-548404bd0c89.jpg",
                  "main_image": false,
                  "ProductOptionId": 2,
                  "createdAt": "2022-07-19T09:32:45.507Z",
                  "updatedAt": "2022-07-19T09:32:45.507Z",
                  "deletedAt": null
                },
                {
                  "id": 7,
                  "img_path": "d933ffed-4c09-4826-b98a-bce2a784d37c.jpg",
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
                  "img_path": "4e5f99b1-ba94-40f6-b7d7-8c7811ab7f84.jpg",
                  "main_image": true,
                  "ProductOptionId": 3,
                  "createdAt": "2022-07-19T09:33:05.529Z",
                  "updatedAt": "2022-07-19T09:33:05.529Z",
                  "deletedAt": null
                },
                {
                  "id": 11,
                  "img_path": "5991a798-f71e-415d-86e1-809b8771a044.jpg",
                  "main_image": false,
                  "ProductOptionId": 3,
                  "createdAt": "2022-07-19T09:33:05.545Z",
                  "updatedAt": "2022-07-19T09:33:05.545Z",
                  "deletedAt": null
                },
                {
                  "id": 10,
                  "img_path": "7018fda4-d552-4528-8c59-b116224fc0b7.jpg",
                  "main_image": false,
                  "ProductOptionId": 3,
                  "createdAt": "2022-07-19T09:33:05.538Z",
                  "updatedAt": "2022-07-19T09:33:05.538Z",
                  "deletedAt": null
                },
                {
                  "id": 12,
                  "img_path": "b6a200ea-c20b-4214-9f5c-4fc4321cb40a.jpg",
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
    }

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

    this._productWithOneOption = null;

    this._allOptions = []

    this._oneOption = null


    this._catsOptions = []

    makeAutoObservable(this)
  }

  setCategories(categories: ICategory[]) {
    this._categories = categories;
  }
  setCategory(category: ICategory) {
    this._category = category;
  }
  setAllProducts(products: IProduct[]) {
    this._allProducts = products
  }
  setProductWithOptions(products: IProduct) {
    this._productWithOptions = products;
  }

  setProductWithOneOption(product: IProduct | null) {
    this._productWithOneOption = product;
  }

  setAllOptions(productOptions: IProductOptions[]) {
    this._allOptions = productOptions
  }

  setOneOption(option: IProductOptions) {
    this._oneOption = option;
  }


  setCatsOptions(catsOptions: ICategoryOptions[]) {
    this._catsOptions = catsOptions;
  }

  get categories() {
    return this._categories
  }

  get category() {
    return this._category;
  }

  get allProducts() {
    return this._allProducts
  }

  get productWithOptions() {
    return this._productWithOptions
  }

  get productWithOneOption(): IProduct {
    return this._productWithOneOption as IProduct
  }

  get allOptions() {
    return this._allOptions;
  }

  get oneOption(): IProductOptions{
    return this._oneOption as IProductOptions
  }


  get catsOptions() {
    return this._catsOptions
  }

}
