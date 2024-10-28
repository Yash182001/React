import React,{useState} from 'react'
import './Form.css'
import {Button,Modal, ModalHeader, ModalBody, ModalFooter,FormGroup,Label,Input,Table,Spinner} from 'reactstrap'
import Select from "react-select";
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'react-bootstrap-typeahead/css/Typeahead.bs5.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Form = () => {

    const [modal, setModal] = useState(false);
  const toggle = () => {setModal(!modal);
    setError(false);
    setInvalidError(false);
    setFormData({ email:'',
    password:'',
    firstName:'',
    middleName:'',
    lastName:'',
    birthDate:'',
    StateValue:'',
    mobile:'',
    StayValue:'',
  });
  setGender("");
  setState("");
  setError(false);

}


  const [gender, setGender] = useState("");
  const genderSelect = [
    { name: "Male", label: "Male" },
    { name: "Female", label: "Female" },
    { name: "Others", label: "Others" },
  ];
  const GenderValue=(gender.name);

  const [state, setState] = useState([]);
  const stateOptions = [{name: "Maharashtra", label: "Maharashtra"},{name: "MadhyaPradesh", label: "MadhyaPradesh"}];
  const StateValue=(state.length > 0 ? state[0].name : "");

  const [skills, setSkills] = useState([]);
  const Skillsoptions = [{name:"HTML",label:"HTML"},{name:"CSS3",label:"CSS3"},{name:"JAVASCRIPT",label:"JAVASCRIPT"},{name:"ReactJs",label:"ReactJs"}]
 const skillValue = skills.map(skill=>skill.name);


  const [dateRange, setDateRange] = useState([new Date(), null]);
    const [startDate, endDate] = dateRange;
     const dateValue = dateRange;
    function formatDate(dateString) {
      const date = new Date(dateString);
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear().toString();
      return `${day}/${month}/${year} `;
    }
    const StayValue = dateValue.map(dateString => formatDate(dateString));



  const [formData, setFormData] = useState(
    { email:'',
      password:'',
      firstName:'',
      middleName:'',
      lastName:'',
      birthDate:'',
      mobile:'',
      });


      const handleonchange = (event)=>{
     
        setFormData({...formData,[event.target.name]:event.target.value});
        
    }
  const [loading, setLoading] = useState(false);
  const [error,setError] = useState(false);

    const[inputarray,setInputArray] = useState([{
      firstName : "First Name",
      middleName : "Middle Name",
      lastName : "Last Name",
      email : "example@ex.com",
      password : "example@1234",
      birthDate : "01/01/2001",
      mobile : "1234567890",
      GenderValue : "Male",
      StateValue : "MH",
      skillValue : "HTML,CSS,REACTjs",
      StayValue : ['12/02/2024',' 12/03/2024'],
    }])
    let {email,password,firstName,middleName,lastName,birthDate,mobile}=formData

    // var myData = [];
    //     var obje={
    //       firstName: formData.firstName,
    //       middleName:formData.middleName,
    //       lastName:formData.lastName,
    //       email:formData.email,
    //       password:formData.password,
    //       birthDate:formData.birthDate,
    //       mobile:formData.mobile,
    //       gender:GenderValue,
    //       state:StateValue,
    //       skills:skillValue,
    //       stay:StayValue,
          
    //     }
    //     myData.push(obje)
        
    
    const handleonSubmit = (event)=>{

      setLoading(true);
      setTimeout(() => {
        setLoading(false);
    }, 2000);
        event.preventDefault();
        if (firstName === "" || firstName === undefined || email === "" || email === undefined || middleName === "" || middleName === undefined || 
        lastName === "" || lastName === undefined || password === "" || password === undefined || birthDate === "" || birthDate === undefined ||
        GenderValue === "" || GenderValue === undefined || StateValue === "" || StateValue === undefined || mobile === "" || mobile === undefined ||
       skillValue === "" || skillValue === undefined || StayValue ==="" || StateValue === undefined) {
          setError(true);
          setInvalidError(true)
        }
  

        else{
    

            setInputArray([...inputarray,{email,password,firstName,middleName,lastName,birthDate,GenderValue,StateValue,mobile,skillValue,StayValue}])
            // console.log(formData);
            //   console.log(formData.firstName);
            setFormData({ email:'',
                          password:'',
                          firstName:'',
                          middleName:'',
                          lastName:'',
                          birthDate:'',
                          mobile:'',
                          
                        });
                        setGender("");
                        setState([]);
                        setSkills([])
                        setError(false); 
                        setModal(!modal);
                        setDateRange([new Date(), null]);
                        // console.log(myData);
                        }
    }
    
    const [invalidError,setInvalidError] = useState(false)

    const deleteData=(i)=>{
      // console.log(i,"delete me")
      let total=[...inputarray];
      total.splice(i,1);
      setInputArray(total);
  }

  const [update,setUpdate] = useState(false);
  const [index, setIndex]= useState();
   const selectData = (i)=>{
    // console.log("update data")
    setModal(!modal);
    setUpdate(true);
    setFormData(inputarray[i]);
    setIndex(i);
   }

   const updateData=(event)=>{
    event.preventDefault();
    setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setModal(!modal);
     setUpdate(false);
    }, 2000);
    
    const updatedArray = [...inputarray];
    updatedArray[index] = formData; 
    setInputArray(updatedArray); 
   }

  return (
    <>
      <div>
      <Button color="success" className='register' onClick={toggle}>
        Register Here
      </Button>
      <Modal size='lg' isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Fill in the Details Below</ModalHeader>
        <ModalBody>
         <div className="container-fluid">
            <div className="row">
            <div className="col-4">
                   <FormGroup>
                   <Label for="FirstName">First Name<span style={{color:"red"}}>*</span></Label>
                   <Input invalid={invalidError && formData.firstName === "" ? true : false} id="First Name" name="firstName" placeholder='First Name' value={formData.firstName} onChange={handleonchange}/>
                    </FormGroup>
                    </div>

                    <div className="col-4">
                   <FormGroup>
                   <Label for="MiddleName">Middle Name<span style={{color:"red"}}>*</span></Label>
                   <Input invalid={invalidError && formData.middleName === "" ? true : false} id="Middle Name" name="middleName" placeholder='Middle Name' value={formData.middleName} onChange={handleonchange}/>
                    </FormGroup>
                    </div>

                    <div className="col-4">
                    <FormGroup>
                   <Label for="LastName">Last Name<span style={{color:"red"}}>*</span></Label>
                   <Input invalid={invalidError && formData.lastName === "" ? true : false} id="Last Name" name="lastName" placeholder='Last Name' value={formData.lastName} onChange={handleonchange}/>
                    </FormGroup>
                    </div>
                
            </div>

            <div className="row">
            <div className="col-4">
                   <FormGroup>
                   <Label for="exampleEmail">Email<span style={{color:"red"}}>*</span></Label>
                   <Input invalid={invalidError && formData.email === "" ? true : false} id="exampleEmail" name="email" placeholder="Email" type="email" value={formData.email} onChange={handleonchange}/>
                    </FormGroup>
                </div>

                <div className="col-4">
                  <FormGroup>
                  <Label for="examplePassword">Password<span style={{color:"red"}}>*</span></Label>
                  <Input invalid={invalidError && formData.password === "" ? true : false} minLength={8} id="Password" name="password" placeholder="Password" type="password" value={formData.password} onChange={handleonchange} />
                  </FormGroup>
                </div>

                <div className="col-4">
                 <FormGroup>
                 <Label for="Mobile Number">Mobile Number<span style={{color:"red"}}>*</span></Label>
                  <Input invalid={invalidError && formData.mobile === "" ? true : false} minLength={10} maxLength={10} id="Mobile Number" name="mobile" placeholder="Mobile Number" type="text" value={formData.mobile.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1')} onChange={handleonchange}/>
                  </FormGroup>

                </div>
                   
            </div>

            <div className="row">
                <div className="col-4">
                   <FormGroup>
                   <Label for="Birth Date">Birth Date<span style={{color:"red"}}>*</span></Label>
                    <Input invalid={invalidError && formData.birthDate === "" ? true : false} id="Birth Date" name="birthDate" placeholder="Enter your BirthDate" type="date" value={formData.birthDate} onChange={handleonchange}/>
                   </FormGroup>
                </div>

                <div className="col-4">
                  <Label for="Gender">Gender<span style={{color:"red"}}>*</span></Label>
                  <Select invalid={invalidError && GenderValue === "" ? true : false} options={genderSelect} name='Gender' placeholder="Gender"  onChange={setGender}  />
                </div>

                <div className="col-4">
                <Label for="State">State<span style={{color:"red"}}>*</span></Label>
                    <Typeahead invalid={invalidError && StateValue === "" ? true : false}  highlightOnlyResult minLength={1} id="State"  onChange={setState} options={stateOptions} 
                     placeholder="Choose Your State"  name="state" />
                </div>
            </div>

            <div className="row">

            <div className="col-4">
                  <Label for="skills">Skills<span style={{color:"red"}}>*</span></Label>
                   <Typeahead  invalid={invalidError && skillValue === "" ? true : false} clearButton id="Skills" highlightOnlyResult multiple minLength={1} onChange={setSkills}
                    options={Skillsoptions} name='skillValues' placeholder="Choose Your Skills" />
                 </div>

                <div className="col-4">
                <Label for="Stay days">Stay days<span style={{color:"red"}}>*</span></Label>
                {/* <DatePicker selected={startDate}  onChange={onChange}  startDate={startDate}  endDate={endDate} selectsRange inline dateFormat={"dd-MM-yyyy"} /> */}
                <DatePicker   selectsRange={true} startDate={startDate} endDate={endDate} onChange={(update) => {setDateRange(update);}}
                 dateFormat={"dd-MM-yyyy"}/>

                 

                </div>
            </div>
         </div>
        </ModalBody>
        <ModalFooter>
          {error?<span style={{color:"red",marginRight:"150px"}}>Please fill in the required details</span>:"" }
          <Button color="primary" onClick={toggle}> Cancel </Button>{' '}
          {update ? <Button color='primary' onClick={updateData} disabled={loading}>{loading?"Updating":"Update"}{loading ? <span><Spinner animation="border" variant="danger" size='sm' /></span>:""}</Button>:
          <Button color="primary"  onClick={handleonSubmit} disabled={loading}>{loading?"Saving":"Save"}{loading ? <span><Spinner animation="border" variant="danger" size='sm' /></span>:""}</Button>}
        </ModalFooter>
      </Modal>
    </div>
 
     <div className="container-fluid table">
        <Table dark striped hover>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Middle Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Mobile</th>
                    <th>Birth Date</th>
                    <th>Gender</th>
                    <th>State</th>
                    <th>Skills</th>
                    <th>Stay</th>
                    <th>Actions</th>
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
                                    <td>{value.email}</td>
                                    <td>{value.password}</td>
                                    <td>{value.birthDate}</td>
                                    <td>{value.mobile}</td>
                                    <td>{value.GenderValue}</td>
                                    <td>{value.StateValue}</td>
                                    <td>{value.skillValue}</td>
                                    <td>{[value.StayValue]}</td>
                                    <td><Button color="info" onClick={()=>selectData(i)}>Update</Button>
                                      <Button className=' ms-2' color="danger" onClick={()=>deleteData(i)}>Delete</Button></td>
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

export default Form
