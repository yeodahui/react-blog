import React from "react";
import "./button.css";

export default function Button({iconURL, value, color}) {
  const BUTTON = "button";
  const LOWER_VALUE = value.toLowerCase();

  return (
    <button type="button" className={`${BUTTON} ${color} ${LOWER_VALUE}`}>
      <img src={iconURL} alt="" />
      <span>{value}</span>
    </button>
  );
}
