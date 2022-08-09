import { Router } from "express";
import categoryController from "../controllers/categoryController";
import checkRole from "../middleware/checkRoleMiddleware"

const router = Router(); 

router.post('/', checkRole('ADMIN'), categoryController.create)
router.get('/', categoryController.getAll)
router.get('/:category_slug', categoryController.getOneCategory)



export default router;