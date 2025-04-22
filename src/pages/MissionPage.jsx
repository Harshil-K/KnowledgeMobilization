import React, { useState, useEffect } from 'react';
import banner from '../assets/team_banner.jpg';
import Layout from '../components/Layout';
import '../styling/MissionPage.css'

function MissionPage(){
    return(
        <Layout>
        <img src={banner} alt="Banner" className="banner-image" />
        <section className="mission">
        
            <h2>Our Mission</h2>
            <p className="justified-text">
            Our mission is to thoughtfully use technology to make academic knowledge more 
            accessible and safer to explore, especially for equity-seeking communities. 
            By building a user-friendly resource website, we aim to gather and organize valuable 
            resources in one place, so people can find what they need without barriers. 
            We want everyone, no matter their background, to be able to learn, grow, and feel 
            included in the sharing of knowledge.
            </p>
        </section>
        <section className="vision">
            <h2>Our Vision</h2>
            <p className="justified-text">
            We imagine a future where reliable and clear information is available to all, where 
            people feel confident exploring research that matters to them. We want to reduce the gap 
            between complex academic work and real-world understanding by bringing clarity to complexity. 
            Through this, we hope to support fairer access to education, reduce inequalities, and 
            encourage collaboration across communities and fields.
            </p>
        </section>
        <section className="values">
            <h2>Our Values</h2>
            <p className="justified-text">
            We are guided by values that keep our work rooted in fairness and care: respect, 
            transparency, accountability, and commitment. We treat each other and our users with 
            dignity, explain our goals clearly, and take responsibility for the work we do. Our focus 
            is on creating a safe, inclusive space for sharing knowledge; one that supports equity 
            and helps build stronger connections through learning.
            </p>
        </section>
        </Layout>
    )
}

export default MissionPage
