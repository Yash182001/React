import './Navbar.css'
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
  <div className="container-fluid">
    <a className="navbar-brand" href='/'>EV-olution</a>

    <form className="d-flex">
      <ul className='nav-items'>
       <li><a className='btn rounded-pill text-white'href="/">Home</a></li> 
        <li><Link className='btn rounded-pill text-white'>Explore</Link></li>
        <li><Link className='btn rounded-pill text-white'>About</Link></li>
        <li><Link className='btn rounded-pill text-white'>Contact</Link></li>
        <li><Link className='btn rounded-pill text-white' to="/Login-Signup">Login/Signup</Link></li>
      </ul>
    </form>
  </div>
</nav>
    
    
    </>
  )
}

export default Navbar
