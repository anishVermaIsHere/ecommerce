import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import "react-phone-number-input/style.css";
import "../../../../assets/styles/user/Checkout.css";
import { shopForm } from "../../../../utils/constants/constant-data";
import { Country, State, City } from "country-state-city";
import { checkoutSchema } from "../../../../utils/validation/schema";

const WatchFormValues = ({
  handleBillingCountry,
  handleBilingStates,
  handleShippingCountry,
  handleShippingStates,
}) => {
  const { values: { shipping, billing} } = useFormikContext();

  useEffect(() => {
    if (shipping.country) {
      handleShippingCountry(shipping.country);
    }
    if (shipping.state) {
      handleShippingStates(shipping.state);
    }
    if (billing.country) {
      handleBillingCountry(billing.country);
    }
    if (billing.state) {
      handleBilingStates(billing.state);
    }
  }, [shipping.country, shipping.state, billing.country, billing.state]);

  return null; // This component does not render anything
};

const formValidation = () => (values) => {
  const { shipping, billing } = values;
  const errors = {};
  // Validation logic
  if (!shipping.name) {
    errors.shipping.name = "Name required";
  } else if (!/^[a-zA-Z\s]{2,20}$/.test(shipping.name)) {
    errors.name = "Invalid name";
  }
  if (!shipping.phone) {
    errors.shipping.phone = "Phone required";
  } else if (!/^[6-9]{1}[0-9]{9}$/.test(shipping.phone)) {
    errors.shipping.phone = "Invalid phone";
  }
  if (!shipping.house) {
    errors.shipping.house = "House No. required";
  } else if (!/^[A-Za-z0-9\s\-]{3,20}$/.test(shipping.house)) {
    errors.house = "Invalid house/flat no.";
  }
  if (!shipping.area) {
    errors.area = "Area required";
  } else if (!/^[A-Za-z0-9\s\-]{3,20}$/.test(shipping.area)) {
    errors.area = "Invalid area";
  }
  if (!shipping.city) {
    errors.city = "City required";
  }
  if (!shipping.state) {
    errors.state = "State required";
  }
  if (!shipping.country) {
    errors.country = "Country required";
  }
  if (!shipping.pin) {
    errors.pin = "Pin required";
  } else if (!/^(?!.*\s)[A-Za-z0-9\s-]{3,10}$/.test(shipping.pin)) {
    errors.pin = "Invalid pincode";
  }
  if (!shipping.acceptTerms) {
    errors.acceptTerms = "Must be checked";
  }
  return errors;
};

