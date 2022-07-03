import React from 'react'
import Author from '../../Atoms/Author/Author'
import Category from '../../Atoms/Category/Category'
import "./article.css"

export default function Article({post}) {
  return (
    <section className='wrap-box'>
      <div className="inner">
        <Author 
          progileImgURL={post.profileImg}
          name={post.userName}
          date={post.created}
        />
        <Category categories={post.category} />
        <div class="title-wrap">
          <h2>{post.title}</h2>
          <button class="btn-like">Like</button>
        </div>
        <hr />
        <div className='view-contents'>
          {post.contents.map((item) => (
            item.type === "p"?
            <p>{item.text}</p> :
            <img src={item.src}></img>
          ))}
        </div>
        <div class="btn-group">
          <a href="#" class="btn-modify">
            <span class="a11y-hidden">modify</span>
          </a>
          <button type="button" class="btn-delete">
            <span class="a11y-hidden">delete</span>
          </button>
        </div>
        <a href="./" class="btn-back">
          <span class="a11y-hidden">Back</span>
        </a>
      </div>
    </section>
  )
}
