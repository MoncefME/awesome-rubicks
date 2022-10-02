import React from 'react'
import Piece from './Piece';
const faces = ['U', 'R', 'F', 'D', 'L', 'B'];
const colors = ['white', 'red-600', 'green-700', 'yellow-300', 'orange-500', 'blue-600'];

function Face({ class_Name, unique, facePattern }) {
    const utilArr = [1, 1, 1, 1, 1, 1, 1, 1, 1];

    console.log(facePattern);
    return (
        <div className={`${class_Name} w-auto h-auto  grid grid-cols-3 grid-rows-3`}>
            {utilArr.map((cell, index) =>
                <Piece color={colors[faces.indexOf(facePattern[index])]} key={index} faceID={unique} />
            )}
        </div>
    )
}

export default Face