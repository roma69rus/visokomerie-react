"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sliderController_1 = __importDefault(require("../controllers/sliderController"));
const checkRoleMiddleware_1 = __importDefault(require("../middleware/checkRoleMiddleware"));
const router = (0, express_1.Router)();
router.post('/', (0, checkRoleMiddleware_1.default)('ADMIN'), sliderController_1.default.create);
router.get('/', sliderController_1.default.getAll);
exports.default = router;
