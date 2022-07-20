import {Column, Model, Table, ForeignKey, DataType, CreatedAt, UpdatedAt, DeletedAt, HasMany, BelongsTo, BelongsToMany} from 'sequelize-typescript'
import {ProductOptions} from './product_options'


export interface IImagesInput {
  img_path: string;
  main_image: boolean;
  ProductOptionId: number;
}


@Table({tableName:"product_options_images", timestamps:true, paranoid: true})
export class ProductOptionsImages extends Model<ProductOptionsImages, IImagesInput> {
  
  @Column({type: DataType.INTEGER, autoIncrement: true, primaryKey: true})
  public readonly id!: number;
  
  @Column({type: DataType.TEXT, allowNull: false})
  public img_path!: string;
  
  @Column({type: DataType.BOOLEAN, defaultValue: false})
  public main_image!: boolean;
  
  @ForeignKey(() => ProductOptions)
  @Column({type: DataType.INTEGER})
  public ProductOptionId!: number;
  
  @CreatedAt
  public readonly createdAt!: Date;
  @UpdatedAt
  public readonly updatedAt!: Date;
  @DeletedAt
  public readonly deletedAt!: Date;
}


