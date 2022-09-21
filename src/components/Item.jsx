import React from 'react'

const Item = ( props ) => {

  const { title, rating, movies } = props.item 
  const style = {
    padding: "1rem",
    color: "white",
    margin: ".5rem",
    backgroundColor: "red"
  }
  return (
    <div style={style}>
      <span>{title}</span> <span>{rating}</span> <span>{movies === true ? "Movies": "TV Series"}</span> 
    </div>
  )
}

export default Item