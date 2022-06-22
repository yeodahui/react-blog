import React from "react";
// TODO: post 넘어갔을 때 콘텐츠 바꾸기

export default function BannerContents({page}) {
  if (page === "main") {
    return (
      <div className="banner-contents">
        <p className="sub-text">React Blog</p>
        <p className="main-text">My BLOG</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          nostrum dolor provident beatae deserunt magnam, illo neque. Maiores
          ipsum commodi dolorum beatae aliquid laboriosam est
        </p>
      </div>
    );
  } else if (page === "post") {
    return (
      <div className="banner-contents">
        <p className="today">
          may <em>25</em> Wendsday
        </p>
      </div>
    );
  }
}
