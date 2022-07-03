import React from "react";
import {Link} from "react-router-dom";
import PostCard from "../../Modules/PostCard/PostCard";
import "./postlist.module.css";

export default function PostList(posts) {

  return (
  <ul className="posts">
    {posts.map((post) => {
      return (
        <li key={post.id}>
          <Link to={`/post/${post.id}`} className="post">
            <PostCard post={post} />
          </Link>
        </li>
      );
    })}
    </ul>
    );
}
