import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footers from '../components/Footers'

function Userlayout() {
  return (
    <div className='flex flex-col h-screen'>
        <div className="fixed top-0 w-full z-10 mb-[10px] bg-[rgba(255,255,255,0.3)] backdrop-blur-md transition-colors duration-300 ease-in-out mt-3" >
            <Header/>
        </div>
        <div className="flex-1">
            <Outlet/>

        </div>
        <div className="section" id='footer'>
          <Footers/>
        </div>

      
    </div>
  )
}

export default Userlayout
