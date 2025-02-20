import { Router } from "express";
import orderController from "../../controllers/order/index.js";

const router = Router();

router.post("/checkout", orderController.checkout);

export default Router().use("/orders", router);