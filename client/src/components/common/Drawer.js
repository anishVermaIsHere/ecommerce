import { useState } from "react";
import draw from "../../assets/styles/sidemenu/Drawer.module.css";
import Accordion from ".././common/Accordion.js";
import Socialfollow from ".././common/Socialfollow.js";
import { sidebarMenu } from "../../utils/constants/constant-data";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdOutlineClose,
} from "react-icons/md";
import { useSelector } from "react-redux";
import { FaRegUser } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { clearToken, clearUser } from "../../lib/reducer/auth/auth-slice.js";
import { signOut } from "firebase/auth";
import { auth } from "../../services/auth/firebaseConfig.js";
import ROUTES from "../../routes/route-links.js";
import { userMenuList } from "../header/AuthUserMenu.js";

export default function Drawer(props) {
  const authState = useSelector((state) => state.authSlice);
  const [subMenu, setSubMenu] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setSubMenu(!subMenu);
  };
  const drawerClose = () => {
    props.state((state) => {
      return false; // or return !state
    });
  };

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        clearToken();
        clearUser();
        navigate(ROUTES.SIGNIN);
      })
      .catch((error) => {
        // An error happened.
        alert("Signout Failed");
      });
  };

  return (
    <>
      <div className={draw.drawerBackground}>
        <div className={draw.drawer}>
          <div className={draw.drawerClose}>
            <MdOutlineClose
              className={draw.hamburgerMenuClose}
              onClick={drawerClose}
            />
          </div>
          <div className={draw.accordion}>
            <ul className={draw.accordionMenu}>
              {sidebarMenu.map(({ name, icon, link, children }) => {
                return (
                  <Accordion
                    title={name}
                    icon={icon}
                    link={link}
                    hambgClose={drawerClose}
                    children={children}
                  />
                );
              })}
            </ul>
          </div>

          <div>
            {authState?.accessToken ? (
              <div className={`${draw.accordionList}`}>
                <p
                  className={`mb-0 d-flex justify-content-between ${draw.accordionItem}`}
                  onClick={toggleMenu}
                >
                  <span>
                    <FaRegUser className={draw.linkIcon} />
                    {authState?.user?.displayName}
                  </span>
                  {subMenu ? (
                    <MdKeyboardArrowUp className="float-end" />
                  ) : (
                    <MdKeyboardArrowDown className="float-end" />
                  )}
                </p>
                {subMenu && (
                  <ul className={`${draw.accordionSubMenu} my-1`}>
                    {userMenuList.map((item) => (
                      <li
                        key={item.label}
                        className={draw.accordionSubMenuList}
                      >
                        <NavLink
                          className={draw.subMenuLink}
                          onClick={drawerClose}
                          to={item.link}
                        >
                          {item.label}
                        </NavLink>
                      </li>
                    ))}
                    <li className={draw.accordionSubMenuList}>
                      <span
                        className={draw.subMenuLink}
                        onClick={() => {
                          signOutUser();
                          drawerClose();
                        }}
                      >
                        Sign out{" "}
                      </span>
                    </li>
                  </ul>
                )}
              </div>
            ) : (
              ""
            )}
            <Socialfollow />
          </div>
        </div>
      </div>
    </>
  );
}
