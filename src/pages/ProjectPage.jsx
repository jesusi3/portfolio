import {motion} from 'framer-motion';
import './ProjectPage.css';
export default function ProjectPage({setPage, page}) {

    return (
        <motion.div 
            className='ProjectPage'
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0 }}
        >
            <h1 className='Test-1' onClick={() => setPage(!page)}>Project Page</h1>
        </motion.div>
    );
}