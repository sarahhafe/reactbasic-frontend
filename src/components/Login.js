import React, { Component } from 'react';
import './Login.css';
import headerImage from '../images/hearts2.jpg';

export default class Login extends Component {
  render() {
    return (
      <div className="login container">       
        <div className="row align-items-center">
          <div className="col-md-2 offset-md-5">
            <div className="imgbox">
              {/* <img  src={headerImage} className="imgstyle"/> */}
              <div className="centeredtext">LOGIN</div>
            </div>
            <div className="form-group ">
              <input type="email" className="form-control" placeholder="Enter email id"></input><br/>
              <input type="password" className="form-control" placeholder="Enter password"></input><br/>
              <button className="btncss">Log In</button><br/>

              <div className="registertest">New around here? <a href="/register">Register here.</a></div>

            </div>
          </div>
              
              

              
         
          
        </div> 
      </div>
       
    );
  }
}


