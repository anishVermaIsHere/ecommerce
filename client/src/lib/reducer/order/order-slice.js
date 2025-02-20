import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  summary: {
    orderedItems: [],
    subTotal: 0.0,
    totalItems: 0,
    taxValue: 0.0,
    taxRate: 0,
    grandTotal: 0.0,
    promoApplied: "",
  },
  shippingAddress: {
    name: "",
    phone: "",
    house: "",
    area: "",
    city: "",
    state: "",
    country: "",
    pin: "",
  },
  billingAddress: {
    name: "",
    phone: "",
    house: "",
    area: "",
    city: "",
    state: "",
    country: "",
    pin: "",
  },
  isCheckout: false
};

const orderSlice = createSlice({
  name: "orderSlice",
  initialState,
  reducers: {
    setSummary(state, action) {
      return {
        ...state,
        summary: action.payload,
      };
    },
    setShippingAddress(state, action) {
      return {
        ...state,
        shippingAddress: action.payload,
      };
    },
    setBillingAddress(state, action) {
      return {
        ...state,
        billingAddress: action.payload,
      };
    },
    setCheckout(state, action){
      return {
        ...state,
        isCheckout: action.payload
      }
    },
    clearSummary(state, action) {
      return {
        state,
        summary: {
          orderedItems: [],
          subTotal: 0.0,
          totalItems: 0,
          taxValue: 0.0,
          taxRate: 0,
          grandTotal: 0.0,
          promoApplied: "",
        },
      };
    },
    clearAllAddress(state, action) {
      return {
        ...state,
        shippingAddress: {
          name: "",
          phone: "",
          house: "",
          area: "",
          city: "",
          state: "",
          country: "",
          pin: "",
        },
        billingAddress: {
          name: "",
          phone: "",
          house: "",
          area: "",
          city: "",
          state: "",
          country: "",
          pin: "",
        },
      };
    },
  },
});

export const { setBillingAddress, setShippingAddress, setSummary, clearAllAddress, clearSummary, setCheckout } = orderSlice.actions;

export default orderSlice.reducer;
