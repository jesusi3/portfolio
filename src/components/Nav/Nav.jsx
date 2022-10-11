import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav () {
    return (
        <div className='Nav'>
            <header className="App-header">
                <Link to='/'><h1>My Portfolio</h1></Link>
            </header>
            <div className='Nav-flex-end'>
                <div><Link to='/about'>AboutMe</Link></div>
                <div><Link to='/project'>Projects</Link></div>
                <div>LinkedIn </div>
                <div>Github </div>
            </div>
        </div >
    );
}