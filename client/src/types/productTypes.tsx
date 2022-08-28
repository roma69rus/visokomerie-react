import { ICategory } from "./categoryTypes";
import { IProductOptions } from "./productOptionsTypes";



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

export interface IProductCreate {
  name: string,
  description?: string | null,
  price: number,
  product_slug: string,
  sizetable_path?: string | null,
  categoryId: number;
}


export interface IProductToCategory {
  id: number,
  productId: number,
  categoryId: number,
}
