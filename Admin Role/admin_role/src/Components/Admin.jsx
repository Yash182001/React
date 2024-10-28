import React from 'react'
import './Admin.css'
import { useState, useEffect } from 'react'
import { Modal,Button,Form,Spinner } from 'react-bootstrap'

const API = "http://192.168.29.31:4090/"

var height = window.innerHeight -100;

// console.log("height------------",height);
const Admin = () => {
    
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

// .................................................................................................................

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
   
const [show,setShow] = useState(false)
const handleClose = () => {setShow(false); setError(false); setUpdate(false)}
  const handleShow = () => setShow(true);
 const [roleName,setRoleName] = useState("")

const [checkbox,setCheckBox] = useState({
  operation_page:false,
  opeartion_dock_view:false,
  opeartion_dock_control:false,
  deviation_dock_view:false,
  deviation_dock_control:false,
  admin_management_view:false,
  admin_management_control:false,
  payments_page:false,
  payments_view:false,
  payments_control:false,
  time_tracker_page:false,
  time_tracker_view:false,
  time_tracker_control:false,
  employee_page:false,
  recuritement_view:false,
  recuritement_control:false,
  user_management_view:false,
  user_management_control:false,
  payroll_page:false,
  dashboard_payroll_view:false,
  dashboard_payroll_control:false,
  attendance_view:false,
  attendance_control:false,
  leave_request_view:false,
  leave_request_control:false,
  loans_view:false,
  loans_control:false,
  allowance_view:false,
  allowance_control:false,
  genral_report_view:false,
  genral_report_control:false,
  accounting_page:false,
  accounting_view:false,
  accounting_control:false,
  cheque_report_view:false,
  cheque_report_control:false,
  customer_cheque_view:false,
  customer_cheque_control:false,
  reports_page:false,
  reporting_view:false,
  reporting_control:false,
  master_page:false,
  master_view:false,
  master_control:false,
  telecaller_app_page:false,
  dashboard_app_view:false,
  dashboard_app_control:false,
  campaign_view:false,
  campaign_control:false,
  contacts_view:false,
  contacts_control:false,
  reference_user_view:false,
  reference_user_control:false


})

const handleCheckboxChange = (event) => {
  const { name, checked } = event.target;
  setCheckBox({...checkbox,[name]: checked
  });
};
  
const [error, setError] = useState(false);
const handleOnSubmit = (event)=>{
  event.preventDefault();
  if(roleName.trim()===''){
    alert("Enter Role Name")
    setError(true);
}
else{
  setLoading(true);
  setTimeout(() => {
    setLoading(false);
}, 2000);
// console.log(roleName,checkbox);
setCheckBox({operation_page:false,
  opeartion_dock_view:false,
  opeartion_dock_control:false,
  deviation_dock_view:false,
  deviation_dock_control:false,
  admin_management_view:false,
  admin_management_control:false,
  payments_page:false,
  payments_view:false,
  payments_control:false,
  time_tracker_page:false,
  time_tracker_view:false,
  time_tracker_control:false,
  employee_page:false,
  recuritement_view:false,
  recuritement_control:false,
  user_management_view:false,
  user_management_control:false,
  payroll_page:false,
  dashboard_payroll_view:false,
  dashboard_payroll_control:false,
  attendance_view:false,
  attendance_control:false,
  leave_request_view:false,
  leave_request_control:false,
  loans_view:false,
  loans_control:false,
  allowance_view:false,
  allowance_control:false,
  genral_report_view:false,
  genral_report_control:false,
  accounting_page:false,
  accounting_view:false,
  accounting_control:false,
  cheque_report_view:false,
  cheque_report_control:false,
  customer_cheque_view:false,
  customer_cheque_control:false,
  reports_page:false,
  reporting_view:false,
  reporting_control:false,
  master_page:false,
  master_view:false,
  master_control:false,
  telecaller_app_page:false,
  dashboard_app_view:false,
  dashboard_app_control:false,
  campaign_view:false,
  campaign_control:false,
  contacts_view:false,
  contacts_control:false,
  reference_user_view:false,
  reference_user_control:false});
  setRoleName("")
  setError(false)
}
 
}

const[update, setUpdate] = useState(false);
const selectRole = ()=>{
  //  console.log(singleRole,"edit");
  setShow(true);
  setRoleName(singleRole);
  setCheckBox({
    operation_page:control.operation_page,
    opeartion_dock_view:control.opeartion_dock_view ,
    opeartion_dock_control:control.opeartion_dock_control ,
    deviation_dock_view:control.deviation_dock_view ,
    deviation_dock_control:control.deviation_dock_control ,
    MIS_dock_view:control.admin_management_view ,
    MIS_dock_control:control.admin_management_control ,
    admin_management_control:false,
    payments_page:control.payments_page ,
    payments_view:control.payments_view ,
    payments_control:control.payment_control ,
    time_tracker_page:control.time_tracker_page ,
    time_tracker_view:control.time_tracker_view ,
    time_tracker_control:control.time_tracker_control ,
    employee_page:control.employee_page ,
    recuritement_view:control.recuritement_view ,
    recuritement_control:control.recuritement_view ,
    user_management_view:control.user_management_view ,
    user_management_control:control.user_management_control ,
    payroll_page:control.payroll_page ,
    dashboard_payroll_view:control.dashboard_payroll_view ,
    dashboard_payroll_control:control.dashboard_payroll_control ,
    attendance_view:control.attendance_view ,
    attendance_control:control.attendance_control ,
    leave_request_view:control.leave_request_view ,
    leave_request_control:control.leave_request_control ,
    loans_view:control.loans_view ,
    loans_control:control.loans_control ,
    allowance_view:control.allowance_view ,
    allowance_control:control.allowance_control ,
    genral_report_view:control.genral_report_view ,
    genral_report_control:control.genral_report_control ,
    accounting_page:control.accounting_page ,
    accounting_view:control.accounting_view ,
    accounting_control:control.accounting_control ,
    cheque_report_view:control.cheque_report_view ,
    cheque_report_control:control.cheque_report_control ,
    customer_cheque_view:control.customer_cheque_view ,
    customer_cheque_control:control.customer_cheque_control ,
    reports_page:control.reports_page ,
    reporting_view:control.reporting_view ,
    reporting_control:control.reporting_control ,
    master_page:control.master_page ,
    master_view:control.master_view ,
    master_control:control.master_control ,
    telecaller_app_page:control.telecaller_app_page ,
    dashboard_app_view:control.dashboard_app_view ,
    dashboard_app_control:control.dashboard_app_control ,
    campaign_view:control.campaign_view ,
    campaign_control:control.campaign_control ,
    contacts_view:control.contacts_view ,
    contacts_control:control.contacts_control ,
    reference_user_view:control.recuritement_view ,
    reference_user_control:control.reference_user_control
  })
  setUpdate(true)
}
const [loading, setLoading] = useState(false)
const updateRole = (event)=>{
  event.preventDefault();
  if(roleName.trim()===''){
    alert("Enter Role Name")
    setError(true);
}else{
  console.log(roleName,checkbox);
  setCheckBox({operation_page:false,
    opeartion_dock_view:false,
    opeartion_dock_control:false,
    deviation_dock_view:false,
    deviation_dock_control:false,
    admin_management_view:false,
    admin_management_control:false,
    payments_page:false,
    payments_view:false,
    payments_control:false,
    time_tracker_page:false,
    time_tracker_view:false,
    time_tracker_control:false,
    employee_page:false,
    recuritement_view:false,
    recuritement_control:false,
    user_management_view:false,
    user_management_control:false,
    payroll_page:false,
    dashboard_payroll_view:false,
    dashboard_payroll_control:false,
    attendance_view:false,
    attendance_control:false,
    leave_request_view:false,
    leave_request_control:false,
    loans_view:false,
    loans_control:false,
    allowance_view:false,
    allowance_control:false,
    genral_report_view:false,
    genral_report_control:false,
    accounting_page:false,
    accounting_view:false,
    accounting_control:false,
    cheque_report_view:false,
    cheque_report_control:false,
    customer_cheque_view:false,
    customer_cheque_control:false,
    reports_page:false,
    reporting_view:false,
    reporting_control:false,
    master_page:false,
    master_view:false,
    master_control:false,
    telecaller_app_page:false,
    dashboard_app_view:false,
    dashboard_app_control:false,
    campaign_view:false,
    campaign_control:false,
    contacts_view:false,
    contacts_control:false,
    reference_user_view:false,
    reference_user_control:false});
    setRoleName("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShow(false);
  }, 2000);
  setUpdate(false)
  
}
}



  return (
    <>
 <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton>
          <Modal.Title>{update?"Update Admin Role":"Add Admin Role"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Label className='ms-4 required'>Role Name</Form.Label>
          {error ? <span className='text-danger me-5'>Please Enter Role Name</span>:''}
        <Form.Control type="text" className='role' placeholder="Role Name"  value={roleName} onChange={(e)=>{setRoleName(e.target.value)}} />
          </Form>
         <h6 className='mt-3 mb-2 ms-4 fw-lighter'>Access Control</h6>
         <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-6">
                    <p className='fw-bold'>Operations</p>
                    <span>Operation Dock</span><br/>
                    <span>Deviation Dock</span><br/>
                    <span>MIS Dock</span><br/>

                    <p className='mt-5 fw-bold'>Payments</p>
                    <span>Payments</span>

                    <p className='mt-5 fw-bold'>Time Tracker</p>
                    <span>Time Tracker</span>

                    <p className='mt-5 fw-bold'>HRM</p>
                    <span>Recruitment</span><br/>
                    <span>Emp Management</span><br/>
                    <span>Agencies/Telesales</span><br/>

                    <p className='mt-5 fw-bold'>Payroll</p>
                    <span>Dashboard</span><br/>
                    <span>Salaries</span><br/>
                    <span>Attendance</span><br/>
                    <span>Requested Leaves</span><br/>
                    <span>Loans</span><br/>
                    <span>Allowance</span><br/>
                    <span>General Report</span>

                  </div>

                  <div className="col-6">
                  <p>:
                    <input className="form-check-input ms-2 checkbox-lg" type="checkbox" name='operation_page' checked={checkbox.operation_page} onChange={handleCheckboxChange}/><br/></p>
                  <span>:</span><input  className="form-check-input ms-2" type="checkbox" name='opeartion_dock_view' disabled={checkbox.operation_page === true ? false : true}  onChange={handleCheckboxChange} checked= {checkbox.opeartion_dock_view} /><span>View</span>
                  <input  className="form-check-input ms-2 " type="checkbox"  name='opeartion_dock_control' disabled={checkbox.operation_page === true ? false : true}  onChange={handleCheckboxChange} checked={checkbox.opeartion_dock_control}/><span>Operate</span><br/>
                  <span>:</span><input  className="form-check-input ms-2 " type="checkbox" name='deviation_dock_view' disabled={checkbox.operation_page === true ? false : true}  onChange={handleCheckboxChange} checked={checkbox.deviation_dock_view}/><span>View</span>
                  <input  className="form-check-input ms-2 " type="checkbox" name='deviation_dock_control' disabled={checkbox.operation_page === true ? false : true}   onChange={handleCheckboxChange} checked={checkbox.deviation_dock_control}/><span>Operate</span><br/>
                  <span>:</span><input  className="form-check-input ms-2 " type="checkbox" name='admin_management_view' disabled={checkbox.operation_page === true ? false : true}   onChange={handleCheckboxChange} checked={checkbox.admin_management_view} /><span>View</span>
                  <input  className="form-check-input ms-2 " type="checkbox" name='admin_management_control' disabled={checkbox.operation_page === true ? false : true}   onChange={handleCheckboxChange} checked={checkbox.admin_management_control}  /><span>Operate</span><br/>

                  <p className='mt-5'>:<input  className="form-check-input ms-2 checkbox-lg" type="checkbox" name='payments_page' onChange={handleCheckboxChange} checked={checkbox.payments_page}/><br/></p>
                  <span>:</span><input  className="form-check-input ms-2 " type="checkbox"  name='payments_view' disabled={checkbox.payments_page === true ? false : true} onChange={handleCheckboxChange} checked={checkbox.payments_view}/><span>View</span>
                  <input  className="form-check-input ms-2 " type="checkbox"  name='payments_control' disabled={checkbox.payments_page === true ? false : true} onChange={handleCheckboxChange} checked={checkbox.payments_control}/><span>Operate</span><br/>

                  <p className='mt-5'>:<input  className="form-check-input ms-2 checkbox-lg" name='time_tracker_page' type="checkbox" onChange={handleCheckboxChange} checked={checkbox.time_tracker_page}/><br/></p>
                  <span>:</span><input  className="form-check-input ms-2 " type="checkbox" name='time_tracker_view' disabled={checkbox.time_tracker_page === true ? false : true}  onChange={handleCheckboxChange} checked={checkbox.time_tracker_view}/><span>View</span>
                  <input  className="form-check-input ms-2 " type="checkbox"  name='time_tracker_control' disabled={checkbox.time_tracker_page === true ? false : true}  onChange={handleCheckboxChange} checked={checkbox.time_tracker_control}/><span>Operate</span><br/>

                  <p className='mt-5'>:<input  className="form-check-input ms-2 checkbox-lg" type="checkbox" name='employee_page' onChange={handleCheckboxChange} checked={checkbox.employee_page}/><br/></p>
                  <span>:</span><input  className="form-check-input ms-2 " type="checkbox" disabled={checkbox.employee_page === true ? false : true}  name='recuritement_view' onChange={handleCheckboxChange} checked={checkbox.recuritement_view}/><span>View</span>
                  <input  className="form-check-input ms-2 " type="checkbox"  name='recuritement_control'disabled={checkbox.employee_page === true ? false : true}  onChange={handleCheckboxChange} checked={checkbox.recuritement_control}/><span>Operate</span><br/>
                  <span>:</span><input  className="form-check-input ms-2 " type="checkbox"  name='user_management_view'disabled={checkbox.employee_page === true ? false : true}  onChange={handleCheckboxChange} checked={checkbox.user_management_view}/><span>View</span>
                  <input  className="form-check-input ms-2 " type="checkbox"  name='user_management_control'disabled={checkbox.employee_page === true ? false : true}  onChange={handleCheckboxChange} checked={checkbox.user_management_control}/><span>Operate</span><br/>
                  <span>:</span><input  className="form-check-input ms-2 " type="checkbox"disabled={checkbox.employee_page === true ? false : true}  /><span>View</span>
                  <input  className="form-check-input ms-2 " type="checkbox"disabled={checkbox.employee_page === true ? false : true}  /><span>Operate</span><br/>

                  <p className='mt-5'>:<input  className="form-check-input ms-2 checkbox-lg" type="checkbox"name='payroll_page' onChange={handleCheckboxChange} checked={checkbox.payroll_page}/><br/></p>
                  <span>:</span><input  className="form-check-input ms-2 " type="checkbox"disabled={checkbox.payroll_page === true ? false : true}   name='dashboard_payroll_view' onChange={handleCheckboxChange} checked={checkbox.dashboard_payroll_view}/><span>View</span>
                  <input  className="form-check-input ms-2 " type="checkbox" disabled={checkbox.payroll_page === true ? false : true} name='dashboard_payroll_control' onChange={handleCheckboxChange} checked={checkbox.dashboard_payroll_control}/><span>Operate</span><br/>
                  <span>:</span><input  className="form-check-input ms-2 "disabled={checkbox.payroll_page === true ? false : true} type="checkbox" /><span>View</span>
                  <input  className="form-check-input ms-2 " type="checkbox"disabled={checkbox.payroll_page === true ? false : true} /><span>Operate</span><br/>
                  <span>:</span><input  className="form-check-input ms-2 " type="checkbox"disabled={checkbox.payroll_page === true ? false : true}  name='attendance_view' onChange={handleCheckboxChange} checked={checkbox.attendance_view}/><span>View</span>
                  <input  className="form-check-input ms-2 " type="checkbox"disabled={checkbox.payroll_page === true ? false : true}  name='attendance_control' onChange={handleCheckboxChange} checked={checkbox.attendance_control}/><span>Operate</span><br/>
                  <span>:</span><input  className="form-check-input ms-2 " type="checkbox" disabled={checkbox.payroll_page === true ? false : true} name='leave_request_view}' onChange={handleCheckboxChange} checked={checkbox.leave_request_view}/><span>View</span>
                  <input  className="form-check-input ms-2 " type="checkbox"  name='leave_request_control'disabled={checkbox.payroll_page === true ? false : true} onChange={handleCheckboxChange} checked={checkbox.leave_request_control}/><span>Operate</span><br/>
                  <span>:</span><input  className="form-check-input ms-2 " type="checkbox"  name='loans_view'disabled={checkbox.payroll_page === true ? false : true} onChange={handleCheckboxChange} checked={checkbox.loans_view}/><span>View</span>
                  <input  className="form-check-input ms-2 " type="checkbox"  name='loans_control'disabled={checkbox.payroll_page === true ? false : true} onChange={handleCheckboxChange} checked={checkbox.loans_control}/><span>Operate</span><br/>
                  <span>:</span><input  className="form-check-input ms-2 " type="checkbox"  name='allowance_view'disabled={checkbox.payroll_page === true ? false : true} onChange={handleCheckboxChange} checked={checkbox.allowance_view}/><span>View</span>
                  <input  className="form-check-input ms-2 " type="checkbox"  name='allowance_control'disabled={checkbox.payroll_page === true ? false : true} onChange={handleCheckboxChange} checked={checkbox.allowance_control}/><span>Operate</span><br/>
                  <span>:</span><input  className="form-check-input ms-2 " type="checkbox"  name='genral_report_view'disabled={checkbox.payroll_page === true ? false : true} onChange={handleCheckboxChange} checked={checkbox.genral_report_view}/><span>View</span>
                  <input  className="form-check-input ms-2 " type="checkbox"  name='genral_report_control'disabled={checkbox.payroll_page === true ? false : true} onChange={handleCheckboxChange} checked={checkbox.genral_report_control}/><span>Operate</span><br/>
                  

                  </div>
                </div>
              </div>
            </div>

            <div className="col-6">
             <div className="container-fluid">
              <div className="row">
                <div className="col-6">
                    <p className='fw-bold'>Accounts</p>
                    <span>Accounting</span><br/>
                    <span>Cheque Reporting</span><br/>
                    <span>Customer Cheque</span><br/>

                    <p className='mt-5 fw-bold'>Reports</p>
                    <span>Reports</span>

                    <p className='mt-5 fw-bold'>Masters</p>
                    <span>Masters</span>

                    <p className='mt-5 fw-bold'>Telecalling</p>
                    <span>Dashboard</span><br/>
                    <span>Campaign</span><br/>
                    <span>Contacts</span><br/>
                    <span>Reference Users</span>
                </div>

                <div className="col-6">
                <p>:<input  className="form-check-input ms-2 checkbox-lg" type="checkbox"  name='accounting_page' onChange={handleCheckboxChange} checked={checkbox.accounting_page}/><br/></p>
                  <span>:</span><input  className="form-check-input ms-2 " type="checkbox"disabled={checkbox.accounting_page === true ? false : true}  name='accounting_view' onChange={handleCheckboxChange} checked={checkbox.accounting_view} /><span>View</span>
                  <input  className="form-check-input ms-2 " type="checkbox"disabled={checkbox.accounting_page === true ? false : true}  name='accounting_control' onChange={handleCheckboxChange} checked={checkbox.accounting_control}/><span>Operate</span><br/>
                  <span>:</span><input  className="form-check-input ms-2 "disabled={checkbox.accounting_page === true ? false : true} type="checkbox"  name='cheque_report_view' onChange={handleCheckboxChange} checked={checkbox.cheque_report_view}/><span>View</span>
                  <input  className="form-check-input ms-2 " type="checkbox" disabled={checkbox.accounting_page === true ? false : true} name='cheque_report_control' onChange={handleCheckboxChange} checked={checkbox.cheque_report_control}/><span>Operate</span><br/>
                  <span>:</span><input  className="form-check-input ms-2 "disabled={checkbox.accounting_page === true ? false : true} type="checkbox"  name='customer_cheque_view' onChange={handleCheckboxChange} checked={checkbox.customer_cheque_view}/><span>View</span>
                  <input  className="form-check-input ms-2 " type="checkbox" disabled={checkbox.accounting_page === true ? false : true} name='customer_cheque_control' onChange={handleCheckboxChange} checked={checkbox.customer_cheque_control}/><span>Operate</span><br/>

                  <p className='mt-5'>:<input  className="form-check-input ms-2 checkbox-lg" type="checkbox"  name='reports_page' onChange={handleCheckboxChange} checked={checkbox.reports_page}/><br/></p>
                  <span>:</span><input  className="form-check-input ms-2" disabled={checkbox.reports_page === true ? false : true} type="checkbox" name='reporting_view' onChange={handleCheckboxChange} checked={checkbox.reporting_view}/><span>View</span>
                  <input  className="form-check-input ms-2 " type="checkbox" name='reporting_control'disabled={checkbox.reports_page === true ? false : true} onChange={handleCheckboxChange} checked={checkbox.reporting_control}/><span>Operate</span><br/>

                  <p className='mt-5'>:<input  className="form-check-input ms-2 checkbox-lg" type="checkbox"  name='master_page' onChange={handleCheckboxChange} checked={checkbox.master_page}/><br/></p>
                  <span>:</span><input  className="form-check-input ms-2 " type="checkbox" disabled={checkbox.master_page === true ? false : true} name='master_view' onChange={handleCheckboxChange} checked={checkbox.master_view}/><span>View</span>
                  <input  className="form-check-input ms-2 " type="checkbox" disabled={checkbox.master_page === true ? false : true}  name='master_control' onChange={handleCheckboxChange} checked={checkbox.master_control}/><span>Operate</span><br/>

                  <p className='mt-5'>:<input  className="form-check-input ms-2 checkbox-lg" type="checkbox"  name='telecaller_app_page' onChange={handleCheckboxChange} checked={checkbox.telecaller_app_page}/><br/></p>
                  <span>:</span><input  className="form-check-input ms-2 " type="checkbox" disabled={checkbox.telecaller_app_page === true ? false : true} name='dashboard_app_view' onChange={handleCheckboxChange} checked={checkbox.dashboard_app_view} /><span>View</span>
                  <input  className="form-check-input ms-2 " type="checkbox"  name='dashboard_app_control'disabled={checkbox.telecaller_app_page === true ? false : true} onChange={handleCheckboxChange} checked={checkbox.dashboard_app_control}/><span>Operate</span><br/>
                  <span>:</span><input  className="form-check-input ms-2 " type="checkbox"  name='campaign_view'disabled={checkbox.telecaller_app_page === true ? false : true} onChange={handleCheckboxChange} checked={checkbox.campaign_view}/><span>View</span>
                  <input  className="form-check-input ms-2 " type="checkbox"  name='campaign_control'disabled={checkbox.telecaller_app_page === true ? false : true} onChange={handleCheckboxChange} checked={checkbox.campaign_control}/><span>Operate</span><br/>
                  <span>:</span><input  className="form-check-input ms-2 " type="checkbox"  name='contacts_view'disabled={checkbox.telecaller_app_page === true ? false : true} onChange={handleCheckboxChange} checked={checkbox.contacts_view}/><span>View</span>
                  <input  className="form-check-input ms-2 " type="checkbox"  name='contacts_control'disabled={checkbox.telecaller_app_page === true ? false : true} onChange={handleCheckboxChange} checked={checkbox.contacts_control}/><span>Operate</span><br/>
                  <span>:</span><input  className="form-check-input ms-2 " type="checkbox" disabled={checkbox.telecaller_app_page === true ? false : true} name='reference_user_view' onChange={handleCheckboxChange} checked={checkbox.reference_user_view}/><span>View</span>
                  <input  className="form-check-input ms-2 " type="checkbox"  name='reference_user_control'disabled={checkbox.telecaller_app_page === true ? false : true} onChange={handleCheckboxChange} checked={checkbox.reference_user_control}/><span>Operate</span><br/>
                </div>
              </div>
             </div>
            </div>
          </div>
         </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          {update?<Button variant="primary" onClick={updateRole} disabled={loading} >{loading?"Updating":"Update"}{loading ? <span><Spinner animation="border" variant="danger" size='sm' /></span>:""}</Button>
          :<Button variant="primary" onClick={handleOnSubmit} disabled={loading} >{loading?"Saving":"Save"}{loading ? <span><Spinner animation="border" variant="danger" size='sm' /></span>:""}</Button>}
          
        </Modal.Footer>
      </Modal>
{/* ......................................................................................................................................... */}
    
    <div className="container-fluid top">
        <div className="row">
            <div className="col-lg-11 col-md-11 mt-3">
                <h3 className='ms-3'>Admin Role</h3>
            </div>

            <div className="col-lg-1 col-md-1 mt-3">
                <Button type='button' className='btn btn-success pb-2' onClick={handleShow}>Add Role</Button>
            </div>
        </div>
    </div>

    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-3 col-md-3 roleName" style={{height:height,overflowY:"scroll"}}>
                 <table className='table table-striped'>
                    <thead>
                    <tr>
                   <th>Role Name</th>
                   </tr>
                   </thead>
                   <tbody>
                    {admin.map(
                        (item,i)=> {
                            return(
                                <tr key={i}>
                                    <td onClick={()=>{
                                      fetchSingleAdmin(item._id)
                                      }}
                                      style={{borderLeft:roleID === item._id ? "2px solid green" :"" }}
                                      >{item.role_name}</td>
                                    </tr>
                            ) 
                        })}
                   </tbody>
                 </table>
            </div>

            <div className="col-9" style={{height:height,overflowY:"scroll"}}>
              <div className='row'>
                <div className='col-8'>
                <h5 className=' ms-4 mt-3'>{singleRole}</h5>
                </div>
              <div className="col-lg-4 col-md-2">
                <button type='button' className='btn btn-success mt-3 pb-2 update' onClick={selectRole}>Update</button>
                <button type='button' className='btn btn-danger ms-3 mt-3 pb-2'>Delete</button>
                </div> 
              </div>
               

                <h5 className='mt-2 mb-4 ms-4'>Access Control</h5>


                <div className="container-fluid">
                  <div className="row">
                    <div className="col-6">
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-6">
                               <p className='fw-bold'>Operations</p>
                               <span>Operation Dock</span><br/>
                               <span>Deviation Dock</span><br/>
                               <span>MIS Dock</span><br/>

                               <p className='mt-5 fw-bold'>Payments</p>
                               <span>Payments</span>

                               <p className='mt-5 fw-bold'>Time Tracker</p>
                               <span>Time Tracker</span>

                               <p className='mt-5 fw-bold'>HRM</p>
                               <span>Recruitment</span><br/>
                               <span>Emp Management</span><br/>
                               <span>Agencies/Telesales</span><br/>

                               <p className='mt-5 fw-bold'>Payroll</p>
                               <span>Dashboard</span><br/>
                               <span>Salaries</span><br/>
                               <span>Attendance</span><br/>
                               <span>Requested Leaves</span><br/>
                               <span>Loans</span><br/>
                               <span>Allowance</span><br/>
                               <span>General Report</span>

                          </div>
                          <div className="col-6">
                              <p>:<input  className="form-check-input ms-2 checkbox-lg " type="checkbox"  checked={control.operation_page}/><br/></p>
                              <span>:</span><input  className="form-check-input ms-2 me-2" type="checkbox" checked={control.opeartion_dock_view}/><span>View</span>
                              <input  className="form-check-input ms-2 me-2" type="checkbox" checked={control.opeartion_dock_control}/><span>Operate</span><br/>
                              <span>:</span><input  className="form-check-input ms-2 me-2" type="checkbox" checked={control.deviation_dock_view}/><span>View</span>
                              <input  className="form-check-input ms-2 me-2" type="checkbox" checked={control.deviation_dock_control}/><span>Operate</span><br/>
                              <span>:</span><input  className="form-check-input ms-2 me-2" type="checkbox" checked={control.admin_management_view}/><span>View</span>
                              <input  className="form-check-input ms-2 me-2" type="checkbox" checked={control.admin_management_control}/><span>Operate</span><br/>

                               <p className='mt-5'>:<input  className="form-check-input ms-2 checkbox-lg" type="checkbox"  checked={control.payments_page}/><br/></p>
                               <span>:</span><input  className="form-check-input ms-2 me-2" type="checkbox"  checked={control.payments_view}/><span>View</span>
                               <input  className="form-check-input ms-2 me-2" type="checkbox"/><span>Operate</span><br/>

                               <p className='mt-5'>:<input  className="form-check-input ms-2 checkbox-lg" type="checkbox"  checked={control.time_tracker_page }/><br/></p>
                               <span>:</span><input  className="form-check-input ms-2 me-2" type="checkbox"  checked={control.time_tracker_view }/><span>View</span>
                               <input  className="form-check-input ms-2 me-2" type="checkbox"  checked={control.time_tracker_control }/><span>Operate</span><br/>

                               <p className='mt-5'>:<input  className="form-check-input ms-2 checkbox-lg" type="checkbox"  checked={control.employee_page}/><br/></p>
                               <span>:</span><input  className="form-check-input ms-2 me-2" type="checkbox"  checked={control.recuritement_view }/><span>View</span>
                               <input  className="form-check-input ms-2 me-2" type="checkbox"  checked={control.recuritement_control }/><span>Operate</span><br/>
                               <span>:</span><input  className="form-check-input ms-2 me-2" type="checkbox"  checked={control.user_management_view }/><span>View</span>
                               <input  className="form-check-input ms-2 me-2" type="checkbox"  checked={control.user_management_control }/><span>Operate</span><br/>
                               <span>:</span><input  className="form-check-input ms-2 me-2" type="checkbox"/><span>View</span>
                               <input  className="form-check-input ms-2 me-2" type="checkbox"/><span>Operate</span><br/>

                               <p className='mt-5'>:<input  className="form-check-input ms-2 checkbox-lg" type="checkbox"  checked={control.payroll_page}/><br/></p>
                               <span>:</span><input  className="form-check-input ms-2 me-2" type="checkbox"  checked={control.dashboard_payroll_view}/><span>View</span>
                               <input  className="form-check-input ms-2 me-2" type="checkbox" checked={control.dashboard_payroll_control}/><span>Operate</span><br/>
                               <span>:</span><input  className="form-check-input ms-2 me-2" type="checkbox" /><span>View</span>
                               <input  className="form-check-input ms-2 me-2" type="checkbox" /><span>Operate</span><br/>
                               <span>:</span><input  className="form-check-input ms-2 me-2" type="checkbox" name='attendance_view' checked={control.attendance_view}/><span>View</span>
                               <input  className="form-check-input ms-2 me-2" type="checkbox"  checked={control.attendance_control}/><span>Operate</span><br/>
                               <span>:</span><input  className="form-check-input ms-2 me-2" type="checkbox" name='leave_request_view}' checked={control.leave_request_view}/><span>View</span>
                               <input  className="form-check-input ms-2 me-2" type="checkbox"  checked={control.leave_request_control}/><span>Operate</span><br/>
                               <span>:</span><input  className="form-check-input ms-2 me-2" type="checkbox" name='loans_view' checked={control.loans_view}/><span>View</span>
                               <input  className="form-check-input ms-2 me-2" type="checkbox"  checked={control.loans_control}/><span>Operate</span><br/>
                               <span>:</span><input  className="form-check-input ms-2 me-2" type="checkbox" name='allowance_view}' checked={control.allowance_view}/><span>View</span>
                               <input  className="form-check-input ms-2 me-2" type="checkbox"  checked={control.allowance_control}/><span>Operate</span><br/>
                               <span>:</span><input  className="form-check-input ms-2 me-2" type="checkbox"  name='genral_report_view' checked={control.genral_report_view}/><span>View</span>
                               <input  className="form-check-input ms-2 me-2" type="checkbox"  checked={control.genral_report_control}/><span>Operate</span><br/>


                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-6">
                     <div className="container-fluid">
                      <div className="row">
                        <div className="col-6">
                           <p className='fw-bold'>Accounts</p>
                           <span>Accounting</span><br/>
                           <span>Cheque Reporting</span><br/>
                           <span>Customer Cheque</span><br/>

                           <p className='mt-5 fw-bold'>Reports</p>
                           <span>Reports</span>

                           <p className='mt-5 fw-bold'>Masters</p>
                           <span>Masters</span>

                            <p className='mt-5 fw-bold'>Telecalling</p>
                            <span>Dashboard</span><br/>
                            <span>Campaign</span><br/>
                            <span>Contacts</span><br/>
                           <span>Reference Users</span>
                        </div>

                        <div className="col-6">
                            <p>:<input  className="form-check-input ms-2 checkbox-lg" type="checkbox"  checked={control.accounting_page}/><br/></p>
                             <span>:</span><input  className="form-check-input ms-2 me-2" type="checkbox" checked={control.accounting_view}/><span>View</span>
                            <input  className="form-check-input ms-2 me-2" type="checkbox"  checked={control.accounting_control}/><span>Operate</span><br/>
                            <span>:</span><input  className="form-check-input ms-2 me-2" type="checkbox"  checked={control.cheque_report_view}/><span>View</span>
                            <input  className="form-check-input ms-2 me-2" type="checkbox"  checked={control.cheque_report_control}/><span>Operate</span><br/>
                            <span>:</span><input  className="form-check-input ms-2 me-2" type="checkbox" checked={control.customer_cheque_view}/><span>View</span>
                             <input  className="form-check-input ms-2 me-2" type="checkbox"   checked={control.customer_cheque_control}/><span>Operate</span><br/>

                             <p className='mt-5'>:<input  className="form-check-input ms-2 checkbox-lg" type="checkbox"  checked={control.reports_page }/><br/></p>
                             <span>:</span><input  className="form-check-input ms-2 me-2" type="checkbox"  checked={control.reporting_view }/><span>View</span>
                             <input  className="form-check-input ms-2 me-2" type="checkbox"  checked={control.reporting_control }/><span>Operate</span><br/>

                             <p className='mt-5'>:<input  className="form-check-input ms-2 checkbox-lg" type="checkbox"  checked={control.master_page}/><br/></p>
                              <span>:</span><input  className="form-check-input ms-2 me-2" type="checkbox"  checked={control.master_view}/><span>View</span>
                              <input  className="form-check-input ms-2 me-2" type="checkbox"  checked={control.master_control}/><span>Operate</span><br/>

                             <p className='mt-5'>:<input  className="form-check-input ms-2 checkbox-lg" type="checkbox"  checked={control.telecaller_app_page }/><br/></p>
                             <span>:</span><input  className="form-check-input ms-2 me-2" type="checkbox"  checked={control.dashboard_app_view}/><span>View</span>
                             <input  className="form-check-input ms-2 me-2" type="checkbox"  checked={control.dashboard_app_control}/><span>Operate</span><br/>
                              <span>:</span><input  className="form-check-input ms-2 me-2" type="checkbox"  checked={control.campaign_view}/><span>View</span>
                             <input  className="form-check-input ms-2 me-2" type="checkbox"  checked={control.campaign_control}/><span>Operate</span><br/>
                               <span>:</span><input  className="form-check-input ms-2 me-2 " type="checkbox"  checked={control.contacts_view}/><span>View</span>
                              <input  className="form-check-input ms-2 me-2" type="checkbox"  checked={control.contacts_control}/><span>Operate</span><br/>
                              <span>:</span><input  className="form-check-input ms-2 me-2" type="checkbox"  checked={control.reference_user_view }/><span>View</span>
                              <input  className="form-check-input ms-2 me-2" type="checkbox"  checked={control.reference_user_control }/><span>Operate</span><br/>
                              
    
                        </div>
                      </div>
                     </div>
                    </div>
                  </div>
                </div>
                
                </div>
               

                
               </div> 
               </div>

               </>


  )
}

