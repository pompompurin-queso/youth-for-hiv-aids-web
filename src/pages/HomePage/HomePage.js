import React from 'react'
import Navbar from '../../navbar/Navbar.js' 
import Footer from '../../footer/Footer.js'
import './HomePage.css'; 

function Homepage() {
    return (
    <div>
        <Navbar />

        <h1>mission statement</h1>
            <p>Did you know that HIV has an immense impact on marginalized communities? This includes BIPOC people and LGBTQ+ people, the working class, the elderlies, people who don't have access to good healthcare. It is a problem that affects all of us. </p>
            <p>Furthermore, HIV research is extremely lacking in funding. This results in groups of marginalized people facing the direct impacts of the ongoing HIV treatments without a more accessible and affordable treatment method</p>
            <p>Youth coders for HIV/AIDS is a movement that aims to contribute to solving that problem by creating a grassroot movement of coders, with destigmatized and decolonized understanding of the medical subject matter and a range of technical skillsets to contribute to the research for HIV in data/machine learning</p>
            
        <h1> Call for action</h1>

        <div className='call-for-action'>
            <iframe src="https://drive.google.com/file/d/1vULO9O37ZxGtTzs2koYPIdyIMrIVnOxX/preview" width="700" height="480" allow="autoplay"></iframe>
        </div>
        <strong>In honors of J. Donté Praye: </strong>
        <p>"Let’s eliminate stigma, address racial and social justice issues regarding medical access, care and treatment for people of color. We must holistically support individuals who are living with the disparity. Together we can eradicate HIV!” </p>
        <Footer />
    </div>
    )
}

export default Homepage