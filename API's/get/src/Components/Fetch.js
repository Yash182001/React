import React from 'react'
import { useEffect, useState } from 'react'
import {Modal, Button} from 'react-bootstrap'

const API = "http://192.168.29.31:4090/"
const Fetch = () => {
  const [users, setUsers] = useState([])
  const [designationID, setdesignationID] = useState("")

  const [designationbutton, setdesignationbutton] = useState("Add Designation")

  const fetchUsers = async (url) => {
    try {
      const response = await fetch(API+"fetch_designation", { method: 'POST' });
      const info = await response.json();
      // console.log("result",info.data);
      setUsers(info.data);
      // console.log("array",users)
    }
    catch (e) {
      console.error(e)
    }
  }
  useEffect(() => {
    fetchUsers(API)
  }, [])
  //  useEffect(()=>{
  //   fetchUsers(API)
  //  },[])

  // useEffect(()=>{
  //   fetch(API,
  // {method:'POST'})
  //   .then((result)=>{result.json()
  //     .then((response)=>{
  //       //  console.log(response.data);
  //        setUsers(response.data);
  //        console.log("array",users)

  //     })
  //   })
  // },[])
  //.......................................Add Data.............................

  const [inputData, setInputData] = useState("");
  

  const addData = () => {
    // console.log(inputData);
    let params = { designation: inputData }
    // console.log(params);
    fetch(API+"add_designation",{
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Accept': 'application/json;'
        },
        body: JSON.stringify(params),

      })
      .then((result) => {
        result.json()
        .then((response) => {
           console.log(response);
           fetchUsers();
           setdesignationbutton("Add Designation")
          // setUsers(response.data);
          setInputData('');
        })
      })
  }

  //.......................................................Update data...............................................

  const selectUser = (i)=>{
    // console.log(i);
    setInputData(i.designation);
    setdesignationbutton("Update")
    setdesignationID(i._id)
    // setUpdate(true);
  }

  const switchFunction=()=>{
    if (designationbutton === "Add Designation") {
      addData()
    }else{
      updateUser()
    }
  }

  const updateUser =() =>{
    let update = {designation:inputData,designation_id:designationID}
    // console.log(update);
    fetch(API+"update_designation",{
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Accept': 'application/json;'
      },
      body: JSON.stringify(update),

    })
    .then((result) => {
      result.json()
      .then((response) => {
         console.log(response);
         fetchUsers();
         setdesignationbutton("Add Designation")
         setInputData('');

      })
    })
  }
  //........................Delete....................................................
  // const deleteUser = (i) =>{
  //      console.log(i);
  //     let update = {designation_id:i}
  //     fetch(API + "delete_designation",{
  //       method:'POST',
  //       headers: {
  //         'Content-type': 'application/json; charset=UTF-8',
  //         'Accept': 'application/json;'
  //       },
  //       body: JSON.stringify(update),
  //     })
  //     .then((result) => {
  //       result.json()
  //       .then((response) => {
  //          console.log(response);
  //          fetchUsers();
  //       })
  //     })
  // }

const [deleteId, setDeleteId]=useState("")
const [deleteDesignation,setDeleteDesignation]=useState("")
  const deleteUser = (id,designation)=>{
    //  console.log(id,designation);
     setShow(true);
     setDeleteId(id);
     setDeleteDesignation(designation);
  }

  const handleDelete = ()=>{
    let update = {designation_id:deleteId}
    // console.log(update);
    fetch(API + "delete_designation",{
             method:'POST',
             headers: {
               'Content-type': 'application/json; charset=UTF-8',
               'Accept': 'application/json;'
             },
             body: JSON.stringify(update),
           })
           .then((result) => {
            result.json()
            .then((response) => {
               console.log(response);
                fetchUsers();
             })
           })
           setShow(false);
  }
  //..................................................................................................................
  const [show, setShow] = useState(false);

  const handleClose = ()=>{
    setShow(false);
  }
 
  return (
    <>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm your Action</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete {deleteDesignation} Designation?</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={()=>{handleDelete()}} >
            Delete
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>


{/* ............................................................................................................................... */}
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-4">
            <h2 className='text '>Designation</h2>
          </div>
          <div className="col-8">
          <label>Add designation:</label><br/>
            <input type='text'  placeholder='Click to add Designation' value={inputData} onChange={(e) => { setInputData(e.target.value) }} />

            <button className="btn btn-primary ms-3 btn-sm" onClick={() => { switchFunction() }}>{designationbutton}</button>
          </div>
        </div>


      </div>





      <table className='table table-striped table-dark table-hover table-borderless mt-5'>
        <thead>
          <tr>
            {/* <th>Id</th> */}
            <th>Designation</th>
            {/* <th>Added Data</th> */}
            <th>Action</th>

          </tr>
        </thead>
        <tbody>
          {users.map(
            (item, i) => {
              // console.log("item",item);
              return (
                <tr key={i}>
                  {/* <td>{item._id}</td> */}
                  <td>{item.designation}</td>
                  {/* <td>{item.added_date}</td> */}
                  <td><button className="btn btn-primary" onClick={()=>{selectUser(item)}} >Update</button>
                    <button className="btn btn-danger ms-3" onClick={()=>{deleteUser(item._id,item.designation)}}>Delete</button>
                    
                    </td>
                    
                </tr>
              )
            }
          )}
        </tbody>
      </table>

                                  


    </>
  )
}

export default Fetch
