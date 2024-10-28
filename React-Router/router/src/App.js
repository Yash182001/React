
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Form from './Components/Form';
import Products from './Components/Products/Products'
import Search from "./Components/Products/Search"
import Select from "./Components/Products/Select"
import Categories from './Components/Products/categories'
import image1 from './Components/space1.jpg'



import {Routes, Route} from "react-router-dom";


function App() {

  return (
    <>
    
    <img src={image1} className='home-img' alt='background'/>
    
    
      <Navbar/>
      
      <Routes>
        <Route path='/' Component={Home}/>
          <Route path='/about' Component={About}/>
          <Route path='/products' Component={Products}>
          <Route path='/products/search' Component={Search}/>
          <Route path='/products/select' Component={Select}/>
          <Route path='/products/categories' Component={Categories}/>
          </Route>
          <Route path='/login-signup' Component={Form}/>
        </Routes>
        
 
    </>
  );
}

export default App;
