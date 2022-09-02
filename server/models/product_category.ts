import {Column, Model, Table, ForeignKey, DataType, CreatedAt, UpdatedAt, DeletedAt, HasMany, BelongsTo, BelongsToMany} from 'sequelize-typescript'
import {Product} from './product'
import {ProductsToCategories} from './products_to_categories'


export interface ICategoryInput {
  id?: number;
  description?: string;
  name: string;
  category_slug: string;
  category_order?: number;
}

@Table({tableName:"product_category", timestamps:true, paranoid: true})
export class Category extends Model<Category, ICategoryInput> {
  @Column({type: DataType.INTEGER, autoIncrement: true, primaryKey: true, unique: true})
  public id!: number;

  @Column({type: DataType.STRING, unique: true, allowNull: false})
  public name!: string;

  @Column({type: DataType.TEXT})
  public description!: string;

  @Column({type: DataType.STRING(15), unique: true, allowNull: false})
  public category_slug!: string;

  @Column({type: DataType.INTEGER})
  public category_order!: number;

  @BelongsToMany(() => Product, () => ProductsToCategories)
  public Products!: Product[];


  @CreatedAt
  public readonly createdAt!: Date;
  @UpdatedAt
  public readonly updatedAt!: Date;
  @DeletedAt
  public readonly deletedAt!: Date;
}


