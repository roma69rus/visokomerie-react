import { IProductOptions } from "./productOptionsTypes";
import { IProduct, IProductToCategory } from "./productTypes";


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