import sequilize from '../db'
import { DataTypes } from 'sequelize'
import { Model } from 'sequelize/types';
import Product from './product';
import ProductOptions from './product_options'
import Categories from './product_categories'

// const Product = sequilize.define("product", {
//   id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
//   name: {type: DataTypes.STRING, unique: true, allowNull: false},
//   description: {type: DataTypes.TEXT},
//   sku: {type: DataTypes.STRING},
//   price: {type: DataTypes.INTEGER, allowNull: false},
//   sizetable_path: {type: DataTypes.STRING},
//   product_slug: {type: DataTypes.STRING(15), unique: true, allowNull: false},
// })

Product.init({
  id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false},
  description: {type: DataTypes.TEXT},
  sku: {type: DataTypes.STRING},
  price: {type: DataTypes.INTEGER, allowNull: false},
  sizetable_path: {type: DataTypes.STRING},
  product_slug: {type: DataTypes.STRING(15), unique: true, allowNull: false}
}, {
  sequelize: sequilize,
  paranoid: true,
  timestamps: true,
  tableName: 'product'
})

// const ProductOptions = sequilize.define("product_options", {
//   id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
//   description: {type: DataTypes.TEXT},
//   product_color: {type: DataTypes.STRING, allowNull: false},
//   price_increase: {type: DataTypes.INTEGER, allowNull: false, defaultValue: "0"},
//   po_order: {type: DataTypes.INTEGER},
//   options_slug: {type: DataTypes.STRING(15), unique: true, allowNull: false},
// })

ProductOptions.init({
  id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
  description: {type: DataTypes.TEXT},
  product_color: {type: DataTypes.STRING, allowNull: false},
  price_increase: {type: DataTypes.INTEGER, allowNull: false, defaultValue: "0"},
  po_order: {type: DataTypes.INTEGER},
  options_slug: {type: DataTypes.STRING(15), unique: true, allowNull: false}
},{
  sequelize: sequilize,
  paranoid: true,
  timestamps: true,
  tableName: 'product_options',
})

const ProductOptionsImage = sequilize.define("product_options_image", {
  id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
  img_path: {type: DataTypes.TEXT, allowNull: false},
  main_image: {type: DataTypes.BOOLEAN, defaultValue: false},
})

Categories.init({
  id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false},
  description: {type: DataTypes.TEXT},
  category_slug: {type: DataTypes.STRING(15), unique: true},
  category_order: {type: DataTypes.INTEGER}
},{
  sequelize: sequilize,
  paranoid: true,
  timestamps: true,
  tableName: 'product_categories',
})


// const ProductCategory = sequilize.define("product_category", {
//   id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
//   name: {type: DataTypes.STRING, unique: true, allowNull: false},
//   description: {type: DataTypes.TEXT},
//   category_slug: {type: DataTypes.STRING(15), unique: true},
//   category_order: {type: DataTypes.INTEGER}
// })

const ProductsToCategories = sequilize.define("products_to_categories", {
  id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true}
})

const Slider = sequilize.define("slider", {
  id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
  img_path: {type: DataTypes.TEXT, allowNull: false},
  url: {type: DataTypes.TEXT},
  btn_txt: {type: DataTypes.TEXT},
  isVideo: {type: DataTypes.BOOLEAN},
  slide_order: {type: DataTypes.INTEGER}
})

const User = sequilize.define('user', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  email: {type: DataTypes.STRING, unique: true,},
  password: {type: DataTypes.STRING},
  role: {type: DataTypes.STRING, defaultValue: "USER"},
})

Product.hasMany(ProductOptions)
ProductOptions.belongsTo(Product)

ProductOptions.hasMany(ProductOptionsImage)
ProductOptionsImage.belongsTo(ProductOptions)

Product.belongsToMany(Categories, {through: ProductsToCategories})
Categories.belongsToMany(Product, {through: ProductsToCategories})

export default {
  Product,
  ProductOptions,
  ProductOptionsImage,
  Categories,
  ProductsToCategories,
  Slider,
  User
}

