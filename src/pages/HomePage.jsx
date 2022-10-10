import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';
import AboutMe from '../components/AboutMe/AboutMe';
import ProfilePic from '../components/ProfilePic/ProfilePic';
import Skills from '../components/Skills/Skills';
import AnimatedPage from './AnimatedPage';
import './HomePage.css';

export default function HomePage({setPage, page}) {

    return (
    <>
    <AnimatedPage>
        <motion.div className='HomeLayout'
            // initial={{ opacity: 0.3 }}
            // animate={{ opacity: 1 }}
            // exit={{ opacity: 0 }}
            // transition={{ duration: 0.5 }}
        >
            <div className='Row-1'>
            <AboutMe className='AboutMe' />
            <div className='R1-C2'>
                <ProfilePic className='ProfilePic'/>
                <Link to='/project'>
                    <motion.div 
                        whileHover={{ scale: 1.03}}
                        whileTap={{ scale: 0.8}}
                        className='Click' 
                        onClick={() => setPage(!page)} 
                    >
                        Click Me
                    </motion.div>
                </Link >
                
            </div>
            </div>
            <div className='Row-2'>
            <Skills className='Skills' />
            </div>
        </motion.div>
        </AnimatedPage>        
    </>
    );
}