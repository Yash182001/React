import React, { Component } from 'react'
import { Input, Label } from 'reactstrap';

export default class Form extends Component {

    constructor() {
        super();
        this.state = {color: "red"};
        this.state = {
            name:"",
            email:"",
        }
    }
        handleChange = (event) => {
            const { name, value } = event.target;
            this.setState({ [name]: value });
            
          }

          handleSubmit = (event) => {
            event.preventDefault();
            console.log('Form submitted:', this.state);
            // Reset the form fields
            this.setState({
              name: '',
              email:'',
            });
          }
        
      
  render() {
    return (
      <div>
        <h2 style={{color:"white"}}>I am a {this.state.color} Car!</h2>
        <Label style={{color:"white"}}>Name:</Label>
        <Input name='name' type='text' value={this.state.name} onChange={this.handleChange} style={{width:"300px"}}/>
        <Label style={{color:"white"}}>Email:</Label>
        <Input name='email' type='email' value={this.state.email} onChange={this.handleChange} style={{width:"300px"}}/>
        <button type="submit" className='mt-3' onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}
