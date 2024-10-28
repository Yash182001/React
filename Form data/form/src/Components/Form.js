import React, { useState } from 'react'
import'./form.css'

const Form = () => {

    const [formData, setFormData] = useState(
        { firstName:'',
          middleName:'',
          lastName:'',
          motherName:'',
          email:'',
          Mobileno:''});

    const [inputarray, setInputArray] = useState([]);
    const [error, setError] = useState(false);
    const [gender,setGender]=useState();
    

    const handleonchange = (event)=>{
        setFormData({...formData,[event.target.name]:event.target.value})
    }

    let {firstName,middleName,lastName,motherName,email,Mobileno}=formData
    const handleonSubmit = (event)=>{
        event.preventDefault();
        // if (firstName.trim() === '' ||
        // middleName.trim() === '' ||
        // lastName.trim() === '' ||
        // motherName.trim() === '' ||
        // email.trim() === '' ||
        // Mobileno.trim() === '') 
        
        if(firstName.trim()===''){
            alert("Enter First Name")
            setError(true);
        }
        else if(middleName.trim()===''){
            alert("Enter Middle Name")
            setError(true);
        }
        else if(lastName.trim()===''){
            alert("Enter Last Name")
            setError(true);
        }
        else if(motherName.trim()===''){
            alert("Enter Mother Name")
            setError(true);
        }
        else if(email.trim()===''){
            alert("Enter your Email")
            setError(true);
        }
        else if(Mobileno.trim()===''){
            alert("Enter Mobile No")
            setError(true);
        }
            else{

            setInputArray([...inputarray,{firstName,middleName,lastName,motherName,email,Mobileno}])
            console.log(formData);
            //   console.log(formData.firstName);
            setFormData({ firstName:'',
                          middleName:'',
                          lastName:'',
                          motherName:'',
                          email:'',
                          Mobileno:'',
                        });
                         setError(false);
        }
    }




    const deleteData=(i)=>{
        // console.log(i,"delete me")
        let total=[...inputarray];
        total.splice(i,1);
        setInputArray(total);
    }

    const[update, setUpdate] = useState(false);
    const [index, setIndex]= useState();

   const updateData=(i)=>{
    // console.log(i,'edit me');
    setFormData(inputarray[i]);
    setUpdate(true);
    setIndex(i);
    // console.log(inputarray[i])
   }

    const handleUpdate = (event)=>{
        event.preventDefault();
    const updatedArray = [...inputarray];
    updatedArray[index] = formData; 
    setInputArray(updatedArray); 
    setUpdate(false);
    setFormData({ firstName:'',
         middleName:'',
         lastName:'',
        motherName:'',
        email:'',
         Mobileno:''});
    
    // inputarray.splice(index,1,formData)
    //     setInputArray([...inputarray])
    //     setUpdate(false)
    //     setFormData({ firstName:'',
    //     middleName:'',
    //     lastName:'',
    //     motherName:'',
    //     email:'',
    //     Mobileno:''});
    }


const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 2000); 
    };

    const [checkedValues, setValue]= useState([])
  const handleCheckbox=(event)=>{
    //  console.log(event.target.value)
    const {value,checked} = event.target;
    if(checked){
        setValue(value);
        console.log(checkedValues)
    }
  }

// const CheckboxForm = () => {
//   const [checkedItems, setCheckedItems] = useState({}); // State to hold checked items

