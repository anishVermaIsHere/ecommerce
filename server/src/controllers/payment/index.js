import stripeInstance from "../../config/stripe.js";


const paymentController = {
  /**
    * @route GET /payment/create-intent
   * @desc Payment intent
   * @access Private
   */
  async createIntent(req, res) {
    try {
      const grandTotal = req.body.grandTotal;
      const paymentIntent = await stripeInstance.paymentIntents.create({
        currency: "inr",
        amount: parseInt(grandTotal),
        automatic_payment_methods: {
          enabled: true,
        },
        metadata: {
          // products: ""
        }
      });
      res.send({ clientSecret:  paymentIntent.client_secret });
    } catch (error) {
      console.log("API: stripe intent creation error", error.message);
      throw new Error(error.message);
    }

  }
}


export default paymentController