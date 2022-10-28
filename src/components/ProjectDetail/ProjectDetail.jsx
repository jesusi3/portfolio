import { useState, useEffect } from 'react';

import './ProjectDetail.css';
export default function ProjectDetail({projDet, projectName}) {
    const [img, setImg] = useState([]);
    useEffect(function () {
        async function tester () {
            const look = await projDet.map( x => x.Images);
            const hi = await look[0];
            const pep = await hi.map((x, idx) => x);
            setImg(pep);
            console.log('out',img);
        }
        tester();
    }, [projDet]);
    return(
        <div className='Image'>
            
            {/* <button onClick={tester}>hello</button> */}
        </div>
    );

}