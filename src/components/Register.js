import React, { Component } from 'react';
import './Login.css';
import headerImage from '../images/hearts2.jpg';

export default class Register extends Component {
    constructor() {
      super();
      this.state = {
        email : '',
        password : '',
        password2:'',
        isSubmitDisabled:true,
        formErrors : {
          email:'',
          password:'',
          password2:''
        },
        formValidity : {
          email : false,
          password : false,
          passwordmatch :false
        } 
      };
      this.handlechange = this.handlechange.bind(this);
    }
    
    handlechange(event) {
      this.setState(
        {
          [event.target.name]: event.target.value
        }, 
        function () {
           this.canSubmit();
        });
    }

    
    canSubmit() {
      const { formValidity, formErrors } = this.state;
      let email = this.state.email;
      let password = this.state.password;
      let password2 = this.state.password2;
      var emailflag;
      var passwordflag;
      var passwordmatchflag;

      if(email.length > 0 && email.indexOf('@') !== -1 && email.indexOf('.') !== -1) {
        emailflag = true;
      } 
      else {
        emailflag = false;

      }

      if(password.length>=5) {
        passwordflag = true;
      }
      else {
        passwordflag = false;
        }
        
      if(password2===password) {
       passwordmatchflag = true;
      }
      else {
       passwordmatchflag = false;
        }

        console.log(emailflag, passwordflag, passwordmatchflag);

      if(emailflag==true && passwordflag==true && passwordmatchflag==true)  {
        this.setState({isSubmitDisabled:false})
        console.log(`email is ${this.state.email} and password is ${this.state.password}`);
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
            <form>
            <div className="form-group ">
              <input type="email" className="form-control" name="email" placeholder="Enter email id" value={this.state.email} onChange={this.handlechange}></input><br/>
              <div className="invalid-feedback">{this.state.formErrors.email}</div>
              <input type="password" className="form-control" name="password" placeholder="Enter password" value={this.state.password} onChange={this.handlechange}></input><br/>
              <div className="invalid-feedback">{this.state.formErrors.password}</div>
              <input type="password" className="form-control" name="password2" placeholder="Re-enter password" value={this.state.password2} onChange={this.handlechange}></input><br/>
              <div className="invalid-feedback">{this.state.formErrors.password2}</div>
              <button className="btncss" disabled={this.state.isSubmitDisabled}>Register</button><br/>
              

              <div className="registertest">Already have an account? <a href="/register">Login here.</a></div>

            </div>
            </form>
          </div> 
        </div> 
      </div>
       
    );
  }
}