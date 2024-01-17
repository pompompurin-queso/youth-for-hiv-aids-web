import React from 'react'
import Navbar from '../../navbar/Navbar.js' 
import './CommunityPage.css'; 
import Footer from '../../footer/Footer.js'

function CommunityPage() {
    return (
        <>
        <Navbar />
        <h1>Community</h1>
        <div className= "community-info">
            <p><strong>Discord:</strong> Youth Coders Collective for HIV/AIDS</p>
            <p><strong>Tik Tok:</strong> Youth Coders Collective for HIV/AIDS</p>
            <p><strong>Founder/coder:</strong> @cheesecake</p>
            <p><strong>Coder mem:</strong> @matija</p>
            <p><strong>Mentor: </strong> Software Engineer Mohammed</p>
            <p><strong>Mentor:</strong> Doctor Adrian</p>
            <p>You can personally reach me at:</p>
            <ul>
                <li>Email: chilean.py@gmail.com</li>
            </ul>
        </div>

        <Footer />
        </>
    )
}

export default CommunityPage;