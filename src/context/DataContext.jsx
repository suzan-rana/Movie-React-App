import React, { createContext, useState  } from "react";
import dataList from '../config/data'

const DataContext = createContext();


const DataProvider = ({ children }) => {

  const data = dataList;
  const [searchText, setSearchText] = useState('')
  const [ filteredList, setFilteredList ] = useState(data)

  const searchHandler = () => {
    setFilteredList( filteredList.filter(item => item.title.trim().toLowerCase() === searchText.trim().toLowerCase() ))
  }

  const homeHandler = () => {
    setFilteredList(data)
  }

  const moviesHandler = () => {
    const movieArray = data.filter( item => item.movies === true)
    setFilteredList( movieArray );
  }


  const tvHandler = () => {
    const tvArray = data.filter( item => item.movies === false)
    setFilteredList( tvArray )
  }

  const bookmarkHandler = () => {
    const bookmarkArray = data.filter( item => item.bookmark === true)
    setFilteredList( bookmarkArray )
  }
  return <DataContext.Provider value={
    {
        searchText, setSearchText,
        filteredList, setFilteredList,
        searchHandler,
        homeHandler,
        moviesHandler,
        tvHandler,
        bookmarkHandler
    }
  }>{children}</DataContext.Provider>;
};


export default DataContext
export { DataProvider }