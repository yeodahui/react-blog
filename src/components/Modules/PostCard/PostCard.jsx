import React from "react";
import Author from "../../Atoms/Author/Author";
import Category from "../../Atoms/Category/Category";
import "./postcard.css";

export default function PostCard({post}) {
  return (
      <article>
        <img src={post.thumbnail} alt="" />
        <div className="contents-wrap">
          <Category categories={post.category} />
          <h3>{post.title}</h3>
          <Author
            progileImgURL={post.profileImg}
            name={post.userName}
            date={post.created}
          />
          <p className="post-description">
            {post.contents[0]["text"]}
          </p>
        </div>
      </article>
  );
}
