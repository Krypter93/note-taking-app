import React from 'react'
import { GiNotebook } from "react-icons/gi";

export default function Sidebar() {
  return (
    <div className='flex flex-col w-1/4 h-screen bg-violet-800'>
      <h1 className='p-2 mx-auto text-white font-mono font-bold text-4xl'>Note Taking App</h1>

      <GiNotebook className='text-white mt-2 mx-auto font-bold text-9xl'/>

      <button className='p-2 mt-10 mx-auto bg-gray-50 w-2/3 rounded'> 
        <p className='text-xl'> + Create New Note</p>
      </button>

    </div>
  )
}
