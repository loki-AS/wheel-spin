import React from 'react'
import { bg1, bg2, spin1, add, spin2 } from "../assets"
import Luck from './Luck'

const Game = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full overflow-hidden'>
      
      <img src={bg1} alt="bg1" className='absolute px-0 top-0 md:w-[40rem]' />
      <img src={spin1} alt="spin" className='hidden md:block absolute h-40 top-[40%]' />
      <img src={bg2} alt="bg2" className='absolute bottom-0 md:w-[40rem]' />
      
      <div className='bg-[#77d3a2]  flex flex-col justify-center'>
          <Luck />
        </div>

        <div className='hidden sm:block'>
            <img className='w-[100%] h-full object-cover' src={add} alt="add" />
        </div>
    </div>
  )
}

export default Game  
