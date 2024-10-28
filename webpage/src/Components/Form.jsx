import './form.css'
import React, { useState } from 'react'


const Form = () => {

    const[action, setAction] = useState("Sign Up")

    const handleSignUp = (()=>{
        setAction("Sign Up")
    })

    const handleLogin = (()=>{
        setAction("Login")
    })
  return (
   <>
   
   <div className="container form">
    <header className='header'>{action}</header>

    {action === "Login"?<div></div>: <div className="mb-3 name">
  {/* <label for="exampleFormControlInput1" className="form-label">Email address</label> */}
  <input type="name" className="form-control" id="name" placeholder="Name"/>
  </div>}
   

   <div className="mb-3 email">
  {/* <label for="exampleFormControlInput1" className="form-label">Email address</label> */}
  <input type="email" className="form-control" id="email" placeholder="Email Address"/>
  </div>

  <div className="mb-3 password">
  {/* <label for="inputPassword5" className="form-label">Password</label> */}
  <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" placeholder='Password'/> 
  </div>
  {action === "Sign Up"?<div></div>:<div className='fp'><a href='/'>Forgot Password?</a></div>}
  

  <div className='button-container'>
    <button className={action === "Login"?"submit gray":"submit"} onClick={handleSignUp}>Sign Up</button>
    <button className={action === "Sign Up"?"submit gray":"submit"}onClick={handleLogin}>Login</button>
  </div>







   </div>
   
   </>
  )
}

export default Form
