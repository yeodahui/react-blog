import React from "react";
import "./footer.css";
import BackToTop from "../../Atoms/BackToTop/BackToTop";

export default function Footer() {
  return (
    <footer>
      <div className="max-width">
        <h2>©Weniv Corp.</h2>
        <BackToTop />
      </div>
    </footer>
  );
}
