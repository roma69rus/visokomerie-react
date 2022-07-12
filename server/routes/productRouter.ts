import { Router } from "express";
import productController from "../controllers/productController";

const router = Router(); 

router.post('/', productController.create)
router.post('/options', productController.createOptions)
router.get('/', productController.getAllProduct)
router.get('/:product_slug', productController.getAllOptionsByProductName)



export default router;