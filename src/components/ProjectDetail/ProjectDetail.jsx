
import Random from '../Random/Random';
import './ProjectDetail.css';
export default function ProjectDetail({projDet}) {
    // const projects = projDet.map((project, idx) => project)
    const projects = projDet.map( (project, idx) => 
        <Random key={idx} project={project} />
        );
    return(
        <div>
            {projects}
            {/* <h1>{projects.Title}</h1> */}
        </div>
    );

}