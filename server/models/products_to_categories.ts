import {BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Product} from "./product";
import {Category} from "./product_category";


@Table({tableName: 'products_to_categories', createdAt: false, updatedAt: false})
export class ProductsToCategories extends Model<ProductsToCategories> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    public id!: number;

    @ForeignKey(() => Product)
    @Column({type: DataType.INTEGER})
    public productId!: number;

    @ForeignKey(() => Category)
    @Column({type: DataType.INTEGER})
    public categoryId!: number;

}