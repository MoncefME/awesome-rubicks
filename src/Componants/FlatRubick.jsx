import React from 'react';
import Face from './Face';
const faces = ['U', 'R', 'F', 'D', 'L', 'B'];
const colors = ['white', 'red-600', 'green-700', 'yellow-300', 'orange-500', 'blue-600'];
// color={`bg-${colors[Findex]}`}
function FlatRubick({ pattern }) {
    console.log(pattern);
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