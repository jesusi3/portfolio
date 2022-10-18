import './ProjectDetail.css';
export default function ProjectDetail({projDet, projectName}) {
    // console.log(projDet);
    const four = projDet.map( x => x.Images);
    console.log('four',four[0])
    // const three = four.map(x => <div>{x}</div>);
    const three = four.map(x => <img src={x} alt="Green-Neworderpage"/>);
    console.log('three', three[0]);
    // console.log('three', three[0]);
    return(
        <div className='Image'>
            {/* <img src={three} alt="Green-Neworderpage"/> */}
            {three}
        </div>
    );

}