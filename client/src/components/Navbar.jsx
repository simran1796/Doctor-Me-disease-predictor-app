import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Navbar extends Component {
    render() {
        return (
    <div >
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  />
<nav className="navbar navbar-expand navbar-light" style={{ backgroundColor: "#66DAC7" }}>
  <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
  <Link className="navbar-brand" to="/">
      <img src={require("../images/p1.PNG")} alt="logo" style={{ width: 70 }} />
    </Link>
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">
          About
        </Link>
      </li>
    </ul>
  </div>
  <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a className="nav-link" href="/contact">
          Contact Us
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/emergency">
          Emergency
        </a>
      </li>
    </ul>
  </div>
</nav>
  </div>
        )
    }
}
export default Navbar;