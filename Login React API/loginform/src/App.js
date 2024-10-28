
import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Login from './Components/Login';
import { Routes, Route } from 'react-router';
import Products from './Components/Products';
function App() {

 
  return (
  <>
  
  

  <Routes>
    <Route path='/login' Component={Login}/>
    <Route path='/home' Component={Home}/>
    <Route path='/about' Component={About}/>
    <Route path='/products' Component={Products}/>
  </Routes>
  
  </>
  );
}

export default App;
