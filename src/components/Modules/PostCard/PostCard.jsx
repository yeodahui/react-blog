import React from "react";
import Author from "../../Atoms/Author/Author";
import Category from "../../Atoms/Category/Category";
import "./postcard.module.css";

export default function PostCard({thumbnail, title, category, profileImg, userName, created, contents}) {
  return (
      <article>
        <img src={thumbnail} alt="" />
        <div className="contents-wrap">
          <Category categories={category} />
          <h3>{title}</h3>
          <Author
            progileImgURL={profileImg}
            name={userName}
            date={created}
          />
          <p className="post-description">
            {contents[0].text}
          </p>
        </div>
      </article>
  );
}
