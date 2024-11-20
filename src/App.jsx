import { useEffect, useState } from 'react'
import { genPassword } from './util/genPassword.js'
import { GrRefresh } from "react-icons/gr";
import {  HiMinusSm, HiPlusSm } from "react-icons/hi";
import toast, { Toaster } from 'react-hot-toast'
import { TbEyeClosed , TbEye } from "react-icons/tb";
import './App.css'

function App() {
  const [ length, setLength ] = useState(12)
  const [ incUpper, setIncUpper ] = useState(true)
  const [ incLower, setIncLower ] = useState(true)
  const [ incNumber, setIncNumber ] = useState(true)
  const [ incSymbol, setIncSymbol ] = useState(true)
  const [ retry, setRetry ] = useState(false)
  const [ inputType, setInputType ] = useState("password")
  let bgcolor = "bg-white"
  let { password, status } = genPassword(length, incUpper, incLower, incNumber, incSymbol)

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
      bgcolor = "bg-blue-500"
      break;
  }

  useEffect(() => {
    genPassword(length, incUpper, incLower, incNumber, incSymbol)
  }, [length, incUpper, incLower, incNumber, incSymbol, retry])

  return (
    <div className='text-white' >
      <div className="mx-auto max-w-2xl">
        <h1 className='text-6xl font-bold '>
          Password Generator
        </h1>
        <p className='text-xl mt-4'>Create a strong and secure password</p>
      </div>
      <div className='flex flex-col items-center justify-center mt-10'>
        <div className='flex gap-2'>
          <div className=' border rounded-full p-2.5 shadow-inner flex flex-row'>
            <span className='text-2xl mx-2 translate-y-2.5'>
              {inputType ==="password" ? <TbEyeClosed onClick={() => setInputType("text")} className='cursor-pointer' /> :
             <TbEye onClick={() => setInputType("password")} className='cursor-pointer' />}
            </span>
            <input type={inputType} disabled value={password} className='bg-slate-900 text-white text-lg w-56 font-mono max-w-3xl p-2' />
            <span className={`mr-2 shadow-inner translate-y-1 font-mono ${bgcolor} text-black  text-sm font-bold p-2 rounded-xl min-w-0 w-24`}>{status}</span>
            <button onClick={() => setRetry(!retry)} className='text-xl p-2 translate-y-1 cursor-pointer'><GrRefresh /></button>
          </div>
          <button onClick={() => toast.success("Copied")}
            className='bg-blue-500 shadow-xl ms-4 font-bold w-20 text-white rounded-full transform transition-transform duration-300 ease-in-out hover:scale-110' >
            Copy</button>
        </div>
        <span className='font-mono mt-5 font-bold'>Length: {length}</span>
        <div className='flex gap-2 mt-2'>
          <button 
          className={`${length <= 0 ? 'bg-slate-500 text-white cursor-not-allowed' : 'hover:text-white hover:bg-blue-500 border-white transform transition-transform duration-300 ease-in-out hover:scale-125 '} mx-3 border rounded-full  p-2 text-xl`}
          onClick={() => setLength(length-1)} {...length <= 0 ? {disabled: true} : {disabled: false}}><HiMinusSm /></button>
          <input type="range" min="1" max="40" value={length} onChange={(e) => setLength(e.target.value)} 
          className='w-64 text-lg mx-5 cursor-pointer scale-110' />
          <button className={`${length >= 40 ? 'bg-slate-500 text-white cursor-not-allowed' : 'hover:text-white hover:bg-blue-500 border-white transform transition-transform duration-300 ease-in-out hover:scale-125 '} mx-3 border rounded-full  p-2 text-xl`}
           onClick={() => setLength(parseInt(length)+1)} {...length >= 40 ? {disabled: true} : {disabled: false}}><HiPlusSm /></button>
        </div>
        <span className='mt-3 font-mono font-bold'>Include Characters:</span>
        <div className='text-xl flex justify-between w-96 mt-5'>
        <div>
        <input className='w-4 h-4 ' type='checkbox' checked={incUpper} onChange={(e) => setIncUpper(e.target.checked)} />
        <label className='ml-1 font-bold'>ABC</label>
        </div>
        <div>
        <input className='w-4 h-4 ' type='checkbox' checked={incLower} onChange={(e) => setIncLower(e.target.checked)} />
        <label className='ml-1 font-bold'>abc</label>
        </div>
        <div>
        <input type='checkbox' checked={incNumber} onChange={(e) => setIncNumber(e.target.checked)}
          className='w-4 h-4 '
         />
        <label className='ml-1 font-bold'>012</label>
        </div>
        <div>
        <input className='w-4 h-4 ' type='checkbox' checked={incSymbol} onChange={(e) => setIncSymbol(e.target.checked)} />
        <label className='ml-1 font-bold'>!@#</label>
        </div>
        </div>
      </div>
      <Toaster />
    </div>
  )
}

export default App
