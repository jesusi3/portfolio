import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HomePage from './HomePage';
import ProjectPage from './ProjectPage';
import LandingPage from './LandingPage';

import './App.css';

export default function App() {
    // const [ page, setPage] = useState(false);
    const [ page, setPage] = useState(false);
    return (
        <div className="App">
            <header className="App-header">
                <Link to='/'><h1>Portfolio</h1>
                </Link>
                
            </header>
            <Routes>
                <Route path="/" element={<LandingPage />} ></Route>
                <Route path="/about" element={<HomePage />} ></Route>
                <Route path="/project" element={<ProjectPage />} ></Route>
            </Routes>
            {/* { page ?
                <ProjectPage setPage={setPage} page={page}/>:
                <HomePage setPage={setPage} page={page}/>

            } */}
        </div>
    );
}
