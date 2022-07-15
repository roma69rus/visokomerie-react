import { DataTypes, Model, Optional } from 'sequelize'


interface IOptions {
  id: number;
  description?: string;
  product_color: string;
  price_increase: number;
  po_order?: number;
  options_slug: string;
  // productId?: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface IOptionsInput extends Optional<IOptions, 'id'> {}
export interface IOptionsOuput extends Required<IOptions> {}

class ProductOptions extends Model<IOptions, IOptionsInput> implements IOptions {
  public id!: number;
  public description!: string;
  public product_color!: string;
  public price_increase!: number;
  public po_order!: number;
  public options_slug!: string;
  // public productId!:number;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

export default ProductOptions

