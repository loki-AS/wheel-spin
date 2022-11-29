import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { add, bg1, bg2, spin1, spin2 } from '../assets'
import { Result } from '../context/ResultContext'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResultsPage = () => {

    const navigate = useNavigate()

    const { offer } = useContext(Result)

    function copyCode() {
        navigator.clipboard.writeText("XAXPDF20")
        toast.success("Code Copied !")
    }

    const handleClose = () => {
        navigator.clipboard.writeText("XAXPDF20")
        toast.success("Code Copied !")
        navigate("/game")   
    }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen'>

    <img src={bg1} alt="bg1" className='absolute px-0 top-0 md:w-[40rem]' />
    <img src={spin1} alt="spin" className='hidden md:block absolute h-40 top-[40%]' />
    <img src={spin2} alt="spin2" className='md:hidden block absolute h-32 left-[30%]' />
    <img src={bg2} alt="bg2" className='absolute bottom-0 md:w-[40rem]' />
    
    <div className='bg-[#77d3a2] flex flex-col justify-center items-center'>
    <h1 className='text-xl font-poppins font-bold'>Congrats! You Won:</h1>
    <h1 className='text-2xl font-poppins font-bold py-2 mx-10'>{offer}</h1>
            <div className='flex'>
                <h1 className='p-2 tracking-[1px] text-2xl font-bold font-poppins rounded-l-lg bg-[#14141433] text-white'>XAXPDF20</h1>
                <button className='p-2 uppercase text-xl font-bold rounded-r-lg bg-[#146531] font-poppins text-white' onClick={() => copyCode()} >Copy</button>
            </div>
            <button className='mt-3 bg-[#146531] text-white p-2 text-xl font-bold font-poppins rounded-3xl px-4' onClick={handleClose}>Close Panel & Copy</button>
            <h1 className='text-[9px] font-poppins mt-2 text-[#146531]'>*You can claim your coupon for 10 minutes only!</h1>
            <ToastContainer
            position='bottom-left'
            autoClose={3000}
            type="success"
            />
            </div>

    <div className='hidden sm:block'>
        <img className='w-[100%] h-full object-cover' src={add} alt="add" />
    </div>

</div>
  )
}

export default ResultsPage