import React from 'react';
import Face from './Face';
const faces = ['U', 'R', 'F', 'D', 'L', 'B'];
const colors = ['white', 'red-600', 'green-700', 'yellow-300', 'orange-500', 'blue-600'];

function FlatRubick() {
    return (
        <div className='grid grid-areas-layout grid-cols-layout grid-rows-layout w-80 h-60'>
            {faces.map((face, index) => <Face class_Name={`grid-in-face${faces[index]}`} color={`bg-${colors[index]}`} key={index} />)}
        </div>
    )
}

export default FlatRubick