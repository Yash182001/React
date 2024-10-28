import React from 'react'
import {Link} from "react-router-dom";

export default function Navbar() {
  
  return (

    
    <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <Link className="navbar-brand text-white" to="">Space Shuttle</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" >
      <span className="navbar-toggler-icon"></span>
    </button>
      <form className="d-flex">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link text-white " to="/" >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/login-signup">Login/Signup</Link>
        </li>
        
      </ul>
      </form>
    </div>
  
</nav>
  )
}
