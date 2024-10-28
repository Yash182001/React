
import './App.css';
import {useState, useEffect, useRef} from 'react';


function App() {

  const handleOnChange = (event)=>{
    // console.log('You can Change');
    setColor(event.target.value)
  }

  const handleOnClick = ()=>{
    //console.log("Change the color")
    setColor('Yellow')
  }

  const [color, setColor] = useState("");
  const [count, setCount] = useState(0);

  //Run on First render
  useEffect(()=>{
    alert("Using of useEffect hooks for first render")
  },[])

  //Run on Every Render
    // useEffect(()=>{
    //   alert("Using of useEffect hooks for every render")
    // },[])

  //Run when count will be changed
    useEffect(()=>{
      alert("Count will be Changed")
    },[count])



    // const a = useRef(0);
    // useEffect(()=>{
    //   a.current = a.current+1;
    //   console.log(`rendering and increasing value of a ${a.current}`)
    // })

    const btnRef = useRef();
    useEffect(()=>{
      console.log('changing the button color using ref method')
      btnRef.current.style.backgroundColor = "red"
    }, [])

  return (
    <>
    <h1>Cars</h1>
    <p>This is Mustang from Ford and</p>
    <p>Color needed:<textarea className="form-control" value={color} id="myBox" onChange={handleOnChange} rows="1"></textarea></p>

    <p>This is Mustang from Ford and Color needed is {color}</p>

    <button className="btn btn-primary" onClick={handleOnClick}>Yellow</button>

    <button className="btn btn-success mx-4 my-4" ref={btnRef} onClick={()=>{setCount(count + 1)}} >{count}</button>
    </>
  );
}

export default App;
