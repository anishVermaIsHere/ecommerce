import "./App.css";
import ShopApp from "./App/ShopApp.js";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorBoundary from "./components/error/ErrorBoundary";
import { Provider } from "react-redux";
import store  from "./store/appstore.js";

const App = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Router>
          <ShopApp />
        </Router>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
