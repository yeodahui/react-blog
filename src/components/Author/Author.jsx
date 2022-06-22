import React from "react";
import "./author.css";

export default function Author({name, profileImgURL, date}) {
  return (
    <dl class="author-wrap">
      <dt class="a11y-hidden">Author</dt>
      <dd class="author">
        <img src={profileImgURL} alt="" /> {name}
      </dd>
      <dt class="a11y-hidden">Created</dt>
      <dd class="created">{date}</dd>
    </dl>
  );
}
