import React from "react";
import Button from "../../Button/Button";
import profile from "../../../assets/profile.jpg";
import iconLogin from "../../../assets/icon-login.svg";
import iconRegister from "../../../assets/icon-register.svg";
import iconLogout from "../../../assets/icon-logout.svg";
import iconModify from "../../../assets/icon-modify.svg";
import iconModifyWhite from "../../../assets/icon-modify-white.svg";
import logo from "../../../assets/Logo.svg";
import "./header.css";

function headerButton(login) {
  const buttonList = [];
  if (login) {
    // 로그인
    buttonList.push(
      <a href="#">
        <img src={profile} alt="My Page" />
      </a>,
    );
    buttonList.push(<Button iconURL={iconModifyWhite} value={"Write"} />);
    buttonList.push(
      <Button iconURL={iconLogout} value={"Logout"} colorClass={"white"} />,
    );
  } else {
    // 로그아웃
    buttonList.push(
      <Button iconURL={iconLogin} value={"Login"} colorClass={"gray"} />,
    );
    buttonList.push(
      <Button iconURL={iconRegister} value={"Register"} colorClass={"gray"} />,
    );
  }
  console.log(buttonList);
  return buttonList.map(element => (
    <li className={element.type === "a" ? "profile-img" : ""}>{element}</li>
  ));
}

export default function Header() {
  let login = true;
  return (
    <header>
      <div className="max-width">
        <h1>
          <a href="./">
            <img src={logo} alt="My Blog" />
          </a>
        </h1>
        <ul>{headerButton(login)}</ul>
      </div>
    </header>
  );
}
