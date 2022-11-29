import { useContext, useState } from 'react';
import SpinButton from "./SpinButton"
import { point, wheel } from "../assets"
import { Result } from '../context/ResultContext';

function Luck() {

  const { handleSpin } = useContext(Result)

  return (
      <div className='h-screen z-30 w-full flex py-5 flex-col justify-center items-center'>
    <div className='absolute z-20 '>
        <img src={point} alt="arrow" className='relative w-16 h-18 mb-10' />
    </div>
    <div className='mx-5' id="circle">
        <img src={wheel} alt="wheel" />
    </div>
    <div className='py-2'>
    <SpinButton handleSpin={handleSpin} />
    </div>
    </div>
  );
}

export default Luck;

