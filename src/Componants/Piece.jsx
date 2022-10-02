import React from 'react'

function Piece({ color }) {

    return (
        <div
            className={`m-[1px] ${color} border hover:opacity-50 border-black`}
        >
        </div>
    )
}

export default Piece