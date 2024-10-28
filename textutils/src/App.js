// import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';


// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez'
// };

function App() {
  return (
    <>
     
<Navbar title= 'TextUtils' aboutText='About us'/>

<Login/>

<div className="container">
<TextForm heading = 'Enter the text to Analyze'/>
</div>
 
  

    

{/* 

  <h1>
    Hello, {formatName(user)}!
  </h1> */}

  
    
    
    
    
    
    
    
    </>
    
  );
}

export default App;
