import React from "react";
import { NavLink } from "react-router-dom";
import menu from "../../assets/styles/common/Socialfollow.module.css";
import { sociallink } from "../../utils/constants/constant-data";
import { nanoid } from "nanoid";

function Socialfollow() {
  return (
    <>
      <ul className={menu.socialMenu}>
        {sociallink.map((link, index = nanoid()) => {
          return (
            <li className={menu.socialMenuList} key={index}>
              <NavLink to="#" className={menu.socialLink}>
                {link.icon}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Socialfollow;
