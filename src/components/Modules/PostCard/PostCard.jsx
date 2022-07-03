import React from "react";
import {Link} from "react-router-dom";
import Author from "../../Atoms/Author/Author";
import Category from "../../Atoms/Category/Category";
import "./postcard.css";

export default function PostCard({postImgURL, author}) {
  return (
    <Link to="/post" className="post">
      <article>
        <img src={postImgURL} alt="" />
        <div className="contents-wrap">
          <Category />
          <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit</h3>
          <Author
            progileImgURL={author.profileImgURL}
            name={author.name}
            date={author.date}
          />
          <p className="post-description">
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
