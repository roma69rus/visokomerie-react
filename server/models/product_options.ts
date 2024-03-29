import {ProductOptionsImages} from './product_images'
import {Product} from './product'
import {Column, Model, Table, ForeignKey, DataType, CreatedAt, UpdatedAt, DeletedAt, HasMany, HasOne, BelongsTo, BelongsToMany} from 'sequelize-typescript'
import { Order } from './orders';
import { ProductOptionsToOrders } from './productOptions_to_orders';


export interface IOptionsInput {
  id?: number;
  description?: string;
  option_order?: number;
  product_color: string;
  price_increase: number;
  options_slug: string;
  ProductId: number;
  po_order?: number;
  main_page?: boolean
  
}

@Table({tableName:"product_options", timestamps:true, paranoid: true})
export class ProductOptions extends Model<ProductOptions, IOptionsInput> {
  
  @Column({type: DataType.INTEGER, autoIncrement: true, primaryKey: true})
  public id!: number;

  @Column({type: DataType.TEXT, allowNull: true})
  public description!: string;

  @Column({type: DataType.STRING, allowNull: false})
  public product_color!: string;

  @Column({type: DataType.INTEGER, allowNull: false, defaultValue: "0"})
  public price_increase!: number;

  @Column({type: DataType.BOOLEAN, allowNull: false, defaultValue: false})
  public main_page!: boolean;

  @Column({type: DataType.INTEGER})
  public po_order!: number;

  @Column({type: DataType.STRING(15), allowNull: false})
  public options_slug!: string;

  @HasMany(() => ProductOptionsImages)
  public ProductOptionsImages!: ProductOptionsImages[];

  @BelongsToMany(() => Order, () => ProductOptionsToOrders)
  public Orders!: Order[];

  @ForeignKey(() => Product)
  @Column({type: DataType.INTEGER})
  public ProductId!: number;

  @BelongsTo(() => Product)
  public Product!: Product

  @CreatedAt
  public readonly createdAt!: Date;
  @UpdatedAt
  public readonly updatedAt!: Date;
  @DeletedAt
  public readonly deletedAt!: Date;
}



