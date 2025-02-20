import { Router } from "express";
import paymentController from "../../controllers/payment/index.js";


const router = Router();

router.post("/create-intent", paymentController.createIntent);


export default Router().use("/payment", router);



