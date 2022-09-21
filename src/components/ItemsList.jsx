import React, { useContext, useEffect } from "react";
import DataContext from "../context/DataContext";
import Item from "./Item";

const ItemsList = (props) => {
  
  const { filteredList, homeHandler, moviesHandler, tvHandler, bookmarkHandler } =
  useContext(DataContext);

  const { filteringFunction } = props

//  filteringFunction();
const location = window.location.href
console.log( location )
switch( location ) {
  case 'http://127.0.0.1:5173':
        homeHandler();
        break;
  case 'http://127.0.0.1:5173/movies':
        moviesHandler();
        break;
  case 'http://127.0.0.1:5173/tv':
        tvHandler();
        break;
  case 'http://127.0.0.1:5173/bookmark':
        bookmarkHandler();
        break;
}
  
  


  return (
    <div>
      {filteredList.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemsList;
