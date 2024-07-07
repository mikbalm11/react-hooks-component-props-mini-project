import React from "react";

function Article({ title, date="January 1, 1970", minutes, preview }) {
    const emoji = minutes < 30 ? "☕️" : "🍱";
    let readTime = "";
    let interval = 0;

    while (interval < minutes) {
        readTime += emoji;
        emoji === "☕️" ? interval += 5 : interval += 10;
    }

    return (
        <article>
          <h3>{title}</h3>
          <small>{date} • {readTime} {minutes} min read</small>
          <p>{preview}</p>
        </article>
      );
}

export default Article