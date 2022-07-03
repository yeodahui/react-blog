import React from "react";
import "./category.css";

export default function Category({categories}) {
  return (
    <dl className="category">
      <dt className="a11y-hidden">Category</dt>
      {categories.map((category, id)=> (
        <dd key={id}>{category}</dd>
      ))}
    </dl>
  );
}
