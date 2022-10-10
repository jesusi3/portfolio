import { Link } from 'react-router-dom';
import {motion, AnimatePresence} from 'framer-motion';
import './LandingPage.css';

export default function LandingPage() {
    return (
        <AnimatePresence>
            <div className='LandingPage'>
                <Link to='/about'> <div>Hello</div> </Link>
            </div>
        
        </AnimatePresence>
    );
}