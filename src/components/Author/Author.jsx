import React from "react";
import "./author.css";

export default function Author({name, profileImgURL, date}) {
  return (
    <dl className="author-wrap">
      <dt className="a11y-hidden">Author</dt>
      <dd className="author">
        <img src={profileImgURL} alt="" /> {name}
      </dd>
      <dt className="a11y-hidden">Created</dt>
      <dd className="created">{date}</dd>
    </dl>
  );
}
