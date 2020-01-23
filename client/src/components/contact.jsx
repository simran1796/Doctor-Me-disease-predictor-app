import React, { Component } from 'react';
class Contact extends Component
{
    render()
    {
        return(
            <div className="bg">
                <a href=" https://api.whatsapp.com/send?phone=919041027472">
                    <img title="Whatsapp" src={require("../images/call.png")} alt="call" width={35} height={35} align="right" />
                </a>
                <a href="mailto:pratham.sharma.9275@gmail.com">
                    <img title="Mail" src={require("../images/mail.png")} alt="mail" width={35} height={35} align="right" />
                </a>
                <a href="http://www.instagram.com/_the_pratham_sharma_">
                    <img title="Instagram" src={require("../images/instagram.png")} alt="instagram" width={35} height={35} align="right"/>
                </a>
                <a href="https://www.facebook.com/pratham.sharma.9275">
                    <img title="Facebook" src={require("../images/facebook.png")} alt="facebook" width={35} height={35} align="right"/>
                </a>
                <h1 align="center">
                    <span className="colorchange">Contact Us</span>
                </h1>
                <h2 style={{color: 'white'}}>For any queries you can call to :</h2>
                <h2 style={{color: 'white'}}>
                Phone Number :
                    <a title="Call" href="tel:9041027472" alt="call">
                    904.102.7472
                    </a>
                </h2>
                <h2 style={{color: 'white'}}>Or can email to :</h2>
                <h2 style={{color: 'white'}}>
                Email Address :
                    <a title="Mail to" href="mailto:pratham.sharma.9275@gmail.com" alt="mail">
                    pratham.sharma.9275@gmail.com
                    </a>
                </h2>
                <h2 style={{color: 'white'}}>Or you can directly come to us :</h2>
                <iframe title="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3709.3120745416386!2d76.65767276169147!3d30.516260445844665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc32344a6e2d7%3A0x81b346dee91799ca!2sChitkara+University!5e1!3m2!1sen!2sin!4v1555213371002!5m2!1sen!2sin" width={1345} height={750} alt="maps" frameBorder={0} style={{ border: 0 }} allowFullScreen border="5px"></iframe>
            </div>
        )
    }
}
export default Contact;