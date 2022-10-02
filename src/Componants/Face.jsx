import React from 'react'
import Piece from './Piece';
const faces = ['U', 'R', 'F', 'D', 'L', 'B'];

function Face({ class_Name, color, unique }) {
    const utilArr = [1, 1, 1, 1, 1, 1, 1, 1, 1];
    return (
        <div className={`${class_Name} w-auto h-auto  grid grid-cols-3 grid-rows-3`}>
            {utilArr.map((cell, index) =>
                <Piece index={index} color={color} key={index} faceID={unique} />
            )}
        </div>
    )
}

export default Face