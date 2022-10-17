// import {motion} from 'framer-motion';
import { useState,useEffect, useRef } from 'react';
import NameNav from '../components/NameNav/NameNav';
import ProjectDetail from '../components/ProjectDetail/ProjectDetail';
import './ProjectPage.css';



export default function ProjectPage({projects}) {
    const [projectName, setProjectName] = useState('');
    const TitleRef = useRef([]);
    const projectdetail = projects.map( (project, idx) => <ProjectDetail key={idx} project={project}  />)

    useEffect( function (){
        TitleRef.current = projects.map( project => project.Title);;
        setProjectName(TitleRef.current[0])
    }, [projects]);
    console.log(projectName);

    return (
    <>
            <div className='ProjectPage'>
                <NameNav projects={TitleRef.current} projectName={projectName} setProjectName={setProjectName} />
                <div className='curved'>
                    {projectdetail}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 170" className='svg'><path fill="#0499F5" fillOpacity="1" d="M0,160L60,138.7C120,117,240,75,360,80C480,85,600,139,720,144C840,149,960,107,1080,96C1200,85,1320,107,1380,117.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                    <div className='Project-Names'>
                        
                    </div>
                </div>

            </div>
        </>
    );
}