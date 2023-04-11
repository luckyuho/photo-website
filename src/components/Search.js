import React from "react";

const Search = ({ search, setInput, input, currentSearch }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <div className="search">
        <input onChange={inputHandler} type="text" value={input} />
        <button onClick={search}>Search</button>
      </div>
      <div className="searchitem">
        <p>Current Search is: {currentSearch}</p>
      </div>
    </div>
  );
};

export default Search;
