import React, { useContext, useEffect } from "react";
import DataContext from "../context/DataContext";
import Item from "./Item";

const ItemsList = (props) => {
  const { filteredList } = useContext(DataContext);

//   const { filteringFunction } = props

//  filteringFunction();
  
  


  return (
    <div>
      {filteredList.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemsList;
