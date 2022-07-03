import React from "react";
import BannerContents from "../../Atoms/BannerContents/BannerContents";
import "./banner.css";

export default function Banner({bannerInfo}) {
  return (
    <div className="banner">
      <div className="max-width">
        <BannerContents bannerInfo={bannerInfo} />
      </div>
    </div>
  );
}
