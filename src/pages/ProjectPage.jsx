import { useState,useEffect, useRef } from 'react';
import * as data from '../Data';
import Nav from '../components/Nav/Nav';
import NameNav from '../components/NameNav/NameNav';
import ProjectDetail from '../components/ProjectDetail/ProjectDetail';
import './ProjectPage.css';



export default function ProjectPage() {
    const [projectName, setProjectName] = useState('');
    const [projDet, setProgDet] = useState([
        {
            Title: 'Comic-Trio',
            Description: 'Comic-Trio is a FullStack application where you have a personal Library to do as you please. To access your Library login with your Google email on the top right. When adding a Manga to your library, make sure you keep record by assuring its in your library.',
            TechStack: 'MongoDB, Mongoose, Express Js, Node Js, CSS, Bootstrap ',
            Images: 'https://i.gyazo.com/a370c65d46c77d3b724b2cbe49d7f4d0.png',
        },
        {
            Title: 'Save The Date',
            Description: 'Save the Date is a browser-based social application for recording memories. After creating an account, the user is welcomed with features, such as being able to randomly generate activity ideas. The user creates date post documenting the details of memorable ventures.',
            TechStack: 'Python, Django, PostgreSQL, CSS, Materialize, AWS Boto s3',
            Images: 'https://i.gyazo.com/b371aed78ea3a8c85acd81f7a359280f.jpg',
        },
        {
            Title: 'Green Pill',
            Description: 'Green Pill is a Full stack browser-based E-Commerce application for purchases gym related items. Functionality includes adding items to your cart and view previous orders, aswell as toggling through different categries through updating state',
            TechStack: 'React Js, Javascript, Node Js, Express, Mongoose, MongoDB, CSS',
            Images: "https://i.gyazo.com/8d828b806b3cd6fe272f45b47fa6706c.png",
        }
    
    ]);
    // const TitleRef = useRef([]);
    
    // TitleRef.current
    // useEffect( function (){
    //     async function fuck () {
    //         const five = await data.projects;
    //         setProgDet(five);
    //         TitleRef.current = five.map( project => project.Title);
    //         setProjectName(TitleRef.current[0]);
    //     }
    //     fuck();
    // }, []);
    return (
    <>
        <Nav />
        <div className='ProjectPage'>
            {/* <NameNav 
                className='NameNav'
                projects={TitleRef.current}
                setProjectName={setProjectName} 
                /> */}
            <div className='curved'>
                <ProjectDetail 
                    projDet={projDet} 
                />
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 170" className='svg'><path fill="#0499F5" fillOpacity="1" d="M0,160L60,138.7C120,117,240,75,360,80C480,85,600,139,720,144C840,149,960,107,1080,96C1200,85,1320,107,1380,117.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg> */}
            </div>

        </div>
    </>
    );
}