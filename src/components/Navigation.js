import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

export default class Navigation extends Component {
    render() {
      return (
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid justify-content-center">
        <ul className="nav navbar-nav">
            <li className="nav-item">
            <NavLink className="nav-link" to='/'>Home</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to='/login' >Login</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to='/register'>Register</NavLink>
            </li>
       </ul> 
       </div>
      </nav>
      );
    }
  }
  