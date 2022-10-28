import {useState, useEffect} from 'react';
import './ProjectDetail.css';
export default function ProjectDetail({projDet, projectName}) {
    console.log('det',projDet[0])
    // const hello = projDet
    return(
        <div className='Image'>
            {/* <img src={projDet[0].Images} alt="" /> */}
            {/* <button onClick={tester}>hello</button> */}
        </div>
    );

}