import React from "react";
import PostCard from "../../Modules/PostCard/PostCard";
import profileImgURL from "../../assets/profile.jpg";
import "./postlist.css";

export default function PostList() {
  const postImgURL = [
    "https://via.placeholder.com/300x200/fff.png",
    "https://via.placeholder.com/300x200/eee.png",
    "https://via.placeholder.com/300x200/ddd.png",
    "https://via.placeholder.com/300x200/ccc.png",
    "https://via.placeholder.com/300x200/bbb.png",
    "https://via.placeholder.com/300x200/aaa.png",
  ];
  const author = {
    name: "Chilli",
    profileImgURL: profileImgURL,
    date: "2022.05.25",
  };

  const postCardComponentsArray = postImgURL.map(i => (
    <li>
      <PostCard postImgURL={i} author={author} />
    </li>
  ));

  return <ul className="posts">{postCardComponentsArray}</ul>;
}
