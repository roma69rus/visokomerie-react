"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../db"));
const sequelize_1 = require("sequelize");
const Product = db_1.default.define("product", {
    id: { type: sequelize_1.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: sequelize_1.DataTypes.STRING, unique: true, allowNull: false },
    description: { type: sequelize_1.DataTypes.TEXT },
    sku: { type: sequelize_1.DataTypes.STRING },
    price: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
    sizetable_path: { type: sequelize_1.DataTypes.STRING },
    product_slug: { type: sequelize_1.DataTypes.STRING(15), unique: true, allowNull: false },
});
const ProductOptions = db_1.default.define("product_options", {
    id: { type: sequelize_1.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    description: { type: sequelize_1.DataTypes.TEXT },
    product_color: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    price_increase: { type: sequelize_1.DataTypes.INTEGER, allowNull: false, defaultValue: "0" },
    po_order: { type: sequelize_1.DataTypes.INTEGER },
    options_slug: { type: sequelize_1.DataTypes.STRING(15), unique: true },
});
const ProductOptionsImage = db_1.default.define("product_options_image", {
    id: { type: sequelize_1.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    img_path: { type: sequelize_1.DataTypes.TEXT },
    main_image: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: "false" },
});
const ProductCategory = db_1.default.define("product_category", {
    id: { type: sequelize_1.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: sequelize_1.DataTypes.STRING, unique: true, allowNull: false },
    description: { type: sequelize_1.DataTypes.TEXT },
    category_slug: { type: sequelize_1.DataTypes.STRING(15), unique: true },
    category_order: { type: sequelize_1.DataTypes.INTEGER }
});
const ProductsToCategories = db_1.default.define("products_to_categories", {
    id: { type: sequelize_1.DataTypes.INTEGER, autoIncrement: true, primaryKey: true }
});
const Slider = db_1.default.define("slider", {
    id: { type: sequelize_1.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    img_path: { type: sequelize_1.DataTypes.TEXT, allowNull: false },
    url: { type: sequelize_1.DataTypes.TEXT },
    btn_txt: { type: sequelize_1.DataTypes.TEXT },
    isVideo: { type: sequelize_1.DataTypes.BOOLEAN },
    slide_order: { type: sequelize_1.DataTypes.INTEGER }
});
Product.hasMany(ProductOptions);
ProductOptions.belongsTo(Product);
ProductOptions.hasMany(ProductOptionsImage);
ProductOptionsImage.belongsTo(ProductOptions);
Product.belongsToMany(ProductCategory, { through: ProductsToCategories });
ProductCategory.belongsToMany(Product, { through: ProductsToCategories });
exports.default = {
    Product,
    ProductOptions,
    ProductOptionsImage,
    ProductCategory,
    ProductsToCategories,
    Slider
};
