import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify';

export const Result = createContext()

const ResultContext = ({children}) => {

  const [offer, setOffer] = useState("")
  const [state, setState] = useState(false)

  const navigate = useNavigate()


  function handleSpin() {
    if (!state) {
      let element = document.getElementById("circle")
      let deg = 0;
      element.style.pointerEvents = 'none';
      deg = Math.floor(5000 + Math.random() * 5000)
      // console.log(deg)
      element.style.transition = 'all 10s ease-out';
      element.style.transform = `rotate(${deg}deg)`
      let num = 6 - ((deg % 360) / 360) * 5;
      console.log(num)
      setTimeout(showCode, 10000, num)
      setState(true)
    }
    else {
      toast.warning("Spin in Progress! refresh and try again later.")
    }
  }

  function showCode(num) {
    if (num >= 1 && num < 2) {
      setOffer("BUY 1 GET 1 FREE")
    }
    else if (num >= 2 && num < 3) {
      setOffer("FREE COFFEE MUG ON PURCHASE WORTH 1000+")
    }
    else if (num >= 3 && num < 4) {
      setOffer("BUY 2 EFFERVESCENT TABLETS & GET 1 FREE")
    }
    else if (num >= 4 && num < 5) {
      setOffer("FREE 50G TEA ON PURCHASE OF RS. 500")
    }
    else if (num >= 5 && num < 6) {
      setOffer("HOT CHOCLATE FREE WITH TEA")
    }
    else {
      setOffer("30% SITEWIDE OFF")
    }

    navigate("/result")
  }

  return (
    <Result.Provider value={{handleSpin, offer}}>
        {children}
        <ToastContainer 
        position='bottom-left'
        autoClose={3000}
        />
    </Result.Provider>
  )
}

export default ResultContext