import { Router } from "express";
import productController from "../controllers/productController";
import checkRole from "../middleware/checkRoleMiddleware"

const router = Router(); 

router.post('/', checkRole('ADMIN'), productController.createProduct)
router.put('/', checkRole('ADMIN'), productController.updateProduct)
router.delete('/', checkRole('ADMIN'), productController.deleteProduct)
router.get('/', productController.getAllProducts)

router.post('/options', checkRole('ADMIN'), productController.createOptions)
router.post('/options/cart', productController.getCartOptions)
router.put('/options', checkRole('ADMIN'), productController.updateOptions)
router.delete('/options', checkRole('ADMIN'), productController.deleteOptions)
router.get('/options/:ProductId', productController.getAllOptions)
router.get('/options', productController.getAllOptions)

router.put('/options/image', checkRole('ADMIN'), productController.updateImage)
router.delete('/options/image', checkRole('ADMIN'), productController.deleteImage)

router.get('/all', productController.getAllProductsWithOptions)
router.get('/:product_slug', productController.getOptionsByProductName)

router.post('/rel', checkRole('ADMIN'), productController.createCategoryRelationship)
router.delete('/rel', checkRole('ADMIN'), productController.deleteCategoryRelationship)


export default router;