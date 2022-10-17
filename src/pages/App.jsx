
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
// import {motion, AnimatePresence} from 'framer-motion';
import HomePage from './HomePage';
import ProjectPage from './ProjectPage';
import LandingPage from './LandingPage';
import Nav from '../components/Nav/Nav';
// import SimpleSlider from '../components/Slider/SimpleSlider';

import './App.css';

export default function App() {
    const [home, setHome] = useState(false); 
    return (
          <div className="App">
            { home ? 
            <>
              <Nav home={home} setHome={setHome}/>
              <Routes>
                  <Route path="/about" element={<HomePage />} ></Route>
                  <Route path="/project" element={<ProjectPage />} ></Route>
              </Routes>
            </>
            : 
            <Routes>
                <Route path="/*" element={<LandingPage home={home} setHome={setHome} />} ></Route>
            </Routes>
            }

          </div>
    );
}
