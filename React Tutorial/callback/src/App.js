import logo from './logo.svg';
import './App.css';
import {useState, useCallback} from 'react'
import Navbar from './Components/Navbar';

function App() {
  const[count, setCount] = useState(0);
  const[adjective, setAdjective] = useState('good')

  const getAdjective = useCallback(()=>{
    return "another"
  }, [])
  return (
    <>
   
    <div className="App">
    
      <header className="App-header">
      <Navbar adjective={'good'} getAdjective={getAdjective}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={()=>{setCount(count + 1);}}>{count}</button>
      </header>
    </div>
    </>
  );
}

export default App;
