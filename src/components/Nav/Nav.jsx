import { Link } from 'react-router-dom';
import { SiGithub, SiLinkedin } from "react-icons/si";
import './Nav.css';

export default function Nav ({home, setHome}) {
    return (
        <div className='Nav'>
            <div className="App-header">
                <Link to='/'><h1 onClick={() => setHome(!home)}>Jesus Sanchez</h1></Link>
            </div>
            <div className='Nav-flex-end'>
                <div><Link to='/about'>AboutMe</Link></div>
                <div><Link to='/project'>Projects</Link></div>
                {/* <div><Link to='/skills'>Skills</Link></div> */}
                <div><SiLinkedin /> </div>
                <div><SiGithub/>  </div>
            </div>
        </div >
    );
}