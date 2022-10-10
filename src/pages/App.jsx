
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {motion, AnimatePresence} from 'framer-motion';
import HomePage from './HomePage';
import ProjectPage from './ProjectPage';
import LandingPage from './LandingPage';

import './App.css';

export default function App({Component, pageProps}) {

    return (
        <AnimatePresence exitBeforeEnter>
          <motion.div 
          key={Route}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{
            duration: 0.75,
          }}
          variants={{
            initialState: {
              opacity: 0,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            },
            animateState: {
              opacity: 1,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            },
            exitState: {
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            },
          }}
          className="App"
          >
              <header className="App-header">
                  <Link to='/'><h1>My Portfolio</h1></Link>
              </header>
              <Component {...pageProps} />
              <Routes>
                  <Route path="/" element={<LandingPage />} ></Route>
                  <Route path="/about" element={<HomePage />} ></Route>
                  <Route path="/project" element={<ProjectPage />} ></Route>
              </Routes>

          </motion.div>
        </AnimatePresence>
    );
}
