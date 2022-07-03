import React from "react";
import profileImgURL from "../../assets/profile.jpg";

export default function About() {
  return (
    <aside className="about">
      <h2>About Me</h2>
      <img src={profileImgURL} alt="" className="user-profile" />
      <p className="user-name">Chilli</p>
      <p className="user-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </aside>
  );
}
