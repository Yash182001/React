
import { useState } from 'react';
import './App.css';
import Navbar from './Comonents/Navbar';
import { counterContext } from './Context/Context';

function App() {

  const[count, setcount] = useState(0);
  return (
    <>
    <counterContext.Provider value={count}>
     <Navbar/>
     <button onClick={()=>{setcount(count + 1)}}>{count}</button>
     </counterContext.Provider>
    </>
  );
}

export default App;
