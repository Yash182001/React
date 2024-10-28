import React, { useState } from 'react'
import PropTypes from 'prop-types'
//rfc


export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log('Clicked' + text)
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnChange =(event)=>{
        // console.log('OnChange')
        setText(event.target.value)
        
    }


    const [text, setText] = useState('')
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} id="myBox" onChange={handleOnChange} rows="3"></textarea>
</div>
  <button className="btn btn-primary" onClick={handleUpClick}> Convert to Uppercase</button>
    </div>

    <div className="container">
        <h1>Your Text Summary</h1>
        <p>No. of Words:{text.split(" ").length}  No. of Characters:{text.length}</p>
        <p>Minutes to read:{0.008 * text.split(" ").length}</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>

    </> )
}

TextForm.prototype = {heading: PropTypes.string}

