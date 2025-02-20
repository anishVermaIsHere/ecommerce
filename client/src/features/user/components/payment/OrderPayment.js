import "../../../../assets/styles/user/Checkout.css";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import AppConfig from "../../../../config/app.config";
import { useEffect, useState } from "react";
import { createPaymentIntent } from "../../../../services/api/payment";
import { clearSummary } from "../../../../lib/reducer/order/order-slice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../../utils/widgets/Loader";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

const PaymentComponent = () => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        // return_url: `${AppConfig.publicUrl}/${ROUTES.PAYMENT_COMPLETE}`,
        return_url: `${window.location.origin}/payment-complete`,
      },
    });
    dispatch(clearSummary());
    console.log('result', result);


    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <section className="row">
    <div className="payment-section col-lg col-6-sm d-flex-jc-center-ai-center">
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <div className="payment-action-group">
        <button
          type="submit"
          className="btn btn-pay"
        >
          Pay order
        </button>
      </div>
    </form>
    </div>
    </section>
  );
};

function OrderPayment() {
  const [clientSecret, setClientSecret] = useState("");
  const [stripePromise, setStripePromise] = useState(null);
  const [loading, setLoading] = useState(false);
  const orderState = useSelector(state=>state.orderSlice);

  const options = {
    clientSecret, 
    appearance: { 
      theme: "stripe" 
    }
  }

  useEffect(() => {
    setLoading(true);
    setStripePromise(loadStripe(AppConfig.paymentGateway.stripe.apiKey));
    createPaymentIntent(orderState.summary)
      .then(async (res) => {
        setClientSecret(await res.data.clientSecret);
      })
      .catch((error) => {
        throw Error(error.message);
      });
      setLoading(false);
      return()=>{}
  }, []);

  if(loading){
    return <Loader />
  }

  return (
    <>
      {orderState.isCheckout && stripePromise && clientSecret && (
        <Elements stripe={stripePromise} options={options}>
          <PaymentComponent />
        </Elements>
      )}
    </>
  );
}

export default OrderPayment;
