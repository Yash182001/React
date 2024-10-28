import React from 'react'
import './Navbar.css'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
     <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href='/'>Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" >
      <span className="navbar-toggler-icon"></span>
    </button>
      <form className="d-flex">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-a"to='/home' >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-a " to='/about'>About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-a " to='/products'>Products</NavLink>
        </li>

        <li className="nav-item">
          <Link className="nav-a " to='/login'>Logout</Link>
        </li>
        
      </ul>
      </form>
    </div>
  
</nav>
    
    </>
  )
}

export default Navbar
