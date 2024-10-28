import React, { useState } from 'react'
import { Button, Input, Table } from 'reactstrap'
import Select from 'react-select';


const Form3 = () => {

    const [gender, setGender] = useState("");
    const genderSelect = [
        { value: "Male", label: "Male" },
        { value: "Female", label: "Female" },
        { value: "Others", label: "Others" },
    ];

    const [firstName,setFirstName] = useState("");
    const[inputArray,setInputArray]=useState([]);

    const SaveData =()=>{
        var newarray=inputArray
        var obj={

            FirstName:firstName,
            Gender:gender
        }

        newarray.push(obj);
        setInputArray(newarray);
        setFirstName("")
        setGender("")
        // console.log("array-----------",newarray)
    }
        const select=(i)=>{
            console.log(i,"edit")
            setFirstName(inputArray[i].FirstName);
            setGender(inputArray[i].Gender);
        }
        
        const updateEntry = (i) => {
            // Handle updating the entry in the array (e.g., make changes to inputArray[index])
            // For example:
            const updatedEntry = {
                FirstName: firstName,
                Gender: gender, // Use gender.value as the gender value
            };
            const updatedArray = [...inputArray];
            updatedArray[i] = updatedEntry;
            setInputArray(updatedArray);
            setFirstName('');
            setGender("");
        };
  return (
    <>
    <Input type='text' placeholder='firstName' value={firstName} onChange={(e)=>setFirstName(e.target.value)} />

    <Select value={gender} options={genderSelect} placeholder="Gender" onChange={(e) => {
                                        // console.log("gender-----------",e);
                                        setGender(e)

                                    }} />

    <Button onClick={SaveData}>Submit</Button>
    <Button onClick={()=>updateEntry()} >Update</Button>


    <Table>
        <thead>
          <tr>
            <td>First name</td>
            <td>Gender</td>
          </tr>
        </thead>
        <tbody>
            {
                inputArray.map(
                    (item,i)=>{
                        return(
                            <tr key={i}>
                                <td>{item.FirstName}</td>
                                <td>{item.Gender ? item.Gender.label:""}</td>
                                <td><Button onClick={()=>select(i)}>Select</Button></td>
                            </tr>
                        )
                    }
                )
            }
        </tbody>
    </Table>
    </>
  )
}

export default Form3
