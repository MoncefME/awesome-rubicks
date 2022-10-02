import React from 'react'

function Piece({ color, faceID }) {
    return (
        <div
            className={`m-[1px] ${color} border border-black`}
            onClick={() => console.log(color)}>

        </div>
    )
}

export default Piece