// import {motion} from 'framer-motion';
import SimpleSlider from '../components/Slider/SimpleSlider';
import './ProjectPage.css';



export default function ProjectPage() {

    return (
    <>
            <div className='ProjectPage'>
                <div className='curved'>
                    <h1>Green-Pill</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quisquam obcaecati commodi, perferendis accusamus labore corporis et eligendi sed soluta rerum nam! Voluptates facilis fugit temporibus dolore nobis delectus ducimus.</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 179"><path fill="#0499F5" fillOpacity="1" d="M0,160L60,138.7C120,117,240,75,360,80C480,85,600,139,720,144C840,149,960,107,1080,96C1200,85,1320,107,1380,117.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                    <div className='Project-Names'>
                        <div>
                        <SimpleSlider />
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}