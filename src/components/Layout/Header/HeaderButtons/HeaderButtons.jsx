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

  function buttonClickHandler(event) {
    const targetClassList = event.target.classList;

    if (
      targetClassList.contains("login") ||
      targetClassList.contains("logout")
    ) {
      setLogin(!login);
    }
  }

  return (
    <ul onClick={buttonClickHandler}>
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
          color={login ? null : "gray"}
        />
      </li>
      <li>
        <Button
          iconURL={login ? iconLogout : iconRegister}
          value={login ? "Logout" : "Register"}
          color={login ? "white" : "gray"}
        />
      </li>
    </ul>
  );
}
