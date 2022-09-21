import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../context/DataContext";

const Navbar = () => {
  const { homeHandler, moviesHandler, tvHandler, bookmarkHandler } =
    useContext(DataContext);
  return (
    <div>
      <span onClick={homeHandler}>
        <Link to="/" relative="path">
          Home
        </Link>
      </span>
      <span onClick={moviesHandler}>
        <Link to="/movies" relative="path">
          Movies
        </Link>
      </span>
      <span onClick={tvHandler}>
        <Link to="/tv" relative="path">
          TV
        </Link>
      </span>
      <span onClick={bookmarkHandler}>
        <Link to="/bookmark" relative="path">
          Bookmark
        </Link>
      </span>
    </div>
  );
};

export default Navbar;
