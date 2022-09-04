import { IProduct } from "./productTypes";


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
  main_page: boolean;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string | null;
}

export interface IProductOptionCreate {
  description: string | null;
  product_color: string;
  price_increase: number;
  po_order?: number | null;
  options_slug: string;
  ProductId: number;
  images: File[];
}



export interface IImage {
  id: number;
  img_path: string;
}

export interface IProductOptionsImages extends IImage {
  // id: number;
  // img_path: string;
  main_image: boolean;
  ProductOptionId: number;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string | null;
}