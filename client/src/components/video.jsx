import React ,{Component} from 'react';
import { Link } from 'react-router-dom';

export default class Video extends Component{
    render()
    {
        return(
            <div className="bg">
                <div className="main-content-header">
                    <h1 align="center">
                        <span className="colorchange">Video</span>
                    </h1>
                    <div align="center">
                        <video width={750} controls>
                        <source src={require("../images/Heart.mp4")} type="video/mp4" />
                        </video>
                    </div>
                    <br />
                    <div align="center">
                    <Link to="/clickhere" className="btn btn" style={{ backgroundColor: "#66DAC7" }}>
                    Click to proceed
                    </Link>
                    </div>
                </div>
            </div>
        )
    }
}