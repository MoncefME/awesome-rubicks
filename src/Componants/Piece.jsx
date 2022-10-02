import React from 'react'

function Piece({ index, color, faceID }) {
    return (
        <div key={index} className={`m-[1px] ${color} border border-black`} onClick={() => console.log(faceID, index)}></div>
    )
}

export default Piece