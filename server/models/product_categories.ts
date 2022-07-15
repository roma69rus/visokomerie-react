import { DataTypes, Model, Optional } from 'sequelize'

interface ICategories {
  id: number;
  name: string;
  description?: string;
  category_slug?: string;
  category_order?: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface ICategoriesInput extends Optional<ICategories, 'id'> {}
export interface ICategoriesOuput extends Required<ICategories> {}

class Categories extends Model<ICategories, ICategoriesInput> implements ICategories {
  public id!: number;
  public name!: string;
  public description!: string;
  public category_slug!: string;
  public category_order!: number;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

export default Categories

