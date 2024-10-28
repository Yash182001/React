import React, {useState } from 'react'
import { Table,FormGroup,Label, Input} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {data} from './Data'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import './Search.css'


const Searchd = () => {
    // console.log(data);

    const [Data,setData] = useState([])
         
    const [searchName, setSearchName] = useState("");
    const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
//   console.log(dateRange);

  const [gender, setGender] = useState("");
    const genderSelect = [
        { value: "Male", label: "Male" },
        { value: "Female", label: "Female" },
        { value: "Others", label: "Others" },
    ];


// const [searchResult,setSearchResult] = useState("")


const handleGenderSearch = (e)=>{
    {
        const searchResult = data.filter(item=>item.gender.includes(e.label))
        setData(searchResult);
    }
    setGender(e);
}

const [dateresult,setDateResult] = useState([])
const handleDateSearch = (e)=>{
    
    const searchResultt = data.filter(item => {
        const itemDate = new Date(item.Date);
        return (!startDate || itemDate >= startDate) && (!endDate || itemDate <= endDate);
        
    });
    setDateResult(searchResultt)
    // {
    //     dateresult.map((value)=>{
    //        <tr>
    //         <td>{value.Date}</td>
    //        </tr>
    //     })
    // }

    setDateRange(e);
}

const handleSearch=(search,genderData)=>{
    if (search != "" && search != undefined) {
        const searchResult = data.filter(item=>item.first_name.toLowerCase().includes(search.toLowerCase()))
        setData(searchResult);
        setSearchName(search)       
    }
    if (genderData != "" && genderData != undefined) {
        const searchResult = data.filter(item=>item.gender.includes(genderData.label))
        setData(searchResult);
        setGender(genderData);
    }


}

   
  return (
    <>
    
    <div className='container searchd'>
        <div className="row">

             <div className="col-4">
                      <FormGroup>
                          <Label for="Name">First Name</Label>
                          <Input id="Name" name="Name" placeholder='Name' value={searchName} 
                          onChange={(e) => {handleSearch(e.target.value,gender)}} />
                      </FormGroup>
             </div>
              <div className="col-4">
                      <FormGroup>
                          <Label for="days">Days</Label>
                          <DatePicker dateFormat="yyyy/MM/dd"
                              selectsRange={true} startDate={startDate} endDate={endDate} onChange={(e) => {
                                  // console.log(e);
                                //   setDateRange(e)
                                  handleDateSearch(e);
                              }} />
                         </FormGroup>
               </div>

                 <div className="col-4">
                      <Label for="Gender">Gender</Label>
                      <Select value={gender} options={genderSelect} placeholder="Gender"
                       onChange={(e) => {
                          handleSearch(searchName,e);
                      }} />
            </div>

        </div>
   

      
      
    </div>

   <div>
   <Table dark striped hover>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {
                   Data.map((item)=>{
                        return(
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.gender}</td>
                                <td>{item.Date}</td>
                                
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
   </div>
    
    </>
  )
}

export default Searchd
