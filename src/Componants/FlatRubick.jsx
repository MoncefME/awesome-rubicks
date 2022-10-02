import React from 'react';
import Face from './Face';
const faces = ['U', 'R', 'F', 'D', 'L', 'B'];
const colors = ['white', 'red-600', 'green-700', 'yellow-300', 'orange-500', 'blue-600'];

function FlatRubick() {
    return (
        <div className='grid grid-areas-layout grid-cols-layout grid-rows-layout w-80 h-60'>
            {faces.map((face, Findex) => <Face key={Findex} class_Name={`grid-in-face${faces[Findex]}`} color={`bg-${colors[Findex]}`} unique={faces[Findex]} />)}
            {/* <Face class_Name="grid-in-faceU" color="bg-white" />
            <Face class_Name="grid-in-faceR" color="bg-red-600" />
            <Face class_Name="grid-in-faceF" color="bg-green-700" />
            <Face class_Name="grid-in-faceD" color="bg-yellow-300" />
            <Face class_Name="grid-in-faceL" color="bg-orange-500" />
            <Face class_Name="grid-in-faceB" color="bg-blue-600" /> */}
        </div>
    )
}

export default FlatRubick