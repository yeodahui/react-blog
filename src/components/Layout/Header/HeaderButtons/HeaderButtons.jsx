import React, {useState} from "react";
import Button from "../../../Button/Button";
import profile from "../../../../assets/profile.jpg";
import iconLogin from "../../../../assets/icon-login.svg";
import iconRegister from "../../../../assets/icon-register.svg";
import iconLogout from "../../../../assets/icon-logout.svg";
import iconModify from "../../../../assets/icon-modify.svg";
import iconModifyWhite from "../../../../assets/icon-modify-white.svg";

export default function HeaderButtons() {
  const [login, setLogin] = useState("false");

  function clickLogin() {
    setLogin(!login);
  }

  return (
    <ul>
      {login ? (
        <li className="profile-img">
          <a href="#">
            <img src={profile} alt="My Page" />
          </a>
        </li>
      ) : null}
      <li>
        <Button
          iconURL={login ? iconModifyWhite : iconLogin}
          value={login ? "Write" : "Login"}
          colorClass={login ? null : "gray"}
        />
      </li>
      <li>
        <Button
          iconURL={login ? iconLogout : iconRegister}
          value={login ? "Logout" : "Register"}
          colorClass={login ? "white" : "gray"}
        />
      </li>
      <li></li>
      <li></li>
    </ul>
  );
}
