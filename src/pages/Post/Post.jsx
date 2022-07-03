import React from "react";
import Article from "../../components/Organisms/Article/Article";
import "./post.css"

export default function Post({posts}) {
  const post = posts[0];

  return (
    <div className="view">
      <div className="max-width">
        <Article post={post} />
      </div>
    </div>
  );
}
