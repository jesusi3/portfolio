
import './Random.css';
export default function Random({project}) {


    return (
        <ul className='Random'>
            <li className='Wrapper'>
                <div className='Pic'>
                    <img src={project.Images} alt=""/>
                </div>
                <div className='Details'>
                    <div className='PTitle'>{project.Title}</div>
                    <div className='Demo'>
                        <a href={project.Demo} target="_blank" rel="noreferrer">Demo</a>
                        <a href={project.SourceCode} target="_blank" rel="noreferrer">Source Code</a>
                    </div>
                    <p>{project.Description}</p>
                    <h4 className='Tech'>TechStack:<div className='Tech-2'>{project.TechStack}</div></h4>
                </div>
            </li>
        </ul>
    );
}