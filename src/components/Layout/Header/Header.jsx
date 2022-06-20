import React from "react";
import HeaderButtons from "./HeaderButtons/HeaderButtons";
import logo from "../../../assets/Logo.svg";
import "./header.css";

export default function Header() {
  return (
    <header>
      <div className="max-width">
        <h1>
          <a href="./">
            <img src={logo} alt="My Blog" />
          </a>
        </h1>
        <HeaderButtons />
      </div>
    </header>
  );
}
