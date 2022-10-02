import React from 'react';
import Face from './Face';
const faces = ['U', 'R', 'F', 'D', 'L', 'B'];

function FlatRubick({ pattern }) {

    return (
        <div className='container w-80 h-60'>
            {faces.map((face, Findex) =>
                <Face
                    key={Findex}
                    class_Name={`face${faces[Findex]}`}
                    facePattern={pattern[Findex]}
                />)
            }
        </div>
    )
}

export default FlatRubick