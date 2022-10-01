import React from 'react'

function Piece({ index, color }) {
    return (
        <div key={index} className={`m-[1px] ${color} border border-black`}></div>
    )
}

export default Piece