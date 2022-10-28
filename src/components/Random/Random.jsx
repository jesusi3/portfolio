
import './Random.css';
export default function Random({project}) {


    return (
        <ul className='Random'>
            <li className='Wrapper'>
                <div className='Pic'>
                    <img src={project.Images} alt=""/>
                </div>
                <div className='Details'>
                    <div>{project.Title}</div>
                    <p>{project.Description}</p>
                    <h4>{project.TechStack}</h4>
                </div>
            </li>
        </ul>
    );
}