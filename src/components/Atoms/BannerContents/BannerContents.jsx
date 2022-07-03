import React from "react";

export default function BannerContents({mainTitle, subTitle, description}) {
  return (
    <div className="banner-contents">
      <p className="sub-text">{subTitle}</p>
      <p className="main-text">{mainTitle}</p>
      <p className="description">
        {description}
      </p>
    </div>
  );
  // if (page === "main") {
  // } else if (page === "post") {
  //   return (
  //     <div className="banner-contents">
  //       <p className="today">
  //         may <em>25</em> Wendsday
  //       </p>
  //     </div>
  //   );
  // }
}
