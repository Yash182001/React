import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import {Button, FormGroup, Input,Label} from 'reactstrap'
import './App.css'

   const App = () => {

   const [searchName,setSearchName]=useState("");

   const [dateRange, setDateRange] = useState([null, null]);
   const [startDate, endDate] = dateRange;
   const dateValue = dateRange;
  //  range: dateRange.map(date => formatDate(date))

   function formatDate(dateString) {
      const date = new Date(dateString);
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear().toString();
      return `${year}/${month}/${day} `;
   }
   const range = dateValue.map(dateString => formatDate(dateString));
  

       const [gender, setGender] = useState("");
       const genderSelect = [
        { value: "Male", label: "Male" },
        { value: "Female", label: "Female" },
        { value: "Others", label: "Others" },
     ];

     const [searchData,setSearchData]=useState([]);

     const handleonSearch = ()=>{

      if(searchName === "" || searchName === undefined || gender === "" || gender === undefined ||
           dateRange === "" || dateRange === undefined)
           {
              console.log("searchName:", searchName === undefined ? undefined : searchName);
              console.log("Gender:", gender === undefined ? undefined : gender);
              console.log("Range:", dateRange === undefined ? undefined : range);

      // console.log(searchData)

     }
      else{
        var array = searchData;
        var obj={
          searchName:searchName,
          gender:gender,
          range:range,
        }

        array.push(obj);
        setSearchData(array);
        console.log("Searched Data------",searchData);

      }

      setSearchName("");
      setDateRange([null,null]);
      setGender("");
    }

    const handleNameSearch = (e)=>{
      if(searchName === "" || searchName === undefined){
        console.log("searchName:", searchName === undefined ? undefined : searchName)
      }
      else{
           const searchResult = searchData.filter(item=>item.searchName.toLowerCase().includes(e.target.value.toLowerCase()))
           console.log(searchResult);
           
      }
      setSearchName(e.target.value)
  }

  const handleGenderSearch = (e)=>{
    if(gender === "" || gender === undefined){
      console.log("gender:", gender === undefined ? undefined : gender)
    }
    else{
        const searchResult = searchData.filter(item=>item.gender.includes(e))
        console.log(searchResult);
    }
    setGender(e);
}

   return (
    <>

   <div className="container-fluid search">
   <div className="row">
    <div className="col-3">
      <FormGroup>
        <Label for="Name">Name</Label>
        <Input id="Name" name="Name" placeholder='Name' value={searchName} onChange={(e)=>{handleNameSearch(e)}} />
      </FormGroup>
    </div>

    <div className="col-3">
      <Label for="Gender">Gender</Label>
      <Select value={gender} options={genderSelect} placeholder="Gender" onChange={(e) => {
        // console.log("gender-----------",e.label);
        handleGenderSearch(e)
      }} />
    </div>

    <div className="col-3">
      <FormGroup>
        <Label for="days">Days</Label>
        <DatePicker dateFormat="yyyy/MM/dd"
           selectsRange={true} startDate={startDate} endDate={endDate} onChange={(e) => {
          // console.log(e);
          setDateRange(e);
        }} />
      </FormGroup>
    </div>

    <div className="col-3">
      <Button color='primary' className='button' onClick={()=>{handleonSearch()}}>Search</Button>
    </div>
   </div>
   </div>

    
    </>
  )
}

export default App
