import React from 'react'
import { useState, useEffect } from 'react'
import { Form, Label, FormGroup, Input } from 'reactstrap'





const API = "http://192.168.29.31:4090/"
const Admin2 = () => {



    const [admin,setAdmin] = useState([])
    const fetchAdmins = async (url) => {
        try {
          const response = await fetch(API+"fetch_admin_role", { method: 'POST' });
          const info = await response.json();
        //    console.log(info.data);
          setAdmin(info.data);
          fetchSingleAdmin(info.data[0]._id)
        //    console.log("array",admin)
        }
        catch (e) {
          console.error(e)
        }
      }
      useEffect(() => {
        fetchAdmins(API)
      }, [])


      const [singleRole,setSingleRole]=useState("");
  const [roleID,setRoleID]=useState("");
  const [control,setControl] =useState({})

      const fetchSingleAdmin = async (role_id) => {
        let displayData = {role_id:role_id}
       //  console.log(displayData);
           try {
             const response = await fetch(API+"fetch_single_admin_role", { method: 'POST',
             headers: {
               'Content-type': 'application/json; charset=UTF-8',
               'Accept': 'application/json'
             },body: JSON.stringify(displayData),
           });
             const info = await response.json();
             //  console.log("response-----------------Single",info);
              setSingleRole(info.data[0].role_name);
              setRoleID(info.data[0]._id)
              setControl(info.data[0].access_control);
           
           }
           catch (e) {
             console.error(e)
           }
         }
  return (
    <>
    <div className="container-fluid">
        <div className="row">
            <div className="col-3">
                <table>
                    <thead>
                        <tr>
                            <th>Role Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {admin.map(
                            (item,i)=>{
                                return(
                                    <tr key={i}>
                                    <td onClick={()=>{
                                      fetchSingleAdmin(item._id)
                                      }}
                                      style={{borderLeft:roleID === item._id ? "2px solid green" :"" }}
                                      >{item.role_name}</td>
                                </tr>
                                )
                                
                            }
                        )}
                    </tbody>
                </table>
            </div>

            <div className="col-9">
              <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <p>Operation Dock:<FormGroup check inline ><Input type="checkbox" checked={control.opeartion_dock_view} /><Label check> View </Label> </FormGroup>
                                      <FormGroup check inline><Input type="checkbox" checked={control.opeartion_dock_control} /><Label check> Operate </Label></FormGroup></p>
                                      <p>Deviation Dock:<FormGroup check inline ><Input type="checkbox" checked={control.deviation_dock_view} /><Label check> View </Label> </FormGroup>
                                      <FormGroup check inline><Input type="checkbox" checked={control.deviation_dock_control} /><Label check> Operate </Label></FormGroup></p>
                    </div>
                    <div className="col-6">
                       <p>Accounting:<FormGroup check inline ><Input type="checkbox" checked={control.accounting_view} /><Label check> View </Label> </FormGroup>
                                      <FormGroup check inline><Input type="checkbox" checked={control.accounting_control} /><Label check> Operate </Label></FormGroup></p>
              
                    </div>
                </div>
              </div>

            </div>
        </div>
    </div>
    
    
    </>
  )
}

export default Admin2
