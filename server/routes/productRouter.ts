import { Router } from "express";
import productController from "../controllers/productController";
import checkRole from "../middleware/checkRoleMiddleware"

const router = Router(); 

router.post('/', checkRole('ADMIN'), productController.createProduct)
router.post('/options', checkRole('ADMIN'), productController.createOptions)
router.get('/', productController.getAllProduct)
router.get('/:product_slug', productController.getOptionsByProductName)



export default router;