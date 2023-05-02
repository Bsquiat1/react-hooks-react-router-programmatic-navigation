import React, { useState } from "react";

function GifSearch({ handleSubmit }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    handleSubmit(searchTerm);
  }

  return (
    <form onSubmit={onSubmit}>
      <label>
        Enter a search term:
        <input type="text" value={searchTerm} onChange={handleChange} />
      </label>
      <button type="submit">Search</button>
    </form>
  );
}

export default GifSearch;
