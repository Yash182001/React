import React from 'react'
import Navbar from './Components/Navbar'
import {Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import Background from './Components/Background'
import Text from './Components/Text'
// import play_icon from './Assets/play_icon.png'
// import video1 from './Assets/video1.mp4'
import Form from './Components/Form'

const App = () => {

  const[img, setImg] = useState(1);
  const[playStatus, setPlayStatus] = useState(false);
  return (
    <>
    <div>
    <Background playStatus={playStatus} img={img}/>
    <Navbar/>
    <Text img={img} setImg={setImg} setPlayStatus={setPlayStatus}/>
    
    
  
    {/* <img src={play_icon} className='play' onClick={()=>{<video src={video1} className='video' muted />}}/> */}
    </div>

    <Routes>
      <Route path='/Login-Signup' Component={Form}/>
    </Routes>
    
  
    
    </>
  )
}

export default App
