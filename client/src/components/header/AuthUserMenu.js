import { FaUser } from "react-icons/fa";
import navbar from "../../assets/styles/header/Navbar.module.css";
import { useSelector } from "react-redux";
import { auth } from "../../services/auth/firebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { clearUser, clearToken } from "../../lib/reducer/auth/auth-slice";
import ROUTES from "../../routes/route-links";



export const userMenuList = [
  {
      link: '#',
      label: "Orders",
  },
  {
    link: '#',
    label: "Settings",
  }
];


const AuthUserMenu = () => {
  const authState = useSelector((state) => state.authSlice);
  const navigate = useNavigate();

  const signOutUser = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
        clearToken();
        clearUser();
        navigate(ROUTES.SIGNIN);
      }).catch((error) => {
        // An error happened.
        alert('Signout Failed');
      });
  };

  return (
    <li className="nav-item dropdown show">
    <span
      className={`dropdown-toggle ${navbar.navLink} ${navbar.signinedUserName}`} 
      role="button"
      id="dropdownMenuLink"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
        <FaUser className="mr-1"/>
      {authState?.user?.displayName?.split(" ")[0]}
    </span>

    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
      {userMenuList.map((item)=>(<span role="button" key={item.label} onClick={()=>navigate(item.link)} className="dropdown-item">{item.label}</span>))}
        <span className="dropdown-item" onClick={signOutUser}>
          Sign out
        </span>
    </div>
  </li>
  );
};

export default AuthUserMenu;
