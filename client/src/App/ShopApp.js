import { useEffect } from "react";
import "../App.css";
import { useNavigate, useLocation } from "react-router-dom";
import { auth } from "../services/auth/firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Header from "../components/header/Header";
import Container from "../container/Container";
import Footer from "../components/footer/Footer";
import ROUTES from "../routes/route-links";
import { useDispatch } from "react-redux";
import { setUser, setAccessToken, clearToken, clearUser } from "../lib/reducer/auth/auth-slice";
import { getAuthStorage } from "../utils/localstorage";

const ShopApp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const accessToken = getAuthStorage("authToken");

  const clearAuth = () => {
    dispatch(clearToken());
    dispatch(clearUser());
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {
          currentUser: {
            displayName,
            email,
            emailVerified,
            photoURL,
            accessToken,
          },
        } = auth;
        const user = {
          displayName,
          email,
          emailVerified,
          photoURL,
        };
        dispatch(setUser(user));
        dispatch(setAccessToken(accessToken));
        if (location.pathname === ROUTES.SIGNIN) {
          navigate("*");
        }
      } else {
        // No user signed in \
        // navigate(ROUTES.SIGNIN);
        clearAuth();
      }
    });

    if(!accessToken){
      // navigate(ROUTES.SIGNIN);
      clearAuth();
    }
  }, [accessToken]);

  return (
    <div className="app-container">
      <Header />
      <Container />
      <Footer />
    </div>
  );
};

export default ShopApp;
