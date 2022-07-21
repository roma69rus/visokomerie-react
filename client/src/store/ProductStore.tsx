import { makeAutoObservable } from "mobx";
import { Product } from "../pages/Product";


interface IDeviceStore {
  _category: Array<any>
  _product: Array<any>
}

export default class DeviceStore implements IDeviceStore {
  _category: Array<any>;
  _product: Array<any>;
  constructor() {
    this._category = [
      {
        "id": 1,
        "name": "Брюки",
        "description": "Брюки Брюки Брюки Брюки Брюки Брюки Брюки Брюки Брюки Брюки Брюки",
        "category_slug": "bruki",
        "Products": [],
      },
      {
        "id": 2,
        "name": "Костюмы",
        "description": "Брюки Брюки Брюки Брюки Брюки Брюки Брюки Брюки Брюки Брюки Брюки",
        "category_slug": "suits",
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
              "img_path": "3d9b2ae0-a9c5-4126-96f0-e257323f211e.jpg",
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
