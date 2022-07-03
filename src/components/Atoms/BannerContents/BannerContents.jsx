import React from "react";

export default function BannerContents({bannerInfo}) {
  return (
    <div className="banner-contents">
      <p className="sub-text">{bannerInfo.subTitle}</p>
      <p className="main-text">{bannerInfo.mainTitle}</p>
      <p className="description">
        {bannerInfo.description}
      </p>
    </div>
  );
}
