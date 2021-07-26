import React from "react";
import { nanoid } from "nanoid";
function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const x = [];
  const min = minutes % 10 === 0 ? minutes / 10 : minutes / 10 + 1;
  function calc() {
    if (minutes < 30) {
      for (let i = 1; i <= minutes / 5; i++) {
        x.push("☕");
      }
    } else {
      for (let i = 1; i <= min; i++) {
        x.push("🍱");
      }
    }
  }
  calc();
  console.log(x);
  return (
    <article>
      <h3> {title} </h3>
      <small>
        {" "}
        {date}{" "}
        {x.map((coffe, i) => {
          return <span key={i}>{coffe}</span>;
        })}
        {minutes} min read
      </small>
      <p> {preview} </p>
    </article>
  );
}

export default Article;
