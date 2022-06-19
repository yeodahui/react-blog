import React from "react";
// TODO: post 넘어갔을 때 콘텐츠 바꾸기

export default function BannerContents({page}) {
  if (page === "main") {
    return (
      <div class="banner-contents">
        <p class="sub-text">React Blog</p>
        <p class="main-text">My BLOG</p>
        <p class="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          nostrum dolor provident beatae deserunt magnam, illo neque. Maiores
          ipsum commodi dolorum beatae aliquid laboriosam est
        </p>
      </div>
    );
  } else if (page === "post") {
    return (
      <div class="banner-contents">
        <p class="today">
          may <em>25</em> Wendsday
        </p>
      </div>
    );
  }
}
