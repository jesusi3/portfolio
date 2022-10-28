import './ProjectDetail.css';
export default function ProjectDetail({projDet, projectName}) {
    // console.log(projDet);
    const four = projDet.map( x => x.Images);
    console.log('four',four[0])
    const two = four[0];
    const three = two.map((x, idx) => <img key={idx} src={x} alt={idx} />);
    return(
        <div className='Image'>
            {/* <img src={three} alt="Green-Neworderpage"/> */}
            {three}
        </div>
    );

}