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
      const { formValidity, email, password, password2 } = this.state;
      // console.log('length' + email.length);
      // console.log('@' + email.indexOf('@'));
      // console.log('.' + email.indexOf('.'));

      this.setState({formValidity : {
        email : false,
        password : false,
        passwordmatch :false
      }  });

      if(email.length > 0 && email.indexOf('@')!= -1 && email.indexOf('.')!= -1) {
        console.log('setting email validity true');
        console.log(Object.assign({}, this.state.formValidity, {email:true} ));
        this.setState( {formValidity: Object.assign({}, this.state.formValidity, {email:true} )});
      }
      else {
        this.setState( {
          formErrors: Object.assign({}, this.state.formErrors, {email:'Please enter a valid email'} ),
          // formValidity: Object.assign({}, this.state.formValidity, {email:false} )
        });
        }

      console.log(formValidity);

    //   if(password.length>=5) {
    //     this.setState( {
    //       formValidity: Object.assign({}, this.state.formValidity, {password:true} )
    //     });
    //   }
    //   else {
    //     this.setState( {
    //       formErrors: Object.assign({}, this.state.formErrors, {password:'Please enter a valid password'} ),
    //       // formValidity: Object.assign({}, this.state.formValidity, {password:false})
    //     });
    //     }

    //   if(password2==password) {
    //     this.setState( {
    //       formValidity: Object.assign({}, this.state.formValidity, {passwordmatch:true} )});
    //   }
    //   else {
    //     this.setState( {
    //       formErrors: Object.assign({}, this.state.formErrors, {password2:'Passwords do not match'} ),
    //       // formValidity: Object.assign({}, this.state.formValidity, {passwordmatch:false})
    //     });

    // }

    // console.log(formValidity);

      if(formValidity.email==true && formValidity.password==true && formValidity.passwordmatch==true)  {
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
              <div className="invalid-feedback">{this.state.formErrors.email}</div>
              <input type="password" className="form-control" name="password" placeholder="Enter password" value={this.state.password} onChange={this.handlechange}></input><br/>
              <div className="invalid-feedback">{this.state.formErrors.password}</div>
              <input type="password" className="form-control" name="password2" placeholder="Re-enter password" value={this.state.password2} onChange={this.handlechange}></input><br/>
              <div className="invalid-feedback">{this.state.formErrors.password2}</div>
              <button className="btncss" disabled={this.state.isSubmitDisabled}>Register</button><br/>
              

              <div className="registertest">Already have an account? <a href="/register">Login here.</a></div>

            </div>
          </div> 
        </div> 
      </div>
       
    );
  }
}