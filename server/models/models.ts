import sequilize from '../db'
import { DataTypes } from 'sequelize'

const Product = sequilize.define("product", {
  id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false},
  description: {type: DataTypes.TEXT},
  sku: {type: DataTypes.STRING},
  price: {type: DataTypes.INTEGER, allowNull: false},
  sizetable_path: {type: DataTypes.STRING},
  product_slug: {type: DataTypes.STRING(15), unique: true, allowNull: false},
})

const ProductOptions = sequilize.define("product_options", {
  id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
  description: {type: DataTypes.TEXT},
  product_color: {type: DataTypes.STRING, allowNull: false},
  price_increase: {type: DataTypes.INTEGER, allowNull: false, defaultValue: "0"},
  po_order: {type: DataTypes.INTEGER},
  options_slug: {type: DataTypes.STRING(15), unique: true, allowNull: false},
})

const ProductOptionsImage = sequilize.define("product_options_image", {
  id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
  img_path: {type: DataTypes.TEXT, allowNull: false},
  main_image: {type: DataTypes.BOOLEAN, defaultValue: "false"},
})

const ProductCategory = sequilize.define("product_category", {
  id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false},
  description: {type: DataTypes.TEXT},
  category_slug: {type: DataTypes.STRING(15), unique: true},
  category_order: {type: DataTypes.INTEGER}
})

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

Product.hasMany(ProductOptions)
ProductOptions.belongsTo(Product)

ProductOptions.hasMany(ProductOptionsImage)
ProductOptionsImage.belongsTo(ProductOptions)

Product.belongsToMany(ProductCategory, {through: ProductsToCategories})
ProductCategory.belongsToMany(Product, {through: ProductsToCategories})

export default {
  Product,
  ProductOptions,
  ProductOptionsImage,
  ProductCategory,
  ProductsToCategories,
  Slider
}

