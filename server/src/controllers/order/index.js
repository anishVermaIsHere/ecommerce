

const orderController = {
  /**
    * @route GET /orders/checkout
   * @desc Checkout
   * @access Private
   */
  async checkout(req, res) {
    try {
      const orderDetails = req.body;
      return res.json({ message: "Order received", success: true });
    } catch (error) {
      console.log("API: stripe intent creation error", error.message);
      throw new Error(error.message);
    }

  }
}


export default orderController