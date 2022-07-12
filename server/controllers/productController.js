"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = __importDefault(require("../models/models"));
const uuid_1 = require("uuid");
const path_1 = __importDefault(require("path"));
const ApiError_1 = __importDefault(require("../error/ApiError"));
class ProductController {
    constructor() { }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, price, product_slug } = req.body;
            const category = yield models_1.default.Product.create({ name, price, product_slug });
            return res.json(category);
        });
    }
    ;
    createOptions(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { product_color, options_slug, productId } = req.body;
                const { img } = req.files;
                var optionImages = {};
                const options = yield models_1.default.ProductOptions.create({
                    product_color,
                    options_slug,
                    productId
                });
                for (let item of img) {
                    const img_path = (0, uuid_1.v4)() + ".jpg";
                    item.mv(path_1.default.resolve(__dirname, '..', 'static', img_path));
                    const image = yield models_1.default.ProductOptionsImage.create({
                        img_path: img_path,
                        productOptionId: options.get('id'),
                    });
                    optionImages[img_path] = image;
                }
                return res.json({ optionImages, options });
            }
            catch (error) {
                console.log("Ошибка при создании ProductOptions/ProductOptionImages");
                next(ApiError_1.default.badRequest(error));
            }
        });
    }
    getAllProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield models_1.default.Product.findAll();
            return res.json(product);
        });
    }
    getAllOptionsByProductName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { product_slug } = req.params;
            const product = yield models_1.default.Product.findOne({ where: { product_slug } });
            const productId = product === null || product === void 0 ? void 0 : product.get('id');
            const ProductOptions = yield models_1.default.ProductOptions.findAll({ where: { productId } });
            let result = {};
            let currentItem = {};
            const ProductOptionsIds = new Array(ProductOptions.length);
            for (let item of ProductOptions) {
                ProductOptionsIds[item.get("id")] = item.get("id");
                const images = yield models_1.default.ProductOptionsImage.findAll({
                    where: {
                        productOptionId: item.get("id")
                    }
                });
                result[item.get("id")] = JSON.parse(JSON.stringify(item));
                currentItem = result[item.get("id")];
                currentItem["img"] = JSON.parse(JSON.stringify(images));
            }
            return res.json(result);
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.default = new ProductController();
