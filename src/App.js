import React, { Component } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Navigation from './components/Navigation';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        

        <BrowserRouter>
        <div>
        <Navigation />
        <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
        </Switch>
        </div>
        </BrowserRouter>

        
      </div>
    );
  }
}

export default App;
