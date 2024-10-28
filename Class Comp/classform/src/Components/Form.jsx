import React, { Component } from 'react'
import {Label,Input} from 'reactstrap'

export default class Form extends Component {
    constructor(){
        super()

        this.state = {
            firstName:''
        }

       
    }

    handleChange = (e)=>{
        this.setState({
            firstName:e.target.value
        })
        console.log(this.state.firstName)
    }

  

   
  render() {
    return (
      <>
      <Label for='firstName'>First Name</Label>
      <Input type='text' value={this.state.firstName} onChange={this.handleChange} />

      
      </>
    )
  }
}
