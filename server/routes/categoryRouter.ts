import { Router } from "express";
import categoryController from "../controllers/categoryController";
import checkRole from "../middleware/checkRoleMiddleware"

const router = Router(); 

router.get('/all', categoryController.getAllCategoriesWithOptions)
router.post('/', checkRole('ADMIN'), categoryController.create)
router.put('/', checkRole('ADMIN'), categoryController.updateCategory)
router.delete('/', checkRole('ADMIN'), categoryController.deleteCategory)
router.get('/', categoryController.getAll)
router.get('/:category_slug', categoryController.getOneCategory)
router.get('/:category_slug/options', categoryController.getOneCategoryWithOptions)



export default router;