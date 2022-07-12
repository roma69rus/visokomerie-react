"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoryController_1 = __importDefault(require("../controllers/categoryController"));
const router = (0, express_1.Router)();
router.post('/', categoryController_1.default.create);
router.get('/', categoryController_1.default.getAll);
exports.default = router;
