import React from "react";

function GifList({ gifs }) {
  return (
    <ul>
      {gifs.map((gif) => (
        <li key={gif.id}>
          <img src={gif.images.downsized_medium.url} alt={gif.title} />
        </li>
      ))}
    </ul>
  );
}

export default GifList;
