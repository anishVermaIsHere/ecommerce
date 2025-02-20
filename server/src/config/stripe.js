import Stripe from "stripe";
import appConfig from "./appconfig.js";

const { payment: { stripe } } = appConfig;

const stripeInstance = new Stripe(stripe.secretKey);

export default stripeInstance;
