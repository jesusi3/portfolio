import { useState } from 'react';
import HomePage from './HomePage';
// import AboutMe from '../components/AboutMe/AboutMe';
// import ProfilePic from '../components/ProfilePic/ProfilePic';
// import Skills from '../components/Skills/Skills';
import './App.css';

export default function App() {
    const [ page, setPage] = useState(false);
    return (
        <div className="App">
            <header className="App-header">
                <h1>portfolio</h1>
            </header>
            <HomePage />

        </div>
    );
}