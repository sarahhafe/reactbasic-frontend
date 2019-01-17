import React, { Component } from 'react';
import './Login.css';
import headerImage from '../images/hearts2.jpg';

export default class Register extends Component {
    constructor() {
      super();
      this.state = {
        email : '',
        password : '',
        isSubmitDisabled:true,
        formErrors : {
          email:'',
          password:'',
        }
        formValidity : {
          email : false,
          password : false
        } 
      };
      this.handlechange = this.handlechange.bind(this);
    }
    
    handlechange(event) {
      this.setState({[event.target.name]: event.target.value}, function(){ this.canSubmit()})
    
    }

    canSubmit() {
      const { email,password } = this.state;
      if(email.length > 0 && password.length>=5) {
        this.setState({isSubmitDisabled:false})
      }
      else {
        this.setState({isSubmitDisabled:true})
        
      }
      
    }
    
  render() {
    return (
      <div className="login container">       
        <div className="row align-items-center">
          <div className="col-md-2 offset-md-5">
            <div className="imgbox">
              
              <div className="centeredtext">REGISTER</div>
            </div>
            <div className="form-group ">
              <input type="email" className="form-control" name="email" placeholder="Enter email id" value={this.state.email} onChange={this.handlechange}></input><br/>
              <input type="password" className="form-control" name="password" placeholder="Enter password" value={this.state.password} onChange={this.handlechange}></input><br/>
              <button className="btncss" disabled={this.state.isSubmitDisabled}>Register</button><br/>

              <div className="registertest">Already have an account? <a href="/register">Login here.</a></div>

            </div>
          </div>
              
              

              
         
          
        </div> 
      </div>
       
    );
  }
}



/*
      if (this.state.password === this.state.password2 ) {
        // this.formValidity.passwordmatch = true; this is wrong
        this.setState({formValidity: Object.assign({}, this.state.formValidity,  { passwordmatch: true } )});
      } */