import { timeStamp } from "console";
import { makeAutoObservable } from "mobx";
import { Product } from "../pages/Product";
import { ICategory, ICategoryOptions } from "../types/categoryTypes";
import { IProductOptions } from "../types/productOptionsTypes";
import { IProduct } from "../types/productTypes";


export interface IProductStore {
  categories: Array<ICategory>
  category: ICategory | null;
  allProducts: Array<IProduct>
  productWithOptions: IProduct | null;
  productWithOneOption: IProduct | null;
  allOptions: IProductOptions[];
  oneOption: IProductOptions | null;
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
  private _category: ICategory | null;
  private _allProducts: Array<IProduct>;
  private _productWithOptions: IProduct | null;
  private _productWithOneOption: IProduct | null;
  private _allOptions: IProductOptions[];
  private _oneOption: IProductOptions | null;
  private _catsOptions: ICategoryOptions[];
  constructor() {
    this._categories = []

    this._category = null;

    this._allProducts = [];

    this._productWithOptions = null

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

  setProductWithOneOption(product: IProduct) {
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

  get categories(): ICategory[] {
    return this._categories
  }

  get category(): ICategory {
    return this._category as ICategory;
  }

  get allProducts(): IProduct[] {
    return this._allProducts as IProduct[]
  }

  get productWithOptions(): IProduct {
    return this._productWithOptions as IProduct
  }

  get productWithOneOption(): IProduct | null {
    return this._productWithOneOption
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
