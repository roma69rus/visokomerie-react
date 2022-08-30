import { Sequelize } from "sequelize-typescript";
import { Product }              from "./models/product";
import { ProductOptions }       from "./models/product_options";
import {User}                   from './models/user'
import {ProductsToCategories}   from "./models/products_to_categories";
import { ProductOptionsImages } from "./models/product_images";
import { Category }             from "./models/product_category";
import { Slider }               from "./models/slider";

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './vm.db',
  models: [Product, ProductOptions, User, ProductsToCategories, ProductOptionsImages, Category, Slider],
  logging: console.log,  
});

export default sequelize;