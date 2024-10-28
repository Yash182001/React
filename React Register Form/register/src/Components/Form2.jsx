import React, { useState } from 'react'
import './Form.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Table, Spinner } from 'reactstrap'
import Select from "react-select";
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'react-bootstrap-typeahead/css/Typeahead.bs5.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



const Form = () => {

    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal);
        setError(false);
        setInvalidError(false);
        setFormData({
            email: '',
            password: '',
            firstName: '',
            middleName: '',
            lastName: '',
            mobile: '',
            
        });
        setGender("");
        setState([]);
        setError(false);
        setUpdate(false);
        setGender("");
        setState([]);
        setSkills([]);
        setDateRange([new Date(), null]);
        setDob(new Date());

    }


    const [Dob, setDob] = useState(new Date());
    // const birthdayValue=formatDate(Dob);
    const date= new Date(Dob);
    const birthdayValue= `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
// const birthdayValue = [birthday]

const [gender, setGender] = useState("");
    const genderSelect = [
        { value: "Male", label: "Male" },
        { value: "Female", label: "Female" },
        { value: "Others", label: "Others" },
    ];

    const [state, setState] = useState([]);
    const stateOptions = [{ name: "Maharashtra", label: "Maharashtra" }, { name: "MadhyaPradesh", label: "MadhyaPradesh" }];

    const [skills, setSkills] = useState([]);
    const Skillsoptions = [{ name: "HTML,", label: "HTML" }, { name: "CSS3,", label: "CSS3" }, { name: "JAVASCRIPT,", label: "JAVASCRIPT" }, { name: "ReactJs,", label: "ReactJs" }]


    const [dateRange, setDateRange] = useState([new Date(), null]);
    const [startDate, endDate] = dateRange;
    const dateValue = dateRange;

    function formatDate(dateString) {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString();
        return `${month}/${day}/${year} `;
    }
    const StayValue = dateValue.map(dateString => formatDate(dateString));
    


    const [formData, setFormData] = useState(
        {
            email: '',
            password: '',
            firstName: '',
            middleName: '',
            lastName: '',
            mobile: '',
            
        });


    const handleonchange = (event) => {

        setFormData({ ...formData, [event.target.name]: event.target.value});

    }
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const [inputarray, setInputArray] = useState([{
        firstName: "First Name",
        middleName: "Middle Name",
        lastName: "Last Name",
        email: "example@ex.com",
        password: "example@1234",
        birthday: "4/12/2024",
        mobile: "1234567890",
        GenderValue: { value: 'Male', label: 'Male' },
        state: [{
            "name": "MadhyaPradesh",
            "label": "MadhyaPradesh"
        }],
        skills: [{ name: "HTML,", label: "HTML" }, { name: "CSS3,", label: "CSS3" }, { name: "JAVASCRIPT,", label: "JAVASCRIPT" }, { name: "ReactJs,", label: "ReactJs" }],
        StayValue: ['02/12/2024', ' 03/12/2024'],
    }])
    let { email, password, firstName, middleName, lastName, mobile, } = formData


    const handleonSubmit = (event) => {

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        event.preventDefault();
        if (firstName === "" || firstName === undefined || email === "" || email === undefined || middleName === "" || middleName === undefined ||
            lastName === "" || lastName === undefined || password === "" || password === undefined || mobile === "" || mobile === undefined) {
            setError(true);
            setInvalidError(true)
        }


        else {

            var array = inputarray
            var obj = {
                firstName: formData.firstName,
                middleName: formData.middleName,
                lastName: formData.lastName,
                email: formData.email,
                password: formData.password,
                mobile: formData.mobile,
                birthday: birthdayValue,
                GenderValue: gender,
                state: state,
                skills: skills,
                StayValue: StayValue,
              }
            array.push(obj)
            console.log("array--------------------------",array);

            setInputArray(array)
            // console.log(formData);
            setFormData({
                email: '',
                password: '',
                firstName: '',
                middleName: '',
                lastName: '',
                mobile: '',

            });
            setGender("");
            setState([]);
            setSkills([])
            setError(false);
            setModal(!modal);
            setDateRange([new Date(), null]);
            setDob(new Date());

            // console.log(myData);
        }
    }

    const [invalidError, setInvalidError] = useState(false)

    const deleteData = (i) => {
        // console.log(i,"delete me")
        let total = [...inputarray];
        total.splice(i, 1);
        setInputArray(total);
    }

    const [update, setUpdate] = useState(false);
    const [index, setIndex] = useState(null);
    const selectData = (i) => {
        console.log("update data=============", inputarray[i])
        setModal(!modal);
        setUpdate(true);
        setFormData(inputarray[i]);
        setIndex(i);
        setGender(inputarray[i].GenderValue)
        setState(inputarray[i].state)
        setDateRange(inputarray[i].StayValue)
        setDob(inputarray[i].birthday)
        setSkills(inputarray[i].skills)
        // console.log(gender);
    }

    const updateData = () => {
        
        setLoading(true);
          setTimeout(() => {
            setLoading(false);
            setModal(!modal);
         setUpdate(false);
        }, 2000);


        if(index !== null){
            const updatedArray = [...inputarray];
            updatedArray[index]={
                firstName: formData.firstName,
                middleName: formData.middleName,
                lastName: formData.lastName,
                email: formData.email,
                password: formData.password,
                mobile: formData.mobile,
                birthday: birthdayValue,
                GenderValue: gender,
                state: state,
                skills: skills,
                StayValue: StayValue,
            }
            // console.log("updated array---------------",updatedArray);
            setInputArray(updatedArray);
        }
       
      
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
                                        <Label for="FirstName">First Name<span style={{ color: "red" }}>*</span></Label>
                                        <Input invalid={invalidError && formData.firstName === "" ? true : false} id="First Name" name="firstName" placeholder='First Name' value={formData.firstName} onChange={handleonchange} />
                                    </FormGroup>
                                </div>

                                <div className="col-4">
                                    <FormGroup>
                                        <Label for="MiddleName">Middle Name<span style={{ color: "red" }}>*</span></Label>
                                        <Input invalid={invalidError && formData.middleName === "" ? true : false} id="Middle Name" name="middleName" placeholder='Middle Name' value={formData.middleName} onChange={handleonchange} />
                                    </FormGroup>
                                </div>

                                <div className="col-4">
                                    <FormGroup>
                                        <Label for="LastName">Last Name<span style={{ color: "red" }}>*</span></Label>
                                        <Input invalid={invalidError && formData.lastName === "" ? true : false} id="Last Name" name="lastName" placeholder='Last Name' value={formData.lastName} onChange={handleonchange} />
                                    </FormGroup>
                                </div>

                            </div>

                            <div className="row">
                                <div className="col-4">
                                    <FormGroup>
                                        <Label for="exampleEmail">Email<span style={{ color: "red" }}>*</span></Label>
                                        <Input invalid={invalidError && formData.email === "" ? true : false} id="exampleEmail" name="email" placeholder="Email" type="email" value={formData.email} onChange={handleonchange} />
                                    </FormGroup>
                                </div>

                                <div className="col-4">
                                    <FormGroup>
                                        <Label for="examplePassword">Password<span style={{ color: "red" }}>*</span></Label>
                                        <Input invalid={invalidError && formData.password === "" ? true : false} minLength={8} id="Password" name="password" placeholder="Password" type="password" value={formData.password} onChange={handleonchange} />
                                    </FormGroup>
                                </div>

                                <div className="col-4">
                                    <FormGroup>
                                        <Label for="Mobile Number">Mobile Number<span style={{ color: "red" }}>*</span></Label>
                                        <Input invalid={invalidError && formData.mobile === "" ? true : false} minLength={10} maxLength={10} id="Mobile Number" name="mobile" placeholder="Mobile Number" type="text" value={formData.mobile.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1')} onChange={handleonchange} />
                                    </FormGroup>

                                </div>

                            </div>

                            <div className="row">
                                <div className="col-4">
                                    <FormGroup>
                                        <Label for="Birth Date">Birth Date<span style={{ color: "red" }}>*</span></Label>
                                        <DatePicker selected={Dob} onChange={(e) => {
                                            // console.log("dob-------------", e);
                                            setDob(e);
                                        }}  />
                                    </FormGroup>
                                </div>

                                <div className="col-4">
                                    <Label for="Gender">Gender<span style={{ color: "red" }}>*</span></Label>
                                    <Select value={gender} options={genderSelect} placeholder="Gender" onChange={(e) => {
                                        // console.log("gender-----------",e);
                                        setGender(e)

                                    }} />
                                </div>

                                <div className="col-4">
                                    <Label for="State">State<span style={{ color: "red" }}>*</span></Label>
                                    <Typeahead highlightOnlyResult minLength={1} id="State" selected={state} value={state} onChange={(e) => {
                                        // console.log("State---------",e);
                                        setState(e)
                                    }} options={stateOptions}
                                        placeholder="Choose Your State" name="state" />
                                </div>
                            </div>

                            <div className="row">

                                <div className="col-4">
                                    <Label for="skills">Skills<span style={{ color: "red" }}>*</span></Label>
                                    <Typeahead clearButton id="Skills" selected={skills} value={skills} highlightOnlyResult multiple minLength={1} onChange={(e) => {
                                        // console.log("skills-----", e);
                                        setSkills(e);
                                    }}
                                        options={Skillsoptions} placeholder="Choose Your Skills" />
                                </div>

                                <div className="col-4">
                                    <Label for="Stay days">Stay days<span style={{ color: "red" }}>*</span></Label>
                                    <DatePicker selectsRange={true} startDate={startDate} endDate={endDate} onChange={(e) => { 
                                        // console.log(e);
                                        setDateRange(e); }}
                                         />

                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        {error ? <span style={{ color: "red", marginRight: "150px" }}>Please fill in the required details</span> : ""}
                        <Button color="primary" onClick={toggle}> Cancel </Button>{' '}
                        {update ? <Button color='primary' onClick={updateData} disabled={loading}>{loading ? "Updating" : "Update"}{loading ? <span><Spinner animation="border" variant="danger" size='sm' /></span> : ""}</Button> :
                            <Button color="primary" onClick={handleonSubmit} disabled={loading}>{loading ? "Saving" : "Save"}{loading ? <span><Spinner animation="border" variant="danger" size='sm' /></span> : ""}</Button>}
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
                                (value, i) => {
                                    // console.log(value.birthday);
                                    return (
                                        <tr key={i}>
                                            <td>{value.firstName}</td>
                                            <td>{value.middleName}</td>
                                            <td>{value.lastName}</td>
                                            <td>{value.email}</td>
                                            <td>{value.password}</td>
                                            <td>{value.mobile}</td>
                                            <td>{value.birthday}</td>
                                            <td>{value.GenderValue ? value.GenderValue.label : ""}</td>
                                            <td>
                                                {value.state ? (value.state.length > 0 ? value.state[0].label : "") : ""}
                                            </td>
                                            <td>
                                                {value.skills.map(skill => skill.name)}
                                                </td>
                                            <td>{[value.StayValue]}</td>
                                            <td><Button color="info" onClick={() => selectData(i)}>Update</Button>
                                                <Button className=' ms-1 mt-2' color="danger" onClick={() => deleteData(i)}>Delete</Button></td>
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
