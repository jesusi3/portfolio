import './ProjectDetail.css';
export default function ProjectDetail({projDet, projectName}) {
    // console.log(projDet);
    const ims = projDet.map( x => x.Images[0]);
    console.log(ims)
    return(
        <div className='Image'>
            {/* <img src={images[0]} alt="Green-Neworderpage"/> */}
        </div>
    );

}