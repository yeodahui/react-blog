import React from "react";
import BannerContents from "./BannerContents/BannerContents";
import "./banner.css";

export default function Banner() {
  return (
    <div className="banner">
      <div className="max-width">
        <BannerContents page="main" />
      </div>
    </div>
  );
}
