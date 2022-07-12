"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = __importDefault(require("../controllers/productController"));
const router = (0, express_1.Router)();
router.post('/', productController_1.default.create);
router.post('/options', productController_1.default.createOptions);
router.get('/', productController_1.default.getAllProduct);
router.get('/:product_slug', productController_1.default.getAllOptionsByProductName);
exports.default = router;
