import React from 'react'

//rfc
export default function Login() {

  const handleUpLogin = ()=>{
    console.log('Login')
   
  }

  const handleUpLogout = ()=>{
    console.log("Logout")
    
  }


  return ( 
  <>
    <button className="btn btn-primary my-3 mx-3" onClick={handleUpLogin}>Login</button>
    <button className="btn btn-danger" onClick={handleUpLogout}>Logout</button>
    </>
    )
}
