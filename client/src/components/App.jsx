import React ,{Component} from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';
import '../css/background.css';
import Carousel from 'react-bootstrap/Carousel'
class App extends Component {
  render()
  {
  return (
    <div >
          <div className="bg">
          <Carousel>
                <Carousel.Item>
                <img className="d-block mx-auto" src={require("../images/fp1.jpg")}
                alt="First slide" width={350} height={250}/>
                </Carousel.Item>
              <Carousel.Item>
              <img className="d-block mx-auto" src={require("../images/fp2.jpg")}
              alt="Second slide" width={350} height={250}/>
              </Carousel.Item>
              <Carousel.Item>
              <img className="d-block mx-auto" src={require("../images/fp3.jpg")}
              alt="Third slide" width={350} height={250}/>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block mx-auto" src={require("../images/fp4.jpg")}
                alt="Fourth slide" width={350} height={250}/>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block mx-auto" src={require("../images/fp5.jpg")}
                alt="Fifth slide"  width={350} height={250}/>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block mx-auto" src={require("../images/fp6.jpg")}
                alt="Sixth slide" width={350} height={250} />
              </Carousel.Item>
            </Carousel>
            
           <div style={{textAlign:'center'}}>
             
            <h1> WELCOME TO <span className="colorchange">DOCTOR-ME!</span>
              . </h1><br />
            <Link to="/clickhere" className="btn btn" style={{ backgroundColor: "#66DAC7" }}> Click here to get started</Link><br /><br />
            <Link to="/knowmore" className="btn btn" style={{ backgroundColor: "#66DAC7" }}>Know more</Link>
          </div>
          </div>
      </div>
  )
  }
}

export default App;
