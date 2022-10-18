// import {motion} from 'framer-motion';
// import { Link } from 'react-router-dom';
import AboutMe from '../components/AboutMe/AboutMe';
import ProfilePic from '../components/ProfilePic/ProfilePic';
import Skills from '../components/Skills/Skills';
import Nav from '../components/Nav/Nav';
// import AnimatedPage from './AnimatedPage';
import './HomePage.css';

export default function HomePage() {

    return (
    <>
        <Nav/>
        <div className='HomeLayout'>
            <div className='Row-1'>
                <AboutMe className='AboutMe' />
                <div className='R1-C2'>
                    <ProfilePic className='ProfilePic'/> 
                </div>
            </div>
            <div className='Row-2'>
                <Skills className='Skills' />
            </div>
        </div>    
    </>
    );
}