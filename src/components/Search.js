import React, {useState} from "react";

function Search({onType}) {
const [value, setValue] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    onType(value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
