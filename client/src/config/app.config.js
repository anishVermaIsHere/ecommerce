const AppConfig = {
  appName: "Shop Grow",
  dev: {
    name: "Anish Verma",
    phone: "",
    email: "",
  },
  baseUrl: process.env.REACT_APP_BASEURL,
  baseUrl2: process.env.REACT_APP_BASEURL2,
  paymentGateway: {
    stripe: {
      apiKey: process.env.REACT_APP_STRIPE_PAYMENT_KEY,
      secretKey: process.env.REACT_APP_STRIPE_SECRET_KEY
    }
  }
};

export default AppConfig;
