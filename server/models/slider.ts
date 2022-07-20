import {Column, Model, Table, ForeignKey, DataType, CreatedAt, UpdatedAt, DeletedAt, HasMany, BelongsTo, BelongsToMany} from 'sequelize-typescript'


export interface ISliderInput {
  img_path: string;
  url: string;
  btn_text: string;
  isVideo: boolean;
}

@Table({tableName:"slider", timestamps:true, paranoid: true})
export class Slider extends Model<Slider, ISliderInput> {
  @Column({type: DataType.INTEGER, autoIncrement: true, primaryKey: true, unique: true})
  public id!: number;

  @Column({type: DataType.STRING, allowNull: false})
  public img_path!: string;

  @Column({type: DataType.STRING})
  public url!: string;

  @Column({type: DataType.TEXT})
  public btn_text!: string;

  @Column({type: DataType.BOOLEAN})
  public isVideo!: boolean;

  @Column({type: DataType.INTEGER})
  public slide_order!: number;


  @CreatedAt
  public readonly createdAt!: Date;
  @UpdatedAt
  public readonly updatedAt!: Date;
  @DeletedAt
  public readonly deletedAt!: Date;
}


