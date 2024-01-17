import React from 'react'
import Navbar from '../../navbar/Navbar.js' 
import Footer from '../../footer/Footer.js'
import './ResourcesPage.css'
import truthprojectImage from './truth-project.png'
import baiImage from './bai.png'

function ResourcesPage() {
    return (
        <>

        <div>
            <Navbar />

            <h1>important organizations to follow: </h1>
            <div>
                <h2><strong>Black AIDS Institute:</strong> </h2>
                <ul>
                    <li>Their mission: To end HIV in black communities by engaging and mobilizing black instituitions and individual to confront the epidemic</li>
                    <li>Link: https://blackaids.org/</li>
                </ul>

                <img src={baiImage} alt="baiImage" className="baiImage" />
            </div>

            <div>
                <h2><strong>The T.R.U.T.H project: </strong></h2>
                <ul>
                    <li>The Telling Real Unapologetic Truth Through Healing (T.R.U.T.H.) Project, Inc. is a 501(c) (3) non-profit organization whose mission is to educate and mobilize LGBTQ communities of color and their allies through social arts that promote mental, emotional, and sexual health.</li>
                    <li>Link: https://www.truthprojecthtx.org/</li>
                </ul>

                <img src={truthprojectImage} alt="truthprojectImage" className="truthprojectImage" />
            </div>

            <h1>datasets</h1>
            <p>Data are regularly collected in many countries, but more analysis is needed to translate them into useful strategic information for action</p>
            <div>
                <h2>The HIV/AIDS Data Hub for the Asia-Pacific</h2>
                <ul>
                    <li>Since 2008, the HIV and AIDS Data Hub has been providing decision-makers and experts high quality, accessible and up-to-date data on HIV in Asia and the Pacific. </li>
                    <li>Link to dataset: https://www.aidsdatahub.org/</li>
                </ul>
            </div>

            <div>
                <h2>UNICEF HIV/AIDS data</h2>
                <ul>
                    <li>UNICEF Data: Monitoring the situation of children and women. </li>
                    <li>Link to dataset: https://data.unicef.org/resources/dataset/hiv-aids-statistical-tables/</li>
                </ul>
            </div>


        </div>

        <Footer />
        </>
    )
}

export default ResourcesPage;