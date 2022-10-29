import { Link } from 'react-router-dom';
import { SiGithub, SiLinkedin } from "react-icons/si";
import './Nav.css';

export default function Nav ({home, setHome}) {
    return (
        <div className='Nav'>
            <div className="App-header">
                <h1>Jesus Sanchez</h1>
            </div>
            <div className='Nav-flex-end'>
                <div><Link to='/'>AboutMe</Link></div>
                <div><Link to='/project'>Projects</Link></div>
                <div><a href="https://www.linkedin.com/in/jesus-sanchez-js508102/" target="_blank" rel="noreferrer"><SiLinkedin /></a> </div>
                <div><a href="https://github.com/jesusi3" target="_blank" rel="noreferrer"><SiGithub/></a>  </div>
            </div>
        </div >
    );
}