import React from "react";
import PostList from "../../components/PostList/PostList";
import "./home.css";

export default function Home() {
  return (
    <main>
      <div className="max-width">
        <h2 className="a11y-hidden">Post</h2>
        <PostList />
      </div>
    </main>
  );
}
