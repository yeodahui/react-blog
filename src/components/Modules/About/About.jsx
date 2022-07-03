import React from "react";

export default function About({email, profileImg, name, userInfo, categories, sns}) {
  return (
    <aside className="about">
      <h2>About Me</h2>
      <img src={profileImg} alt="" className="user-profile" />
      <p className="user-name">{name}</p>
      <p className="user-description">
        {userInfo}
      </p>
    </aside>
  );
}
