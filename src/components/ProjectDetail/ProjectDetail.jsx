import './ProjectDetail.css';
export default function ProjectDetail({projects, projectName}) {
    const preimages = projects.find( (img) => img.Title === projectName );
    console.log(preimages);
    const images = preimages.Images.map(img => img);
    console.log(images[1])
    return(
        <div className='Image'>
            <img src="/GreenNeworderpage.png" alt="Green-Neworderpage"/>
        </div>
    );

}