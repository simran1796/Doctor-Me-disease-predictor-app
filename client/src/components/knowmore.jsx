import React, { Component } from 'react';
import '../css/style.css';
import '../css/background.css';
class W2 extends Component
{
    render()
    {
        return(
            <div className="bg">
            <div className="main-content-header">
                <h1 align="top">
                <span className="colorchange">DOCTOR-ME!</span>.
                </h1>
      <p style={{color: 'white'}}><b>
      <h3>Hello, People!</h3>
      <p>
        This is a web app developed for heart disease prediction, diabetes prediction and breast cancer prediciton using Machine Learning based on the Kaggle Datasets.
      </p>
      <p>
       <cite align="right"> - Developed by <strong>Pratham And Simran</strong></cite>
      </p><br/>
      <h5>  <span className="colorchange">HEART DISEASE PREDICTION </span>  </h5>
                <p>
                  Heart disease is one of the biggest cause for morbidity and
                  mortality among the population of the world. Prediction of
                  cardiovascular disease is regarded as one of the most
                  important subject in the section of clinical data analysis.
                  The amount of data in the healthcare industry is huge. Data
                  mining turns the large collection of raw healthcare data into
                  information that can help to make informed decision and
                  prediction.
                </p>
                <h5>  <span className="colorchange"> DIABETES PREDICTION </span>  </h5>
                <p>
                  Diabetes is considered as one of the deadliest and chronic
                  diseases which causes an increase in blood sugar. Many
                  complications occur if diabetes remains untreated and
                  unidentified. The tedious identifying process results in
                  visiting of a patient to a diagnostic center and consulting
                  doctor. But the rise in machine learning approaches solves
                  this critical problem.
                </p>
                <h5>  <span className="colorchange">  BREAST CANCER PREDICTION </span>  </h5>
                <p>
                  Breast cancer is one of the most common cancers among
                  women worldwide, representing the majority of new cancer cases
                  and cancer-related deaths according to global statistics,
                  making it a significant public health problem in today’s
                  society.
                </p>
      </b>
      </p>
        </div>
    </div>
        )
    }
}
export default W2;
