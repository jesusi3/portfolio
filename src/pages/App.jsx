
import { Routes, Route } from 'react-router-dom';

// import {motion, AnimatePresence} from 'framer-motion';
import HomePage from './HomePage';
import ProjectPage from './ProjectPage';
import LandingPage from './LandingPage';
import Nav from '../components/Nav/Nav';

import './App.css';

export default function App() {

    return (
          <div className="App">
              <Nav />
            
              <Routes>
                  <Route path="/" element={<LandingPage />} ></Route>
                  <Route path="/about" element={<HomePage />} ></Route>
                  <Route path="/project" element={<ProjectPage />} ></Route>
              </Routes>

          </div>
    );
}
