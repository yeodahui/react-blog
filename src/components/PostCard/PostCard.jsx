import React from "react";
import {Link} from "react-router-dom";
import Author from "../Author/Author";
import Category from "../Category/Category";
import profileImgURL from "../../assets/profile.jpg";
import "./postcard.css";

export default function PostCard({postImgURL}) {
  return (
    <Link to="/post" className="post">
      <article>
        <img src="https://via.placeholder.com/300.png/09f/fff" alt />
        <div className="contents-wrap">
          <Category />
          <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit</h3>
          <Author
            progileImgURL={profileImgURL}
            name={"Chilli"}
            date="2022.05.25"
          />
          <p class="post-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            illum nostrum perferendis voluptas, voluptate soluta corrupti dolore
            quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio
            cum incidunt repudiandae vel. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Inventore illum nostrum perferendis
            voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque!
            Exercitationem est facilis dolor quas odio cum incidunt repudiandae
            vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Inventore illum nostrum perferendis voluptas, voluptate soluta
            corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis
            dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Inventore illum nostrum
            perferendis voluptas, voluptate soluta corrupti dolore quidem.
            Placeat, eaque! Exercitationem est facilis dolor quas odio cum
            incidunt repudiandae vel."
          </p>
        </div>
      </article>
    </Link>
  );
}
