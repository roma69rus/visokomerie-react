import { Router } from "express";
import userController from "../controllers/userController";

const router = Router(); 


// router.post('/registration')

router.post('/login', userController.login)
router.get('/auth', userController.check)



export default router;