import { Router } from "express";
import productController from "../controllers/productController";
import checkRole from "../middleware/checkRoleMiddleware"

const router = Router(); 

router.post('/', checkRole('ADMIN'), productController.createProduct)
router.put('/', checkRole('ADMIN'), productController.updateProduct)
router.post('/options', checkRole('ADMIN'), productController.createOptions)
router.put('/options', checkRole('ADMIN'), productController.updateOptions)
router.get('/options/:ProductId', productController.getAllOptions)
router.get('/options', productController.getAllOptions)
router.get('/all', productController.getAllProductsWithOptions)
router.get('/', productController.getAllProducts)
router.get('/:product_slug', productController.getOptionsByProductName)


export default router;