import { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import "react-phone-number-input/style.css";
import "../../../../assets/styles/user/Checkout.css";
import { shopForm } from "../../../../utils/constants/constant-data";
import { Country, State, City } from "country-state-city";
import { checkoutSchema } from "../../../../utils/validation/schema";
import { useDispatch, useSelector } from "react-redux";
import { setCheckout } from "../../../../lib/reducer/order/order-slice";
import { Navigate, useNavigate } from "react-router-dom";
import ROUTES from "../../../../routes/route-links";
import { orderCheckout } from "../../../../services/api/order";




const WatchFormValues = () => {
  const { values: { shipping, sameBillingAddress }, setFieldValue } = useFormikContext();
  useEffect(() => {
    if (sameBillingAddress) {
      setFieldValue("billing.name", shipping.name);
      setFieldValue("billing.phone", shipping.phone);
      setFieldValue("billing.house", shipping.house);
      setFieldValue("billing.area", shipping.area);
      setFieldValue("billing.city", shipping.city);
      setFieldValue("billing.state", shipping.state);
      setFieldValue("billing.country", shipping.country);
      setFieldValue("billing.pin", shipping.pin);
    }
  }, [sameBillingAddress]);

  return null; // This component does not render anything
};

const UserCheckoutForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const orderState = useSelector(state=>state.orderSlice);
  const cartState = useSelector(state=>state.cartSlice);
  const { delivery, placeholder } = shopForm;
  const countries = Country?.getAllCountries();
  const formField = {
    shipping: {
      name: "",
      phone: "",
      house: "",
      area: "",
      city: "",
      state: "",
      country: "",
      pin: "",
    },
    billing: {
      name: "",
      phone: "",
      house: "",
      area: "",
      city: "",
      state: "",
      country: "",
      pin: "",
    },
    sameBillingAddress: false,
    acceptTerms: false,
  };


  if(cartState.carVal) {
    return <Navigate to="/"/>
  }

  return (
    <div className="col-lg-6 border-light customer-checkout-form">
      <Formik
        initialValues={formField}
        validationSchema={checkoutSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout( async () => {
            const orderData = {
              shippingAddress: values.shipping,
              billingAddress: values.billing,
              orderSummary: orderState.summary
            }
            const res = await orderCheckout(orderData);
            if(res.data.success){
              navigate(ROUTES.PAYMENT);
              dispatch(setCheckout(true));
            }
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting, values, setFieldValue }) => (
          <Form>
            <WatchFormValues />
            <div className="checkout-step-wrapper d-flex-ai-center">
              <div className="checkout-step">
                <h4 className="checkout-step-label">Shipping Address</h4>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputShippingName">{delivery.name}</label>
                    <Field
                      type="text"
                      name="shipping.name"
                      className="form-control"
                      id="inputShippingName"
                      placeholder={placeholder.name}
                    />
                    <ErrorMessage
                      name="shipping.name"
                      component="div"
                      className="errorMessage"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputShippingPhone">{delivery.phone}</label>
                    <Field
                      type="tel"
                      name="shipping.phone"
                      className="form-control"
                      id="inputShippingPhone"
                      placeholder={placeholder.phone}
                    />
                    <ErrorMessage
                      name="shipping.phone"
                      component="div"
                      className="errorMessage"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="inputShippingAddress">{delivery.house}</label>
                  <Field
                    type="text"
                    name="shipping.house"
                    className="form-control"
                    id="inputShippingAddress"
                    placeholder={placeholder.house}
                  />
                  <ErrorMessage
                    name="shipping.house"
                    component="div"
                    className="errorMessage"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputShippingArea">{delivery.area}</label>
                  <Field
                    type="text"
                    name="shipping.area"
                    className="form-control"
                    id="inputShippingArea"
                    placeholder={placeholder.area}
                  />
                  <ErrorMessage
                    name="shipping.area"
                    component="div"
                    className="errorMessage"
                  />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputShippingCountry">
                      {delivery.country}
                    </label>
                    <Field
                      as="select"
                      name="shipping.country"
                      id="inputShippingCountry"
                      className="form-control"
                    >
                      <option value="">Select...</option>
                      {countries.map((cnt) => (
                        <option key={cnt.isoCode} value={cnt.isoCode}>
                          {cnt.name} ({cnt.isoCode})
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="shipping.country"
                      component="div"
                      className="errorMessage"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputShippingState">{delivery.state}</label>
                    <Field
                      as="select"
                      name="shipping.state"
                      id="inputShippingState"
                      className="form-control"
                      disabled={!values.shipping.country}
                    >
                        <option value="">Select...</option>
                      {State.getStatesOfCountry(values.shipping.country).map((state) => (
                        <option key={state.isoCode} value={state.isoCode}>
                          {state.name} ({state.isoCode})
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="shipping.state"
                      component="div"
                      className="errorMessage"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputShippingCity">{delivery.city}</label>
                    <Field
                      as="select"
                      name="shipping.city"
                      className="form-control"
                      id="inputShippingCity"
                      disabled={!values.shipping.state}
                    >
                       <option value="">Select...</option>
                      {City.getCitiesOfState(values.shipping.country, values.shipping.state).map((city) => (
                        <option key={city.name} value={city.name}>
                          {city.name}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="shipping.city"
                      component="div"
                      className="errorMessage"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputShippingZip">{delivery.pin}</label>
                    <Field
                      type="number"
                      name="shipping.pin"
                      className="form-control"
                      id="inputShippingZip"
                      placeholder={placeholder.pin}
                    />
                    <ErrorMessage
                      name="shipping.pin"
                      component="div"
                      className="errorMessage"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-check">
                    <Field
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                      name="sameBillingAddress"
                      checked={values.sameBillingAddress}
                      onChange={() =>
                        setFieldValue(
                          "sameBillingAddress",
                          !values.sameBillingAddress
                        )
                      }
                    />
                    <label className="form-check-label" htmlFor="gridCheck">
                      Same for billing address
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="checkout-step-wrapper d-flex-ai-center">
              <div className="checkout-step">
                <h4 className="checkout-step-label">Billing Address</h4>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputBillingName">{delivery.name}</label>
                    <Field
                      type="text"
                      name="billing.name"
                      className="form-control"
                      id="inputBillingName"
                      placeholder={placeholder.name}
                      disabled={values.sameBillingAddress}
                    />
                    <ErrorMessage
                      name="billing.name"
                      component="div"
                      className="errorMessage"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputBillingPhone">{delivery.phone}</label>
                    <Field
                      type="tel"
                      name="billing.phone"
                      className="form-control"
                      id="inputBillingPhone"
                      placeholder={placeholder.phone}
                      disabled={values.sameBillingAddress}
                    />
                    <ErrorMessage
                      name="billing.phone"
                      component="div"
                      className="errorMessage"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="inputBillingAddress">{delivery.house}</label>
                  <Field
                    type="text"
                    name="billing.house"
                    className="form-control"
                    id="inputBillingAddress"
                    placeholder={placeholder.house}
                    disabled={values.sameBillingAddress}
                  />
                  <ErrorMessage
                    name="billing.house"
                    component="div"
                    className="errorMessage"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputBillingArea">{delivery.area}</label>
                  <Field
                    type="text"
                    name="billing.area"
                    className="form-control"
                    id="inputBillingArea"
                    placeholder={placeholder.area}
                    disabled={values.sameBillingAddress}
                  />
                  <ErrorMessage
                    name="billing.area"
                    component="div"
                    className="errorMessage"
                  />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputBillingCountry">
                      {delivery.country}
                    </label>
                    <Field
                      as="select"
                      name="billing.country"
                      id="inputBillingCountry"
                      className="form-control"
                      disabled={values.sameBillingAddress}
                    >
                      <option value="">Select...</option>
                      {countries.map((cnt) => (
                        <option key={cnt.isoCode} value={cnt.isoCode}>
                          {cnt.name} ({cnt.isoCode})
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="billing.country"
                      component="div"
                      className="errorMessage"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputBillingState">{delivery.state}</label>
                    <Field
                      as="select"
                      name="billing.state"
                      id="inputBillingState"
                      className="form-control"
                      disabled={!values.billing.country || values.sameBillingAddress}
                    >
                      <option value="">Select...</option>
                      {State.getStatesOfCountry(values.billing.country).map((state) => (
                        <option key={state.isoCode} value={state.isoCode}>
                          {state.name} ({state.isoCode})
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="billing.state"
                      component="div"
                      className="errorMessage"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputBillingCity">{delivery.city}</label>
                    <Field
                      as="select"
                      name="billing.city"
                      className="form-control"
                      id="inputBillingCity"
                      disabled={!values.billing.state || values.sameBillingAddress}
                    >
                      <option value="">Select...</option>
                      {City.getCitiesOfState(values.billing.country, values.billing.state).map((city) => (
                        <option key={city.name} value={city.name}>
                          {city.name}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="billing.city"
                      component="div"
                      className="errorMessage"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputBillingZip">{delivery.pin}</label>
                    <Field
                      type="number"
                      name="billing.pin"
                      className="form-control"
                      id="inputBillingZip"
                      placeholder={placeholder.pin}
                      disabled={values.sameBillingAddress}
                    />
                    <ErrorMessage
                      name="billing.pin"
                      component="div"
                      className="errorMessage"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-check">
                    <Field
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheckAcceptTerms"
                      name="acceptTerms"
                      checked={values.acceptTerms}
                      onChange={() =>
                        setFieldValue("acceptTerms", !values.acceptTerms)
                      }
                    />
                    <label
                      className="form-check-label"
                      htmlFor="gridCheckAcceptTerms"
                    >
                      I accept and confirm the above details
                    </label>
                    <ErrorMessage
                      name="acceptTerms"
                      component="div"
                      className="errorMessage"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="checkout-action-group">
              <button
                type="submit"
                className="btn btn-next"
                disabled={isSubmitting}
              >
                Save & Next
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserCheckoutForm;
