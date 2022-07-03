import React from "react";
import PostList from "../../components/Organisms/PostList/PostList";
import About from "../../components/Modules/About/About";
import "./home.module.css";

export default function Home(posts, user) {
  return (
    <main>
      <div className="max-width">
        <h2 className="a11y-hidden">Post</h2>
        <PostList posts={posts}/>
        <About user={user}/>
      </div>
    </main>
  );
}
