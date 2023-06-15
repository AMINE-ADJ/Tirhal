import React, { useState } from 'react'
import Navbar from '../SharedComponents/Navbar'
import SideBar from '../SharedComponents/SideBar'
import Map from '../SharedComponents/Map';
export default function HomePage() {
  const [isOpen, setSideBar] = useState(false);
  const [WhatToToggle, setisWhatToToggle]=useState('');
  const showSidebar = () => setSideBar(!isOpen);
  const handleClickMap = (what) => {
    showSidebar();
    setisWhatToToggle(what);
  }
   const [place,setPlace]=useState("");
   const handleTextChangend = (text) => {
    setPlace(text);
    // handleClickMap("Region");
  };
  return (
    <div className='h-screen w-screen bg-white '>
      <Navbar sendCords={handleTextChangend}/>
      <div className='flex flex-row'>
      <SideBar  isOpen={isOpen} WhatToToggle={WhatToToggle}/>
        <div onClick={showSidebar} className=' flex flex-row gap-20 items-center justify-center w-screen rounded-3xl mx-3 my-2'>
        {/* <button onClick={()=>handleClickMap("Region")} className='bg-slate-400 rounded p-10'>Region</button>
        <button onClick={()=>handleClickMap("Lieu")} className='bg-slate-400 rounded p-10'>Lieu</button>
        <button onClick={()=>handleClickMap("AddResp")} className='bg-slate-400 rounded p-10'> Add resp Lieu</button> */}
        <Map handleClickMap={handleClickMap} pos={place}/>

        </div>
      </div>
      
      
        
    </div>
  )
}
