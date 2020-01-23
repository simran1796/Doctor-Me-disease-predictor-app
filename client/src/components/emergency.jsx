import React, { Component } from 'react';
export default class Emergency extends Component
{
    render()
    {
        return(
            <div style={{ backgroundColor: "#2E4158" }}>
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d219981.82385512072!2d76.52148943456355!3d30.51493082462558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s%20heart%20hospitals%20near%20me!5e0!3m2!1sen!2sin!4v1578046488683!5m2!1sen!2sin"
            width={1500}
            height={550}
            frameBorder={0}
            style={{ border: 0 }}
            allowFullScreen
            title="hospitals near me"
            />
            </div>
        )
    }
}