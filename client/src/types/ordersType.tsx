import { IImage, IProductOptions } from "./productOptionsTypes";


export interface IOrder {
  id: number;
  name: string;
  phone: string;
  ProductOptions: IProductOptions[];
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null
}

export interface IOrderCreate {
  name: string;
  phone: string;
  ids: number[];
}