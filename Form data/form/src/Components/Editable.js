import React from 'react'

const Editable = () => {
  return (
    <tr>
        <td><input type="text" name="firstName" className="form-control rounded-pill" placeholder="Please Enter First Name"  /></td>
        <td><input type="text" name="middleName" className="form-control rounded-pill" placeholder="Please Enter Middle Name"  /></td>
        <td><input type="text" name="lastName" className="form-control rounded-pill" placeholder="Please Enter Last Name"  /></td>
        <td><input type="text" name="motherName" className="form-control rounded-pill" placeholder="Please Enter Mother's Name"  /></td>
        <td><input type="text" name="email" className="form-control rounded-pill" placeholder="Please Enter Email"  /></td>
        <td><input type="text" name="Mobileno" className="form-control rounded-pill" placeholder="Please Enter Mobile no"  /></td>
        <td>
        <button className="btn btn-info">Save</button>
        <button className='btn btn-danger'>Cancel</button>
         </td>
    </tr>
  )
}

export default Editable
