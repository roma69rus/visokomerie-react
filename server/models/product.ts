import { DataTypes, Model, Optional } from 'sequelize'


interface IProduct {
  readonly id: number;
  name: string;
  description?: string;
  price: number;
  product_slug: string;
  sizetable_path?: string;
  sku?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface IProductInput extends Optional<IProduct, 'id'> {}
export interface IProducttOuput extends Required<IProduct> {}

class Product extends Model<IProduct, IProductInput> implements IProduct {
  public readonly id!: number;
  
  public name!: string;
  public description!: string;
  public price!: number;
  public product_slug!: string;
  public sizetable_path!: string;
  public sku!: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

export default Product

