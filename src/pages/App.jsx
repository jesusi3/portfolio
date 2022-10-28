
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ProjectPage from './ProjectPage';
import LandingPage from './LandingPage';
// import { projects } from '../Data';

import './App.css';

export default function App() {
    return (
      <div className="App">
          <Routes>
              <Route path="/about" element={<HomePage />} ></Route>
              <Route path="/project" element={<ProjectPage/>} ></Route>
              <Route path="/" element={<LandingPage/>} ></Route>
          </Routes>
      </div>
    );
}
