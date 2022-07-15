"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRouter_1 = __importDefault(require("./userRouter"));
const sliderRouter_1 = __importDefault(require("./sliderRouter"));
const productRouter_1 = __importDefault(require("./productRouter"));
const categoryRouter_1 = __importDefault(require("./categoryRouter"));
const router = (0, express_1.Router)();
router.use('/products', productRouter_1.default);
router.use('/category', categoryRouter_1.default);
router.use('/user', userRouter_1.default);
router.use('/slider', sliderRouter_1.default);
exports.default = router;
