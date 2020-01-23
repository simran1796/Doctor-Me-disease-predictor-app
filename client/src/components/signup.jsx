import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/form.css';
const axios=require('axios');
class SignUpForm extends Component {
    constructor() {
        super();
        this.state = {
          fields: {},
          errors: {},
          mail:''
        }
  
        this.handleChange = this.handleChange.bind(this);
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
  
    };

    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
          fields
        });
  
    }

    submituserRegistrationForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            let fields =this.state.fields;        
            axios.post("http://localhost:5000/signups/register",{ 
              name : fields["username"],
              email : fields["emailid"],
              password :fields["password"],
              repassword : fields["repeatpassword"]
          }).then(function (response) {
            console.log(response.data)})
          .catch(err=>{alert(err.response.data)});
          let mail=this.state.fields.emailid;
          if(fields["emailid"]!=="undefined")
          {
            this.setState({mail: mail});
          }
            fields["username"] = "";
            fields["emailid"] = "";
            fields["password"] = "";
            fields["repeatpassword"] = "";
            this.setState({fields:fields});
            window.location.assign('http://localhost:8000/heart');
           // this.props.history.push("/predict");
        }
        //backend service call , sucess methid .then {this.setState({redirectToProdict: true})}
    }

    validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
  
        if (!fields["username"]) {
          formIsValid = false;
          errors["username"] = "*Please enter your username.";
        }
  
        if (typeof fields["username"] !== "undefined") {
          if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
            formIsValid = false;
            errors["username"] = "*Please enter alphabet characters only.";
          }
        }
  
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
  
        if (typeof fields["password"] !== "undefined") {
          if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
            formIsValid = false;
            errors["password"] = "*Please enter secure and strong password.";
          }
        }

        if (!fields["repeatpassword"]) {
            formIsValid = false;
            errors["repeatpassword"] = "*Please enter your repeated password.";
        }
    
          if (typeof fields["repeatpassword"] !== "undefined") {
            if (fields["repeatpassword"] !== fields["password"]) {
              formIsValid = false;
              errors["repeatpassword"] = "*Please enter same password.";
            }
        }
  
        this.setState({
          errors: errors
        });
        return formIsValid;
  
  
    }
    

    render() {
      //if (this.state.reeiercttopredict) {<Redirect to='predict'/>}
        return (
    <div className="App">
      <div className="App__Aside bg"></div>
      <div className="App__Form">
        <div className="FormCenter">
            <form onSubmit={this.submituserRegistrationForm} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Full Name</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="username" value={this.state.fields.username} onChange={this.handleChange} />
                <div className="errorMsg">{this.state.errors.username}</div>
              </div>
              
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
                <label className="FormField__Label" htmlFor="password">Repeat password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Repeat your password" name="repeatpassword" value={this.state.fields.repeatpassword} onChange={this.handleChange} />
                <div className="errorMsg">{this.state.errors.repeatpassword}</div>
              </div>
              <div className="FormField">
                <label className="FormField__CheckboxLabel">
                    <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" checked/> I agree all statements in <Link to="/termsandconditions" className="FormField__TermsLink">terms of service</Link>
                </label>
                <div className="errorMsg">{this.state.errors.hasAgreed}</div>
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20" >Sign Up</button> <Link to="/clickhere/login" className="FormField__Link">I'm already member</Link>
              </div>
            </form>
          </div>
        </div>
      </div>    
        );
    }
}
export default SignUpForm;