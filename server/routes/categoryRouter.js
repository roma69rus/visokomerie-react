"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoryController_1 = __importDefault(require("../controllers/categoryController"));
const checkRoleMiddleware_1 = __importDefault(require("../middleware/checkRoleMiddleware"));
const router = (0, express_1.Router)();
router.post('/', (0, checkRoleMiddleware_1.default)('ADMIN'), categoryController_1.default.create);
router.get('/', categoryController_1.default.getAll);
exports.default = router;
