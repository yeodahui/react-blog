import React from "react";
import "./author.css";

export default function Author(name, profileImg, date) {
  return (
    <dl className="author-wrap">
      <dt className="a11y-hidden">Author</dt>
      <dd className="author">
        <img src={profileImg} alt="" /> {name}
      </dd>
      <dt className="a11y-hidden">Created</dt>
      <dd className="created">{date}</dd>
    </dl>
  );
}
