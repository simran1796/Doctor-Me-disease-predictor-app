import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import Feedback from './feedback';
import '../css/form.css';
const axios=require('axios');

class Login extends Component {
    constructor() {
        super();

        this.state = {
            fields: {},
            errors: {},
            mail:''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
      let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
          fields
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.validateForm()) {
          let fields =this.state.fields; 
         // this.handleData(fields["emailid"]);
          axios.post("http://localhost:5000/signups/login",{ 
            email : fields["emailid"],
            password :fields["password"]
        }).then(function (response) {
          console.log(response.data)})
        .catch(err=>{alert(err.response.data)});
        let mail=this.state.fields.emailid;
        if(fields["emailid"]!=="undefined")
        {
          this.setState({mail: mail});
          /*Feedback.getMail(mail);*/
        }
          fields["emailid"] = "";
          fields["password"] = "";
          this.setState({fields:fields});
          window.location.assign('http://localhost:8000/heart');
        }
    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["emailid"]) {
        formIsValid = false;
        errors["emailid"] = "*Please enter your email-ID.";
      }

      if (typeof fields["emailid"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["emailid"])) {
          formIsValid = false;
          errors["emailid"] = "*Please enter valid email-ID.";
        }
      }

      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "*Please enter your password.";
      }

      this.setState({
        errors: errors
      });
      return formIsValid;


  }

    render() {
        return (
    <div className="App">
      <div className="App__Aside bg"></div>
      <div className="App__Form"> 
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields" >
            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange} />
                <div className="errorMsg">{this.state.errors.emailid}</div>
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
                <div className="errorMsg">{this.state.errors.password}</div>
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20">Sign In</button> <Link to="/clickhere" className="FormField__Link">Create an account</Link>
              </div>
            </form>
          </div>
        </div>
      </div>    
        );
    }
}

export default Login;