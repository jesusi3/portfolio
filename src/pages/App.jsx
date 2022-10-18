
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ProjectPage from './ProjectPage';
import LandingPage from './LandingPage';
import Skills from '../components/Skills/Skills';
import { projects } from '../Data';

import './App.css';

export default function App() {
    return (
      <div className="App">
          <Routes>
              <Route path="/about" element={<HomePage />} ></Route>
              <Route path="/project" element={<ProjectPage  projects={projects}/>} ></Route>
              <Route path="/skills" element={<Skills  projects={projects}/>} ></Route>
              <Route path="/*" element={<LandingPage/>} ></Route>
          </Routes>
      </div>
    );
}
