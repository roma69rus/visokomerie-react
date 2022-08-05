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
}

export interface ICategory {
  id: number;
  name: string;
  description: string;
  category_slug: string;
  category_order: number;
  Products: Array<IProduct  | null>;
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
}

export interface IProductOptionsImages {
  id: number;
  img_path: string;
  main_image: boolean;
  ProductOptionId: number;
}


export interface IProductStore {
  category: Array<ICategory>
  product: Array<IProduct>
}

export default class ProductStore implements IProductStore {
  private _category: Array<ICategory>;
  private _product: Array<IProduct>;
  constructor() {
    this._category = [
      {
        "id": 1,
        "name": "Брюки",
        "description": "Брюки Брюки Брюки Брюки Брюки Брюки Брюки Брюки Брюки Брюки Брюки",
        "category_slug": "bruki",
        "category_order": 10,
        "Products": [],
      },
      {
        "id": 2,
        "name": "Костюмы",
        "description": "Брюки Брюки Брюки Брюки Брюки Брюки Брюки Брюки Брюки Брюки Брюки",
        "category_slug": "suits",
        "category_order": 20,
        "Products": []
      }
    ];
    

    this._product = [{
      "id": 2,
      "name": "palazo",
      "description": null,
      "price": 4444,
      "product_slug": "palazo",
      "sizetable_path": null,
      "ProductOptions": [
        {
          "id": 2,
          "description": null,
          "product_color": "blue",
          "price_increase": 0,
          "po_order": null,
          "options_slug": "blue",
          "ProductId": 2,
          "ProductOptionsImages": [
            {
              "id": 5,
              "img_path": "a96bbe7d-7da6-4bad-a5b7-8545b04339b2.jpg",
              "main_image": true,
              "ProductOptionId": 2,
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
          "ProductOptionsImages": [
            {
              "id": 13,
              "img_path": "1_black_palaco.jpg",
              "main_image": true,
              "ProductOptionId": 4,
            }
          ]
        }
      ]
    }]
    makeAutoObservable(this)
  }

  setCategory(category: any) {
    this._category = category;
  }

  setProduct(product: any) {
    this._product = product
  }

  get category() {
    return this._category
  }

  get product() {
    return this._product
  }




}
