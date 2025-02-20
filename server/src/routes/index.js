import { Router } from "express";
import productRouter  from "./products/index.js";
import paymentRouter from "./payment/index.js";
import orderRouter from "./order/index.js";

const router = Router();

router.use(productRouter);
router.use(paymentRouter);
router.use(orderRouter);

export default router;