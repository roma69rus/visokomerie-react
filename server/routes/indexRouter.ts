import { Router } from "express";
import userRouter from "./userRouter"
import sliderRouter from "./sliderRouter"
import orderRouter from "./orderRouter"
import productRouter from "./productRouter"
import categoryRouter from "./categoryRouter"

const router = Router(); 

router.use('/products', productRouter) 
router.use('/category', categoryRouter)
router.use('/user', userRouter)
router.use('/slider', sliderRouter)
router.use('/order', orderRouter)


export default router;