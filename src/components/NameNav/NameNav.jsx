import './NameNav.css'
export default function NameNav({projects, projectName, setProjectName}) {
    const project = projects.map( (project, idx) => 
        <li key={idx}
         className='neu-btn'
        onClick={() => setProjectName(project)}>
           {project}
        </li> 
        );
    return (
        <ul className='NameNav'>
            {project}
        </ul>
    );
}