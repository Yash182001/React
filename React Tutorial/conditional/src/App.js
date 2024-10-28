
import './App.css';
import {useState} from 'react'

function App() {

  const[btn , setbtn]=useState(true)
  return (
   <>
   
   
   {btn?<button className="btn btn-primary">Button will be seen when true</button>:'nothing'}
   
   </>
  );
}

export default App;
