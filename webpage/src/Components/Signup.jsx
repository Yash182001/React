import React from 'react'
import './form.css'

const Signup = () => {
  return (
    <>
   
   <div className="container form">
    <header className='header'>Login</header>

   <div className="mb-3 email">
  {/* <label for="exampleFormControlInput1" className="form-label">Email address</label> */}
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email Address"/>
  </div>

  <div className="mb-3 password">
  {/* <label for="inputPassword5" className="form-label">Password</label> */}
  <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" placeholder='Password'/> 
  </div>

  <div className='button-container'>
    <button className="btn btn-primary rounded-pill">Login</button>
    <button className="btn btn-primary rounded-pill">Sign Up</button>
  </div>







   </div>
   
   </>
  )
}

export default Signup
