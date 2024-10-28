import React, { useState } from 'react'
import { Input,Button } from 'reactstrap';

const TestForm = () => {
    const [firstName, setFirstName]= useState("");
    const [lasttName, setLasttName]= useState("");
    const [secondName, setSecondName]= useState("");
    const [arraye, setArraye]= useState([]);


    const saveData = () =>{
       var newarray =arraye
       var obj={
        studentFirstname:firstName,
        lasttName :lasttName,
        secondName:secondName
       }
       newarray.push(obj)
       console.log("newarray",newarray);
       setArraye(newarray)
    }



  return (
    <div className='container'>
      <form>
        <div className='row'>
            <div className='col-lg-4 col-md-4'>
                <Input placeholder='First Name' type='text' value={firstName} onChange={(e)=>{
                    setFirstName(e.target.value)
                }} />
            </div>
            <div className='col-lg-4 col-md-4'>
                <Input placeholder='Second Name' type='text'value={secondName} onChange={(e)=>{
                    setSecondName(e.target.value)
                }} />
            </div>
            <div className='col-lg-4 col-md-4'>
                <Input placeholder='Last Name' type='text' value={lasttName} onChange={(e)=>{
                    setLasttName(e.target.value)
                }}/>
            </div>
            <div className='col-lg-12 col-md-4'>
                <Button color='primary' onClick={()=>{saveData()}}>Save</Button>
            </div>

        </div>
      </form>
    </div>
  )
}

export default TestForm
