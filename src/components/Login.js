import React, { Component } from 'react';
import './Login.css';
import headerImage from '../images/hearts2.jpg';

export default class Login extends Component {
    constructor(props) {
      super(props);
      this.loginusername = this.loginusername.bind(this);
      this.loginpassword = this.loginpassword.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
          username :"",
          password : "",
      }
    }

    loginusername(event) {
      this.setState({
        username : event.target.value
      });
    }
  
    loginpassword(event) {
      this.setState({
        password : event.target.value
      });
    }

    onSubmit(event) {
      event.preventDefault();
        console.log(`username is ${this.state.username} and password is ${this.state.password}`);
        this.setState({
            username: '',
            password: ''
        })
    }



  render() {
    return (
      <div className="login container">       
        <div className="row align-items-center">
          <div className="col-md-2 offset-md-5">
            <div className="imgbox">
              {/* <img  src={headerImage} className="imgstyle"/> */}
              <div className="centeredtext">LOGIN</div>
            </div>
            <form onSubmit={this.onSubmit}>
            <div className="form-group ">
              <input type="email" value={this.state.username} className="form-control" placeholder="Enter email id" onChange={this.loginusername}></input><br/>
              <input type="password" value={this.state.password} className="form-control" placeholder="Enter password" onChange={this.loginpassword}></input><br/>
              <button className="btncss" type="submit" value="Add Node Server">Log In</button><br/>

              <div className="registertest">New around here? <a href="/register">Register here.</a></div>

            </div>
            </form>
          </div>
              
              

              
         
          
        </div> 
      </div>
       
    );
  }
}


