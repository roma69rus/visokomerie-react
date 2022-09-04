import { Router } from "express";
import orderController from "../controllers/orderController";
import checkRole from "../middleware/checkRoleMiddleware"

const router = Router(); 

router.post('/', orderController.create)
router.delete('/', checkRole('ADMIN'), orderController.delete)
router.get('/', checkRole('ADMIN'), orderController.getAll)



export default router;