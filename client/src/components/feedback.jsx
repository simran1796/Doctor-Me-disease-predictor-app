import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import '../css/form.css';
const axios=require('axios');
export default class Feedback extends Component
{
  constructor() {
    super();
    this.state = {
      experience:'good',
      email:'',
      comments:'',
      error:'',
      flag:'false'
    }

    this.handleChange = this.handleChange.bind(this);
    this.submit= this.submit.bind(this);

};
  componentDidMount(){
    this.props.fxn();
  }
   handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
    }
    submit(e) {
      e.preventDefault();
      if (this.validateForm()) {
      let email=this.state.email;
      axios.delete("http://localhost:5000/feedbacks/remove/"+email)
     .then(function (response) {
      console.log(response.data)})
    .catch(err=>{alert(err.response.data)});

      axios.post("http://localhost:5000/feedbacks/fd",{ 
      experience: this.state.experience,
      email: this.state.email,
      comments: this.state.comments
  }).then(function (response) {
    alert(response.data)  })
  .catch(err=>{alert(err.response.data)});
    }
  }
    validateForm() {

      let email = this.state.email;
      let error= '';
      let formIsValid = true;

      if (!email) {
        formIsValid = false;
        error = "*Please enter your email-ID.";
      }

      if (typeof email !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(email)) {
          formIsValid = false;
          error= "*Please enter valid email-ID.";
        }
      }

      this.setState({
        error: error
      });
      return formIsValid;


  }
    render()
    {
        return(
<div className="bg">
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n\nbody \n {\n  \nbackground-color: #000;\n\n }\n\nhtml,\nbody\n {\n\n  height: 100%;\n \n}\n\n.imagebg \n {\n\n  background-repeat: no-repeat;\n\t\n  background-position: center center;\n\t\n  background-size: cover;\n\t\n  background-attachment: fixed;\n\t\n  position: fixed;\n\t\n  top: 0;\n left: 0; right: 0;\n bottom: 0;\n\t\n\n }\n\n.form-container\n\n {\n  \nbackground-color: #fff;\n  \n  box-shadow: 0 16px 24px 2px rgba(0,0,0,0.14), 0 20px 30px 5px rgba(0,0,0,0.12),0 8px 10px -5px rgba(0,0,0,0.3);\n    \n  border-radius: 8px;\n  font-family: 'Montserrat', Arial, Helvetica, sans-serif;\n\n }\n\n"
    }}
  />
  <div>
  <nav className="navbar navbar-expand navbar-light" style={{ backgroundColor: "#66DAC7" }}>
  <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
  <Link className="navbar-brand" to="/">
      <img align="left"  src={require("../images/p1.PNG")} alt="logo" style={{ width: 70 }} />
    </Link>
    <ul className="navbar-nav ml-auto navbar-right">
      <li className="nav-item">
      <Link className="nav-link" to="/clickhere/login" onClick={this.props.showNavbar}>
          Logout
        </Link>
      </li>
    </ul>
    </div>
    </nav>
    </div>
  <div className="container">
    <div className="row " style={{ marginTop: 50 }}>
      <div className="col-md-6 col-md-offset-3 form-container">
        <h2 align="center">Feedback</h2>
        <p> Please provide your feedback below: </p>
        <form id="reused_form">
          <div className="row">
            <div className="col-sm-12 form-group">
              <label>How do you rate your overall experience?</label>
              <p>
                <label className="radio-inline"  >
                  <input
                    type="radio"
                    name="experience"
                    id="experience"
                    value="bad"
                    onChange={this.handleChange}
                  />
                  Bad{" "}
                </label>
                <label className="radio-inline">
                  <input
                    type="radio"
                    name="experience"
                    id="experience"
                    value="average"
                    onChange={this.handleChange}
                  />
                  Average
                </label>
                <label className="radio-inline">
                  <input
                    type="radio"
                    name="experience"
                    id="experience"
                   value="good"
                    onChange={this.handleChange}
                    defaultChecked
                  />
                  Good{" "}
                </label>
                <label className="radio-inline">
                  <input
                    type="radio"
                    name="experience"
                    id="experience"
                    value="best"
                    onChange={this.handleChange}
                  />
                  Best{" "}
                </label>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 form-group">
            <label htmlFor="comments"> Email:</label><br/>
          <input type="textarea" id="email"  maxLength={40}
            rows={1} placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} required/>
          <div className="errorMsg">{this.state.error}</div>
          </div></div>
          <div className="row">
            <div className="col-sm-12 form-group">
              <label htmlFor="comments"> Comments:</label>
              <textarea
                className="form-control"
                type="textarea"
                name="comments"
                id="comments"
                placeholder="Your Comments"
                maxLength={6000}
                rows={7}
                defaultValue={""}
                value={this.state.comments}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 form-group">
              <button
                className="btn btn-lg btn-warning btn-block"
                onClick={this.submit}
              >
                Post{" "}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
 )
}
}
