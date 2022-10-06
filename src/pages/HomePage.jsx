import { useState } from 'react';
import AboutMe from '../components/AboutMe/AboutMe';
import ProfilePic from '../components/ProfilePic/ProfilePic';
import Skills from '../components/Skills/Skills';
import './App.css';

export default function HomePage() {

    return (
    <>
        <div className='HomeLayout'>
            <div className='Row-1'>
            <AboutMe className='AboutMe' />
            <div className='R1-C2'>
                <ProfilePic className='ProfilePic'/>
                <div className='Click'>Click Me</div>
            </div>
            </div>
            <div className='Row-2'>
            <Skills className='Skills' />
            </div>
        </div>        
    </>
    );
}