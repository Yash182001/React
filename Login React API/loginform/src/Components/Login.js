import React, { useState } from 'react'
// import {useEffect} from 'react'
import './Login.css'
import { useNavigate } from 'react-router'
// import { ClipLoader } from 'react-spinners'

const Login = () => {
  const [formValue , setFormValue] = useState({email:'',password:''})
  const navigate = useNavigate();

  const handleLogin = ()=>{
    navigate('/home');
   
  }
 
  const handleInput = (event)=>{
    setFormValue({...formValue,[event.target.name]:event.target.value})
  }
  
  // const [loading,setLoading] = useState(false);
  // useEffect(()=>{
  //   setLoading(true);
  //   setTimeout(()=>{
  //     setLoading(false);

  //   },5000)
  // },[])

  return (
    <div className="container form">
    <header className='header'>Login</header>

<div className="email mt-3" >
  {/* <label for="Email Address" className="form-label">Email address:</label> */}
  <input type="Email" className="form-control" name='email' value={formValue.email} placeholder="Email Address" onChange={handleInput} />
  </div>
  
  <div className="password mt-3">
  {/* <label for="Password" className="form-label">Password:</label> */}
  <input type="Password" value={formValue.password} name='password' className="form-control mt-3" placeholder='Password' onChange={handleInput} /> 
  </div>
  
  <div className='button-container'>
    <button className='btn btn-success' type='submit' onClick={()=>{handleLogin()}}
     disabled={formValue.email.length===0 || formValue.password.length === 0} >Login</button>
  </div>
  </div>
  )
}

export default Login
