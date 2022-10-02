import React from 'react'

function Piece({ color }) {
    console.log()
    return (
        <div
            className={`m-[1px] ${color} border border-black`}
            onClick={() => console.log(color)}>
        </div>
    )
}

export default Piece