const UserCheckoutForm = () => {
  const { delivery, placeholder } = shopForm;
  const [countries, setCountries] = useState(Country.getAllCountries() || []);
  const [shipping, setShipping] = useState({
    states: [],
    cities: [],
    selectedCountry: "",
    selectedState: "",
    selectedCity: "",
  });
  const [billing, setBilling] = useState({
    states: [],
    cities: [],
    selectedCountry: "",
    selectedState: "",
    selectedCity: "",
  });

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

  const handleShippingCountry = (countryCode) => {
    // setSelectedCountry(countryCode);
    // setStates(State.getStatesOfCountry(countryCode)); // Corrected method to get states
    // setSelectedState(""); // Reset state and city
    // setCities([]);
    setShipping({
      ...shipping,
      states: State.getStatesOfCountry(countryCode),
      selectedCountry: countryCode,
      selectedState: "",
      cities: [],
    });
  };

  const handleShippingStates = (stateCode) => {
    // setSelectedState(stateCode);
    // setCities(City.getCitiesOfState(selectedCountry, stateCode));
    // setSelectedCity(""); // Reset city
    setShipping({
      ...shipping,
      selectedState: "",
      cities: City.getCitiesOfState(shipping.selectedCountry, stateCode),
      selectedCity: "",
    });
  };

  const handleBillingCountry = (countryCode) => {
    setBilling({
      ...billing,
      states: State.getStatesOfCountry(countryCode),
      selectedCountry: countryCode,
      selectedState: "",
      cities: [],
    });
  };

  const handleBillingStates = (stateCode) => {
    setBilling({
      ...billing,
      selectedState: "",
      cities: City.getCitiesOfState(billing.selectedCountry, stateCode),
      selectedCity: "",
    });
  };

  return (
    <div className="col-lg-6 border-light customer-checkout-form">
      <Formik
        initialValues={formField}
        // validate={(values) => {
        //   const errors = {};
        //   // Validation logic
        //   if (!values.shipping.name) {
        //     errors.shipping.name = "Name required";
        //   } else if (!/^[a-zA-Z\s]{2,20}$/.test(values.name)) {
        //     errors.name = "Invalid name";
        //   }
        //   if (!values.shipping.phone) {
        //     errors.shipping.phone = "Phone required";
        //   } else if (!/^[6-9]{1}[0-9]{9}$/.test(values.shipping.phone)) {
        //     errors.shipping.phone = "Invalid phone";
        //   }
        //   if (!values.shipping.house) {
        //     errors.shipping.house = "House No. required";
        //   } else if (!/^[A-Za-z0-9\s\-]{3,20}$/.test(values.house)) {
        //     errors.house = "Invalid house/flat no.";
        //   }
        //   if (!values.area) {
        //     errors.area = "Area required";
        //   } else if (!/^[A-Za-z0-9\s\-]{3,20}$/.test(values.area)) {
        //     errors.area = "Invalid area";
        //   }
        //   if (!values.city) {
        //     errors.city = "City required";
        //   }
        //   if (!values.state) {
        //     errors.state = "State required";
        //   }
        //   if (!values.country) {
        //     errors.country = "Country required";
        //   }
        //   if (!values.acceptTerms) {
        //     errors.acceptTerms = "Must be checked";
        //   }
        //   if (!values.pin) {
        //     errors.pin = "Pin required";
        //   } else if (!/^\d{6,10}$/.test(values.pin)) {
        //     errors.pin = "Invalid pincode";
        //   }
        //   return errors;
        // }}
        validationSchema={checkoutSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting, values, setFieldValue }) => (
          <Form>
            <div className="checkout-step-wrapper d-flex-ai-center">
              <div className="checkout-step">
                <h4 className="checkout-step-label">Shipping Address</h4>
                <WatchFormValues
                  handleShippingCountry={handleShippingCountry}
                  handleShippingStates={handleShippingStates}
                  handleBillingCountry={handleBillingCountry}
                  handleBilingStates={handleBillingStates}
                />
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputName">{delivery.name}</label>
                    <Field
                      type="text"
                      name="name"
                      className="form-control"
                      id="inputName"
                      placeholder={placeholder.name}
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="errorMessage"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputPhone">{delivery.phone}</label>
                    <Field
                      type="tel"
                      name="phone"
                      className="form-control"
                      id="inputPhone"
                      placeholder={placeholder.phone}
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="errorMessage"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="inputAddress">{delivery.house}</label>
                  <Field
                    type="text"
                    name="house"
                    className="form-control"
                    id="inputAddress"
                    placeholder={placeholder.house}
                  />
                  <ErrorMessage
                    name="house"
                    component="div"
                    className="errorMessage"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputAddress2">{delivery.area}</label>
                  <Field
                    type="text"
                    name="area"
                    className="form-control"
                    id="inputAddress2"
                    placeholder={placeholder.area}
                  />
                  <ErrorMessage
                    name="area"
                    component="div"
                    className="errorMessage"
                  />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputCountry">{delivery.country}</label>
                    <Field
                      as="select"
                      name="country"
                      id="inputCountry"
                      className="form-control"
                      //   onChange={handleCountry}
                      //   value={selectedCountry}
                    >
                      <option value="">Select...</option>
                      {countries.map((cnt) => (
                        <option key={cnt.isoCode} value={cnt.isoCode}>
                          {cnt.name}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="country"
                      component="div"
                      className="errorMessage"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputState">{delivery.state}</label>
                    <Field
                      as="select"
                      name="state"
                      id="inputState"
                      className="form-control"
                      //   onChange={handleStates}
                      //   value={selectedState}
                      disabled={!shipping.selectedCountry}
                    >
                      <option value="">Select...</option>
                      {shipping.states.map((state) => (
                        <option key={state.isoCode} value={state.isoCode}>
                          {state.name}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="state"
                      component="div"
                      className="errorMessage"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputCity">{delivery.city}</label>
                    <Field
                      as="select"
                      name="city"
                      className="form-control"
                      id="inputCity"
                      disabled={!shipping.selectedState}
                    >
                      <option value="">Select...</option>
                      {shipping.cities.map((city) => (
                        <option key={city.name} value={city.name}>
                          {city.name}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="city"
                      component="div"
                      className="errorMessage"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputZip">{delivery.pin}</label>
                    <Field
                      type="number"
                      name="pin"
                      className="form-control"
                      id="inputZip"
                      placeholder={placeholder.pin}
                    />
                    <ErrorMessage
                      name="pin"
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
                    <label htmlFor="inputName">{delivery.name}</label>
                    <Field
                      type="text"
                      name="name"
                      className="form-control"
                      id="inputName"
                      placeholder={placeholder.name}
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="errorMessage"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputPhone">{delivery.phone}</label>
                    <Field
                      type="tel"
                      name="phone"
                      className="form-control"
                      id="inputPhone"
                      placeholder={placeholder.phone}
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="errorMessage"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="inputAddress">{delivery.house}</label>
                  <Field
                    type="text"
                    name="house"
                    className="form-control"
                    id="inputAddress"
                    placeholder={placeholder.house}
                  />
                  <ErrorMessage
                    name="house"
                    component="div"
                    className="errorMessage"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputAddress2">{delivery.area}</label>
                  <Field
                    type="text"
                    name="area"
                    className="form-control"
                    id="inputAddress2"
                    placeholder={placeholder.area}
                  />
                  <ErrorMessage
                    name="area"
                    component="div"
                    className="errorMessage"
                  />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputCountry">{delivery.country}</label>
                    <Field
                      as="select"
                      name="country"
                      id="inputCountry"
                      className="form-control"
                      //   onChange={handleCountry}
                      //   value={selectedCountry}
                    >
                      <option value="">Select...</option>
                      {Country.getAllCountries().map((cnt) => (
                        <option key={cnt.isoCode} value={cnt.isoCode}>
                          {cnt.name}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="country"
                      component="div"
                      className="errorMessage"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputState">{delivery.state}</label>
                    <Field
                      as="select"
                      name="state"
                      id="inputState"
                      className="form-control"
                      //   onChange={handleStates}
                      //   value={selectedState}
                      disabled={!billing.selectedCountry}
                    >
                      <option value="">Select...</option>
                      {states.map((state) => (
                        <option key={state.isoCode} value={state.isoCode}>
                          {state.name}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="state"
                      component="div"
                      className="errorMessage"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputCity">{delivery.city}</label>
                    <Field
                      as="select"
                      name="city"
                      className="form-control"
                      id="inputCity"
                      disabled={!selectedState}
                    >
                      <option value="">Select...</option>
                      {cities.map((city) => (
                        <option key={city.name} value={city.name}>
                          {city.name}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="city"
                      component="div"
                      className="errorMessage"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputZip">{delivery.pin}</label>
                    <Field
                      type="number"
                      name="pin"
                      className="form-control"
                      id="inputZip"
                      placeholder={placeholder.pin}
                    />
                    <ErrorMessage
                      name="pin"
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
                  <div className="form-check">
                    <Field
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                      name="acceptTerms"
                      checked={values.acceptTerms}
                      onChange={() =>
                        setFieldValue("acceptTerms", !values.acceptTerms)
                      }
                    />
                    <label className="form-check-label" htmlFor="gridCheck">
                      I accept and confirm the above details
                    </label>
                    <ErrorMessage
                      name="acceptTerms"
                      component="div"
                      className="errorMessage"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-next"
                  disabled={isSubmitting}
                >
                  Save & Next
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserCheckoutForm;
