import { BelongsToMany, Column, CreatedAt, DataType, DeletedAt, ForeignKey, Model, Table, UpdatedAt } from "sequelize-typescript";
import { Order } from "./orders";
import { Product } from "./product";
import { Category } from "./product_category";
import { ProductOptions } from "./product_options";


@Table({ tableName: 'options_to_orders', createdAt: false, updatedAt: false })
export class ProductOptionsToOrders extends Model<ProductOptionsToOrders> {

    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    public id!: number;

    @ForeignKey(() => Order)
    @Column({ type: DataType.INTEGER })
    public orderId!: number;

    @ForeignKey(() => ProductOptions)
    @Column({ type: DataType.INTEGER })
    public productOptionId!: number;

}