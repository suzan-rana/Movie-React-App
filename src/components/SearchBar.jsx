import React, { useContext } from "react";
import DataContext from "../context/DataContext";

const SearchBar = () => {
  const { searchText, setSearchText, searchHandler } = useContext(DataContext);

  return (
    <div>
      <input
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
        type="text"
        placeholder="Search Here."
      />
      <button onClick={ searchHandler }>Search</button>
    </div>
  );
};

export default SearchBar;
