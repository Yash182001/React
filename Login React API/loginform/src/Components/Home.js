import React from 'react'
import Navbar from './Navbar'
import './Home.css'
import { useState, useEffect } from 'react'

const Home = () => {
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
    setLoading(false)
    },2000)

  },[])
  return (
    <>
    {loading?<div class="d-flex justify-content-center mt-5" >
  <div class="spinner-border" role="status">
  </div>
</div>:
    <div className='container-fluid home'>
    <Navbar/>



    </div>
}
    </>
  )
}

export default Home
