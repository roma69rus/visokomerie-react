"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = __importDefault(require("../controllers/productController"));
const checkRoleMiddleware_1 = __importDefault(require("../middleware/checkRoleMiddleware"));
const router = (0, express_1.Router)();
router.post('/', (0, checkRoleMiddleware_1.default)('ADMIN'), productController_1.default.createProduct);
router.post('/options', (0, checkRoleMiddleware_1.default)('ADMIN'), productController_1.default.createOptions);
router.get('/', productController_1.default.getAllProduct);
router.get('/:product_slug', productController_1.default.getOptionsByProductName);
exports.default = router;
