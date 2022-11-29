import React, { useState } from 'react'
import { AiOutlineMail } from "react-icons/ai"
import { FiPhoneCall } from "react-icons/fi"
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {

  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    navigate("/game")
  }

  return (
    <div className='z-50'>
        <form onSubmit={handleSubmit}>
      <div className="relative z-0 rounded-md  my-5 mb-6 w-full group bg-white">
        <div className='flex'>
        <AiOutlineMail className='mt-5 mx-5' size={25} />
        <div>
        <input 
        type="email" 
        name="email" 
        id="floating_email" 
        className="block py-2.5 px-0 text-lg bg-transparent border-0 border-b-2  appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer" 
        placeholder=" " 
        required 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
      <label className="peer-focus:font-medium absolute px-5 text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-5 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
        </div>
         </div>
      </div>
      <div className="relative z-0 rounded-md my-5 mb-6 w-full group bg-white">
        <div className='flex'>
        <FiPhoneCall className='mt-5 mx-5' size={25} />
        <div>
        <input 
        type="tel"  
        name="phone" 
        id="floating_phone" 
        className="block py-2.5 px-0 text-lg bg-transparent border-0 border-b-2  appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer" 
        placeholder=" " 
        maxLength="14" 
        required 
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        />
      <label className="peer-focus:font-medium absolute px-5 text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-5 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
        </div>
         </div>
      </div>
      <div className="relative backdrop-blur-md my-5 mb-6 group flex justify-center items-center border p-1 rounded-md border-black">
      <input id="terms" type="checkbox" value="" className="w-6 h-6 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
        <h1 className='ml-3 text-sm font-sans'>I agree to receiving recurring automated messages at the number I have provided. Consent is not a condition to purchase.</h1>
      </div>
      <button type="submit" className='bg-[#146531] text-white flex w-full justify-center items-center font-poppins p-2 rounded-full text-xl'>Try your luck</button>
        <h1 className='my-3 text-sm flex justify-center items-center'>*You can spin the wheel only once! *If you win, you can claim your coupon for 10 minutes only!</h1>
    </form>
    </div>
  )
}

export default Form