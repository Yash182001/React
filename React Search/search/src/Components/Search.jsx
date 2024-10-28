import React, { useEffect, useState } from 'react'
import {Input, Table} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Search.css'


const Search = () => {
const [data, setData] = useState([]);
const [searchValue, setSearchValue] = useState("");
const [searchData,setSearchData]=useState([])
    useEffect(()=>{

        const fetchData=()=>{
            fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json =>{
        setData(json);
        setSearchData(json);
      })

        }
       fetchData();
    },[])

    
    const handleOnSearch = (e)=>{
   if(searchValue === ""){
    setData(searchData)
   }else{
    const searchResult = searchData.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))
    setData(searchResult);
   }
   setSearchValue(e.target.value);
    }
   
  return (
    <>
<h4>Search Filter With Dynamic Data</h4>
    <div className='search'>
        
      <Input type='text' placeholder='Search here' className='searchbox' value={searchValue} onChange={(e)=>{handleOnSearch(e)}}/>
    </div>

    <div>
        <Table dark striped hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>Zip Code</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map(
                        (item,i)=>{
                        return(
                            <tr key={i}>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.address.zipcode}</td>
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

export default Search
