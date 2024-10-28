import React from 'react'
import './search.css'


const Search = () => {
  return (
    <>
    <div className="search">
    <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search here for products" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      </div>
      </>
  )
}

export default Search
