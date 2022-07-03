import React from "react";
import HeaderButtons from "../../Modules/HeaderButtons/HeaderButtons";
import logo from "../../../assets/Logo.svg";
import "./header.module.css";

export default function Header(isLogined, loginHandler, user) {
  return (
    <header>
      <div className="max-width">
        <h1>
          <a href="./">
            <img src={logo} alt="My Blog" />
          </a>
        </h1>
        <HeaderButtons isLogined={isLogined} loginHandler={loginHandler} profileImg={user.profileImg}/>
      </div>
    </header>
  );
}
