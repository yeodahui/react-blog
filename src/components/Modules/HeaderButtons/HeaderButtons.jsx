import React, {useState} from "react";
import Button from "../../Atoms/Button/Button";
import iconLogin from "../../../assets/icon-login.svg";
import iconRegister from "../../../assets/icon-register.svg";
import iconLogout from "../../../assets/icon-logout.svg";
import iconModifyWhite from "../../../assets/icon-modify-white.svg";

export default function HeaderButtons({isLogined, loginHandler, profileImg}) {

  return (
    <ul onClick={loginHandler}>
      {isLogined ? (
        <li className="profile-img">
          <a href="#">
            <img src={profileImg} alt="My Page" />
          </a>
        </li>
      ) : null}
      <li>
        <Button
          iconURL={isLogined ? iconModifyWhite : iconLogin}
          value={isLogined ? "Write" : "Login"}
          color={isLogined ? null : "gray"}
        />
      </li>
      <li>
        <Button
          iconURL={isLogined ? iconLogout : iconRegister}
          value={isLogined ? "Logout" : "Register"}
          color={isLogined ? "white" : "gray"}
        />
      </li>
    </ul>
  );
}
