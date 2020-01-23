import React, { Component } from 'react';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import Navbar from './Navbar';
import Knowmore from './knowmore';
import About from './about';
import App from './App';
import Contact from './contact';
import Video from './video';
import Signup from './signup';
import Login from './login';
import Emergency from './emergency';
import Feedback from './feedback';

export default class MainPage extends Component {
    constructor(){
        super();
        this.state={
            showNavbar: true
        }
        this.fxn = this.fxn.bind(this);
        this.showNavbarFxn = this.showNavbarFxn.bind(this);
    }
    showNavbarFxn(){
        this.setState({showNavbar: true})
    }
    fxn(){
        // let {showNavbar} = this.state;
        this.setState({showNavbar: false})
    }
    render() {
        let navbar = null;
        console.log(this.state.showNavbar)
        if(this.state.showNavbar)
            navbar = <Navbar />

        return(
            <div>
                <link rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
            <Router>
                
                {navbar}

                    <Switch>  
                        
                    <Route exact path="/feedback"  render={()=><Feedback showNavbar={this.showNavbarFxn} fxn={this.fxn} />} />
                    <Route exact path="/clickhere" render={()=><Signup />} />
                    <Route exact path="/emergency" render={()=><Emergency />} />
                    <Route exact path="/knowmore" render={()=><Knowmore />} />
                    <Route exact path="/about" render={()=><About />} />
                    <Route exact path="/contact" render={()=><Contact />} />
                    <Route exact path="/knowmore/video" render={()=><Video />} />
                    <Route exact path="/clickhere/login" render={()=><Login />} />
                    <Route exact path="/" render={()=><App/>} />
                    </Switch>
            </Router>
            </div>
        )
    }
}
