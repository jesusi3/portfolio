import { useState, useEffect} from 'react';
import * as data from '../Data';
import Nav from '../components/Nav/Nav';
// import NameNav from '../components/NameNav/NameNav';
import ProjectDetail from '../components/ProjectDetail/ProjectDetail';
import './ProjectPage.css';



export default function ProjectPage() {
    // const [projectName, setProjectName] = useState('');
    const [projDet, setProgDet] = useState([]);
    // const TitleRef = useRef([]);
    
    // TitleRef.current
    useEffect( function (){
        async function fuck () {
            const five = await data.projects;
            setProgDet(five);
            // TitleRef.current = five.map( project => project.Title);
            // setProjectName(TitleRef.current[0]);
        }
        fuck();
    }, []);
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