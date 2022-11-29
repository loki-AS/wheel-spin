import React from 'react'

const SpinButton = (props) => {

    return (
        <div className=''>
            <button className='border-0 rounded-lg bg-[#146531] p-1 font-poppins cursor-pointer font-bold text-white' id='spinButton' onClick={() => props.handleSpin()}>SPIN</button>
        </div>
    )
}

export default SpinButton