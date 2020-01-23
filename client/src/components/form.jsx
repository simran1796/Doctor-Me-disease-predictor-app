import React, { Component } from 'react';
import { HashRouter as Router, Route,  NavLink } from 'react-router-dom';
import SignUpForm from './signup';
import SignInForm from './login';
import Predict from './predict';
import '../css/form.css';

class Form extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App__Aside bg"></div>
          <div className="App__Form">
            <div className="PageSwitcher">
                <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
              </div>

              <div className="FormTitle">
                  <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
              </div>

              <Route exact path="/" component={SignUpForm}>
              </Route>
              <Route path="/sign-in" component={SignInForm}>
              </Route>
              <Route path="/predict" component={Predict}>
              </Route>
          </div>

        </div>
      </Router>
    );
  }
}

export default Form;