export default Admin

                

                

                // <h6>Agent Management</h6>
                // <p>Agent management Control:<input  className="form-check-input" type="checkbox" checked={control.agent_management_control} /></p>
                // <p>Agent management View:<input  className="form-check-input" type="checkbox" checked={control.agent_management_view}/></p>

                    
                // //      < className="col-lg-3 col-md-3">

              

                // // <h6>Endorsement</h6>
                // // <p>Endorsement Control:<input  className="form-check-input" type="checkbox" checked={control.endorsement_control}/></p>
                // // <p>Endorsement View:<input  className="form-check-input" type="checkbox" checked={control.endorsement_view}/></p>
                    
                           
                // // <p>Payroll Control:<input  className="form-check-input" type="checkbox" checked={control.payroll_control}/></p>
        
                // // <p>Payroll View:<input  className="form-check-input" type="checkbox" checked={control.payroll_view}/></p>
                // // <p>Pending Payment Control:<input  className="form-check-input" type="checkbox" checked={control.pending_payment_control}/></p>
                // // <p>Pending Payment view:<input  className="form-check-input" type="checkbox" checked={control.pending_payment_view}/></p>

                      
                // // <h6>Policy</h6>
                // // <p>Policy Dock Control:<input  className="form-check-input" type='checkbox' checked={control.policy_dock_control }/></p>
        

                
                // //     <h6>Sales Management</h6>
                // // <p>Sales Management Control:<input  className="form-check-input" type='checkbox' checked={control.sales_management_control }/></p>
                // // <p>Sales Management view:<input  className="form-check-input" type='checkbox' checked={control.sales_management_view }/></p>

                // // <h6>Support management</h6>
                // // <p>Support Management Control:<input  className="form-check-input" type='checkbox' checked={control.support_management_control }/></p>
                // // <p>Support Management view:<input  className="form-check-input" type='checkbox' checked={control.support_management_view }/></p>

              

           
        
    
    

