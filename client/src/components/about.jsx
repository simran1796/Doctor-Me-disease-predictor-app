import React, { Component } from 'react';
class About extends Component
{
    render()
    {
        return(
            <div className="bg">
            <div className="main-content-header">
  <h1>
    <span className="colorchange">About Our System</span>.
  </h1>
  <p style={{color: 'white'}}><b>
    <h4>
    Welcome to our system. For using this you first need to signup or signin and
    then fill the medical form for perfect diagnosis. After that you can go for
    any doctor as per your reqirements. This is a non-profitable public welfare
    system,with no demanding money. We even provide you with the emergency services with the help
    of google maps. Hope you would like our effort in this and please do fill
    our feedback form so that we can improve further. </h4> </b> 
  </p><br /><b>
  <p style={{color: 'white'}} ><h4>
    For further queries contact:
    <span className="colorchange"><br/>
      <a title="Call" href="tel:9041027472">
        904.102.7472
      </a><br/>
      <a title="Call" href="tel:8847337166">
        884.733.7166
      </a>
    </span></h4>
  </p></b>
</div>
</div>
        )
    }
}
export default About;