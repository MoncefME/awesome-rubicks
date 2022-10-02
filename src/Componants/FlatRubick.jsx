import React from 'react';
import Face from './Face';
const faces = ['U', 'R', 'F', 'D', 'L', 'B'];

function FlatRubick({ pattern }) {
    console.log("Full Pattern", pattern);
    return (
        <div className='grid grid-areas-layout grid-cols-layout grid-rows-layout w-80 h-60'>
            {faces.map((face, Findex) =>
                <Face key={Findex}
                    class_Name={`grid-in-face${faces[Findex]}`}
                    unique={faces[Findex]}
                    facePattern={pattern[Findex]} />)
            }
        </div>
    )
}

export default FlatRubick