import { useState } from 'react'
import { genPassword } from './util/genPassword.js'
import { GrRefresh } from "react-icons/gr";
import {  HiMinusSm, HiPlusSm } from "react-icons/hi";
import toast, { Toaster } from 'react-hot-toast'
import './App.css'
import PasswordGenerator from './Password gertor.jsx';

function App() {
  const [ length, setLength ] = useState(12)
  const [incUpper,setIncUpper] = useState(true)
  const [incLower,setIncLower] = useState(true)
  const [incNumber,setIncNumber] = useState(true)
  const [incSymbol,setIncSymbol] = useState(true)
  const [ retry, setRetry ] = useState(false)
  let {password,status}= genPassword(length,incUpper,incLower,incNumber,incSymbol)
  let bgcolor = "bg-white"

  switch (status) {
    case "Very Strong":
      bgcolor= "bg-lime-500"
      break;
    case "Strong":
      bgcolor = "bg-green-500"
      break;
    case "Medium":
      bgcolor = "bg-yellow-500"
      break;
    case "Weak":
      bgcolor = "bg-red-500"
      break;
    default:
      break;
  }

  return (
    <div className=''>
      <div className="mx-auto max-w-2xl">
        <h1 className='text-6xl font-bold '>
          Password Generator
        </h1>
        <p className='text-xl mt-4'>Create a strong and secure password</p>
      </div>
      <div className='flex flex-col items-end justify-center mt-10'>
        <div className='flex gap-2'>
          <div className=' border rounded-full p-2 shadow-inner'>
            <input type="text" disabled value={password} className='max-w-2xl p-2' />
            <span className={`mr-2 ${bgcolor} text-black font-mono text-sm font-bold p-2 rounded-xl min-w-0 w-24`}>{status}</span>
            <button onClick={() => setRetry(!retry)} className='text-xl p-2 translate-y-1 cursor-pointer'><GrRefresh /></button>
          </div>
          <button onClick={() => toast.success("Copied")}
            className='bg-blue-500 shadow-xl ms-4 font-bold w-20 text-white rounded-full transform transition-transform duration-300 ease-in-out hover:scale-110' >
            Copy</button>
        </div>
        <div className='flex gap-2 mt-5'>
        <label>Length: {length}</label>
          <button 
          className={`${length <= 0 ? 'border-slate-500 text-slate-500' : 'hover:text-white hover:bg-black transform transition-transform duration-300 ease-in-out hover:scale-125 border-black'} mx-3 border rounded-full  p-2 text-xl`}
          onClick={() => setLength(length-1)}><HiMinusSm /></button>
          <input type="range" min="1" max="40" value={length} onChange={(e) => setLength(e.target.value)} 
          className='w-80 text-lg mx-5 cursor-pointer bg-white scale-110' />
          <button className={`${length >= 40 ? 'border-slate-500 text-slate-500' : 'hover:text-white hover:bg-black transform transition-transform duration-300 ease-in-out hover:scale-125 border-black'} mx-3 border rounded-full  p-2 text-xl`}
           onClick={() => setLength(parseInt(length)+1)} {...length >= 40 ? {disabled: true} : {disabled: false}}><HiPlusSm /></button>
        </div>
        <div className='flex justify-between w-72 mt-5'>
        <div>
        <input type='checkbox' checked={incUpper} onChange={(e) => setIncUpper(e.target.checked)} />
        <label className='ml-1 font-bold'>ABC</label>
        </div>
        <div>
        <input type='checkbox' checked={incLower} onChange={(e) => setIncLower(e.target.checked)} />
        <label className='ml-1 font-bold'>abc</label>
        </div>
        <div>
        <input type='checkbox' checked={incNumber} onChange={(e) => setIncNumber(e.target.checked)}
          className=' rounded checked:ring-white checked:text-black shadow-inner text-lg w-5 h-5 '
         />
        <label className='ml-1 font-bold'>012</label>
        </div>
        <div>
        <input type='checkbox' checked={incSymbol} onChange={(e) => setIncSymbol(e.target.checked)} />
        <label className='ml-1 font-bold'>!@#</label>
        </div>
        </div>
        <PasswordGenerator />
      </div>
      <Toaster />
    </div>
  )
}

export default App
