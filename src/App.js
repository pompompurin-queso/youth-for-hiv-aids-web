import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import IntroductionPage from './pages/IntroductionPage/IntroductionPage.js'
import ResourcesPage from './pages/ResourcesPage/ResourcesPage.js'
import DataPage from './pages/DataSciencePage/DataPage.js'
import CommunityPage from './pages/CommunityPage/CommunityPage.js'
import HomePage from './pages/HomePage/HomePage.js';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/introduction" element={<IntroductionPage />} />
                <Route path="/resources" element={<ResourcesPage />} />
                <Route path="/datascience" element={<DataPage />} />
                <Route path="/community" element={<CommunityPage />} />
            </Routes>
        </Router>
    );
}


  
export default App