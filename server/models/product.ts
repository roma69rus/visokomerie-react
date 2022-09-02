import {Column, Model, Table, ForeignKey, DataType, CreatedAt, UpdatedAt, DeletedAt, HasMany, BelongsTo, BelongsToMany, BeforeDestroy} from 'sequelize-typescript'
import {Category} from './product_category'
import {ProductOptions} from './product_options'
import {ProductsToCategories} from './products_to_categories'


export interface IProductInput {
  id?: number;
  name: string;
  description?: string;
  price: number;
  product_slug: string;
  sizetable_path?: string;
}


@Table({tableName: 'product', timestamps:true, paranoid: true})
export class Product extends Model<Product, IProductInput> {
  
  @Column({type: DataType.INTEGER, autoIncrement: true, primaryKey: true, unique: true})
  public readonly id!: number;
  
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  public name!: string;

  @Column({type: DataType.TEXT, allowNull: true})
  public description!: string;

  @Column({type: DataType.INTEGER, allowNull: false})
  public price!: number;

  @Column({type: DataType.STRING(15), unique: true, allowNull: false})
  public product_slug!: string;

  @Column({type: DataType.STRING, allowNull: true})
  public sizetable_path!: string;
  
  @Column({type: DataType.STRING})
  public sku!: string;

  @BelongsToMany(() => Category, () => ProductsToCategories)
  public Categories!: Category[];

  @HasMany(() => ProductOptions, {
    onDelete: "CASCADE",
    hooks: true
  })
  public ProductOptions!: ProductOptions[];

  @BeforeDestroy
  static async removeOptions (instance: Product) {
    console.log('Instance %s.', instance)
    await ProductOptions.destroy({ where: { ProductId: instance.id } })    
  }
  
  @CreatedAt
  public readonly createdAt!: Date;
  @UpdatedAt
  public readonly updatedAt!: Date;
  @DeletedAt
  public readonly deletedAt!: Date;
}

// export default Product;

