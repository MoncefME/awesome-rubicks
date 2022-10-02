import React from 'react'

function Piece({ color, faceID }) {
    return (
        <div
            className={`m-[1px] bg-${color} border border-black`}
            onClick={() => console.log(faceID)}></div>
    )
}

export default Piece