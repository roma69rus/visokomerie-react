import { Router } from "express";
import sliderController from "../controllers/sliderController";
import checkRole from "../middleware/checkRoleMiddleware"

const router = Router(); 

router.post('/', checkRole('ADMIN'), sliderController.create)
router.get('/', sliderController.getAll)



export default router;