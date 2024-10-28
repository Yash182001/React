import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import './products.css'



export default function Products() {
  return (
   <>
 
      <div className=" container ">
      <nav class="navbar navbar-dark bg-dark navbar2">
    <Link class="navbar-link" to="/products/search">Search</Link>
    <Link class="navbar-link" to="/products/select">Select</Link>
    <Link class="navbar-link" to="/products/categories">Categories</Link>
    
</nav>
        <Outlet/>
      </div>
    
    
   
   
   </>
  )
}

