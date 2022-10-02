import React from 'react'
import Piece from './Piece';
const faces = ['U', 'R', 'F', 'D', 'L', 'B'];
const colors = ['bg-white', 'bg-red-600', 'bg-green-700', 'bg-yellow-300', 'bg-orange-500', 'bg-blue-600'];

function Face({ class_Name, facePattern }) {

    return (
        <div className={`${class_Name} w-[80px] h-[80px]  grid grid-cols-3 grid-rows-3`}>
            {facePattern.map((pattern, index) =>
                <Piece
                    color={colors[faces.indexOf(pattern)]}
                    key={index}
                />
            )}
        </div>
    )
}

export default Face