import {Column, Model, Table, ForeignKey, DataType, CreatedAt, UpdatedAt, DeletedAt, HasMany, BelongsTo, BelongsToMany} from 'sequelize-typescript'
import { ProductOptionsToOrders } from './productOptions_to_orders';
import { ProductOptions } from './product_options';


export interface IOrderInput {
  id?: number;
  name: string;
  phone: string;
}

@Table({tableName:"orders", timestamps:true, paranoid: true})
export class Order extends Model<Order, IOrderInput> {
  @Column({type: DataType.INTEGER, autoIncrement: true, primaryKey: true, unique: true})
  public id!: number;

  @Column({type: DataType.STRING, allowNull: false})
  public name!: string;

  @Column({type: DataType.STRING, allowNull: false})
  public phone!: string;

  @BelongsToMany(() => ProductOptions, () => ProductOptionsToOrders)
  public ProductOptions!: ProductOptions[];

  @CreatedAt
  public readonly createdAt!: Date;
  @UpdatedAt
  public readonly updatedAt!: Date;
  @DeletedAt
  public readonly deletedAt!: Date;
}


