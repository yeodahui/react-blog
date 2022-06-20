import React from "react";
import "./backtotop.css";

const moveToTop = () => {
  document.documentElement.scrollTop = 0;
};

export default function BackToTop() {
  return (
    <button class="top-button" onClick={moveToTop}>
      TOP
    </button>
  );
}
