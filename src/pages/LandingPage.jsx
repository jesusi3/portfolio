import { Link } from 'react-router-dom';
import './LandingPage.css';

export default function LandingPage() {
    return (

            <div className='LandingPage'>
                <Link to='/project' ><div>Hello</div></Link>
            </div>
    );
}