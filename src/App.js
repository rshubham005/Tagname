import "./styles.css";
import React, { useState } from "react";
import del from "./img/download.png";
export default function App() {
  const [tags, settags] = useState([]);
  function addtag(event) {
    if (event.key === "Enter" && event.target.value !== "") {
      // console.log(event.target.value);
      settags((tags) => [...tags, event.target.value]);
      // console.log(...tags);
    }
  }
  function deletetag(event) {
    let id = event.target.alt;
    // console.log(id);
    const result = tags.filter((tag) => tags.indexOf(tag) !== { id });
    console.log(...result);
    console.log(id);
  }
  return (
    <div className="Tag">
      <ul className="tags">
        {tags.map((tag, index) => (
          <li key={index} className="item">
            {tag}
            <span>
              <img
                onClick={(event) => deletetag(event)}
                className="delete"
                src={del}
                alt={index}
              />
            </span>
          </li>
        ))}
      </ul>
      <input type="text" onKeyUp={(event) => addtag(event)} />
    </div>
  );
}
