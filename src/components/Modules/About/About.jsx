import React from "react";
import "./about.css"

//{email, profileImg, name, userInfo, categories, sns}
export default function About({user}) {
  console.log(user.profileImg)
  return (
    <aside className="about">
      <h2>About Me</h2>
      <img src={user.profileImg} alt="" className="user-profile" />
      <p className="user-name">{user.name}</p>
      <p className="user-description">
        {user.userInfo}
      </p>

      <h3>Categories</h3>
        <ul className="categories">
          {
            user.category.map((item, id) => {
              <li key={id}><a href="#">item</a></li>
            })
          }
        </ul>

      <h3>Follow</h3>
      <ul className="sns">
        <li>
          <a href="#">
            <img src="./assets/Facebook.svg" alt="Facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="./assets/Twitter.svg" alt="Twitter" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="./assets/Instagram.svg" alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="./assets/Github.svg" alt="GitHub" />
          </a>
        </li>
      </ul>
    </aside>
  );
}
