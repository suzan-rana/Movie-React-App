import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ItemsList from "./components/ItemsList";
import SearchBar from "./components/SearchBar";
import DataContext from "./context/DataContext";

const App = () => {
  const { homeHandler, moviesHandler, tvHandler, bookmarkHandler } =
    useContext(DataContext);
  return (
    <>
      <SearchBar />
      <Navbar />

      <Routes>
        <Route
          exact
          path="/"
          element={<ItemsList filteringFunction={homeHandler} />}
        />
        <Route
          exact
          path="/movies"
          element={<ItemsList filteringFunction={moviesHandler} />}
        />
        <Route
          exact
          path="/tv"
          element={<ItemsList filteringFunction={tvHandler} />}
        />
        <Route
          exact
          path="/bookmark"
          element={<ItemsList filteringFunction={bookmarkHandler} />}
        />
      </Routes>
    </>
  )
};

export default App;
