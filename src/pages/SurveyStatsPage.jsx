import React from 'react';
import Layout from '../components/Layout';
import '../styling/SurveyStatsPage.css';

function SurveyStatsPage(){
    return(
        <Layout>
            <img src="Q1.png" alt="q1" className="survey-image" />
            <img src="Q2.png" alt="q2" className="survey-image" />
            <img src="Q3.png" alt="q3" className="survey-image" />
            <img src="Q4.png" alt="q4" className="survey-image" />
        </Layout>
    )
}


export default SurveyStatsPage