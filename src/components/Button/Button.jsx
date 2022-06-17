import React from "react";
import "./button.css";

export default function Button({iconURL, value, colorClass}) {
  console.log(colorClass);
  return (
    <button type="button" className={`button ${colorClass}`}>
      <img src={iconURL} alt="" />
      <span>{value}</span>
    </button>
  );
}
