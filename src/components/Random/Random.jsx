

export default function Random({project}) {


    return (
        <ul>
            <li>
                <img src={project.Images} alt="" style={{width: '300px'}}/>
                <h2>{project.Title}</h2>
                <h4>{project.TechStack}</h4>
                <p>{project.Description}</p>
            </li>
        </ul>
    );
}