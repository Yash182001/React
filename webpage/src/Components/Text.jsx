import './Text.css'
import arrow_btn from'../Assets/arrow_btn.png'
// import pause_icon from '../Assets/pause_icon.png'

const Text = ({img,setImg,setPlayStatus}) => {

  if(img===1){
  return<div className='text'>
    <p>Dive into<br/>what you love </p>
    <img src={arrow_btn} className='arrow' alt='img1' onClick={()=>{setImg(2)}}/>
    </div>

  
  }
  else if(img===2){
    return<div className='text'>
    <p>Indulge<br/>your passions</p>
    <img src={arrow_btn} className='arrow'alt='img2' onClick={()=>{setImg(3)}}/>
    
    </div>
   
  }
  else if(img===3){
    return<div className='text'>
    <p>Give into<br/>your passions</p>
    <img src={arrow_btn} className='arrow'alt='img4' onClick={()=>{setImg(1)}}/>
    {/* <img src={arrow_btn} className='arrow'alt='img3' onClick={()=>{setPlayStatus(true)}}/>
    <img src={pause_icon} className='ms-5' alt='pause' onClick={()=>{setPlayStatus(false)}}/> */}
    
    </div>
    
  }
    
  
}

export default Text