//   const handleCheckboxChange = (event) => {
//     const { name, checked } = event.target;
//     setCheckedItems((prevItems) => ({
//       ...prevItems,
//       [name]: checked // Update the checked state for the checkbox
//     }));
// }
// };
   
  return (
   <>
     <div className="container form">
        <h3 className='text-white mt-3 pt-2'>Details</h3>
       <form id="contact-form" onSubmit={handleClick}>
       {/* className="was-validated" */}
         <div className="row mt-2">

          <div className='col-4'>
           <label  className="fw-bold text-white">First Name:</label>
           <input type="text" name="firstName" className="form-control rounded-pill" value={formData.firstName} onChange={handleonchange} placeholder="Please Enter First Name"  />
          {/* <div className="invalid-feedback">Please fill out this field.</div> */}
         </div>
         <div className="col-4">
           
               <label  htmlFor="middlename" className="fw-bold text-white">Middle Name:</label>
               <input type="text" name="middleName" className="form-control rounded-pill" value={formData.middleName} onChange={handleonchange} placeholder="Please Enter Middle Name"  />
               {/* <div className="invalid-feedback">Please fill out this field.</div> */}
            </div>
           

           <div className="col-4">
            <label  htmlFor="lastname" className="fw-bold text-white">Last Name:</label>
           <input type="text" name="lastName" className="form-control rounded-pill" value={formData.lastName} onChange={handleonchange} placeholder="Please Enter Last Name"  />
            {/* <div className="invalid-feedback">Please fill out this field.</div> */}
        </div>
     </div>

     <div className="row mt-3">
            <div className="col-4">
           <label  htmlFor="mothername" className="fw-bold text-white">Mother Name:</label>
             <input type="text" name="motherName" className="form-control rounded-pill" value={formData.motherName} onChange={handleonchange} placeholder="Please Enter Mother Name"  />
             {/* <div className="invalid-feedback">Please fill out this field.</div> */}
             </div>

            <div className="col-4">
           <label  htmlFor="email" className="fw-bold text-white">Email address:</label>
              <input type="Email" name="email" className="form-control rounded-pill" value={formData.email} onChange={handleonchange} placeholder="Please Enter Your Email"   />
              {/* <div className="valid-feedback">Valid.</div> */}
              {/* <div className="invalid-feedback">Please Enter Valid Email Address.</div> */}
             </div>
           

             <div className="col-4" >
            <label  htmlFor="Mobileno" className="fw-bold text-white">Mobile No:</label>
             <input type="text" name="Mobileno" className="form-control rounded-pill" value={formData.Mobileno} onChange={handleonchange} placeholder="Enter 10 digit Mobile No." minLength="10" maxLength="10" />
             {/* <div className="valid-feedback">Valid.</div> */}
             {/* <div className="invalid-feedback">Please Enter Valid Mobile Number.</div> */}
             
             </div>
         </div>
         <div className="row mt-3">
              <div className="col-4">
                        <span className="fw-bold text-white "> Choose Gender:</span><br/>
                        
                        <input type="radio" id="male" value="male" name="Gender" className="me-1" onChange={(e)=>setGender(e.target.value)}/><span className="text-white fw-bold">Male</span><br/>
                        
                        <input type="radio" id="female" value="female" name="Gender" className="me-1" onChange={(e)=>setGender(e.target.value)}/><span className="text-white fw-bold">Female</span><br/>

                        <input type="radio" id="Other" value="Other" name="Gender" className="me-1" onChange={(e)=>setGender(e.target.value)}/><span className="text-white fw-bold">Other</span>
                 </div>
                        
                 <div className="col-4">
                       <span className="fw-bold text-white">Choose Skills:</span><br/>
                        
                       <input type="checkbox" id="HTML5" name="Skills" value="HTML5" className="form-check-input" onChange={handleCheckbox}/>
                       <label htmlFor="HTML5" className="text-white fw-bold ms-1">HTML5</label><br/>
    
                       <input type="checkbox" id="CSS3" name="Skills" value="CSS3" className="form-check-input" onChange={handleCheckbox}/>
                       <label htmlFor="CSS3" className="text-white fw-bold ms-1">CSS3</label><br/>
    
                       <input type="checkbox" id="JAVASCRIPT" name="Skills" value="JAVASCRIPT" className="form-check-input" onChange={handleCheckbox}/>
                       <label htmlFor="JAVASCRIPT" className="text-white fw-bold ms-1">JAVASCRIPT</label>
                       
                    </div>
            </div>
                    

   
             <div className="modal-footer ">
                 {error ? <span className='text-danger me-5'>Fill in all the details</span>:''}
               <div className="Submit button mb-3">
               {update ?<button type='button' className='btn btn-success mt-3' onClick={handleUpdate}>Update</button>:
                 <button type="Submit" id="Submit" style={{background:loading ? "red" :""}}  className={"btn btn-success mt-3"} onClick={handleonSubmit}   disabled={loading }>{loading ? "Submitting" :"Submit"}
                 {loading ?<span className='spinner-border text-primary'/>:''}
          </button>}
               </div>
             </div>  

    

       </form>
     </div>
     
     <table className='table table-striped table-dark table-hover table-borderless mt-5'>
        <thead>
        <tr>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Last name</th>
            <th>Mother Name</th>
            <th>Email</th>
            <th>Mobile No</th>
            <th>Gender</th>
            <th>Skills</th>
            <th>Action</th>
         </tr>
        </thead>
        
        <tbody>
            {

                inputarray.map(
                    
                    (value,i)=>{
                        
                        return(
                            <tr key={i}>
                            <td>{value.firstName}</td>
                            <td>{value.middleName}</td>
                            <td>{value.lastName}</td>
                            <td>{value.motherName}</td>
                            <td>{value.email}</td>
                            <td>{value.Mobileno}</td>
                            <td>{gender}</td>
                            
                            <td>
                                <button className="btn btn-info me-3" onClick={()=>updateData(i)}>Update</button>
                                <button className='btn btn-danger' onClick={()=>deleteData(i)}>Delete</button>
                            </td>
                        </tr>
                            
                            
                        )
                            
                    }
                )
            }
            
        </tbody>
    </table>
    


          
   </>
  )
}

export default Form



      
      

             
             
             
    
          

            
       
           
      
         
      
       

