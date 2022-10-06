import {motion} from 'framer-motion';
import AboutMe from '../components/AboutMe/AboutMe';
import ProfilePic from '../components/ProfilePic/ProfilePic';
import Skills from '../components/Skills/Skills';
import './HomePage.css';

export default function HomePage({setPage, page}) {

    return (
    <>
        <motion.div className='HomeLayout'
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0 }}
        >
            <div className='Row-1'>
            <AboutMe className='AboutMe' />
            <div className='R1-C2'>
                <ProfilePic className='ProfilePic'/>
                <motion.button 
                    whileHover={{ scale: 1.03}}
                    whileTap={{ scale: 0.8}}
                    className='Click' 
                    onClick={() => setPage(!page)} 
                >
                    Click Me
                </motion.button>
            </div>
            </div>
            <div className='Row-2'>
            <Skills className='Skills' />
            </div>
        </motion.div>        
    </>
    );
}