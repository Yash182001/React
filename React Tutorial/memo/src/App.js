import logo from './logo.svg';
import './App.css';
import {useMemo, useState} from 'react'


const nums = new Array(30_000_000).fill(0).map((_, i)=>{
  return{
    index: i,
    isMagical: i===29_000_000
  }
})
function App() {

  const[count, setCount] = useState(0);
  const[numbers, setNumber]=useState(nums)

  // const magical = numbers.find(item=>item.isMagical===true)
  const magical = useMemo(()=>numbers.find(item=>item.isMagical===true), [numbers])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{magical.index}</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
        <button onClick={()=>{setCount(count + 1);
        if(count === 10){
          setNumber(new Array(10_000_000).fill(0).map((_, i)=>{
            return{
              index: i,
              isMagical: i=== 9_000_000
            }
          }))
        }}}>{count}</button>
      </header>
      
    </div>
  );
}

export default App;
