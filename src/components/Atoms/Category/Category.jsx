import React from "react";
import "./category.module.css";

export default function Category(categories) {
  return (
    <dl className="category">
      <dt className="a11y-hidden">Category</dt>
      {categories.map((category)=> (
        <dd>{category}</dd>
      ))}
    </dl>
  );
}
