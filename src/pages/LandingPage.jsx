import { Link } from 'react-router-dom';
// import {motion, AnimatePresence} from 'framer-motion';
import './LandingPage.css';

export default function LandingPage({home, setHome}) {
    return (
        // <AnimatePresence>
            <div className='LandingPage'>
                <Link to='/about'> <div onClick={() => setHome(!home)} >Hello</div> </Link>
            </div>
        
        // </AnimatePresence>
    );
}