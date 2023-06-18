import React, { useState } from 'react'
import CommPic from "../../assets/commentaire.png"
import points from "../../assets/3point.png"
export default function Commentaire(props) {
    const [showDropdowns, setShowDropdowns] = useState(false);
    const toggleDropdowns = () => {
        setShowDropdowns(!showDropdowns);
      };
  return (
    <div className='flex flex-col gap-2 justify-start'>
        <div className='flex flex-row justify-between items-center px-5'>
        <div className='flex flex-row gap-3 items-start '>
            <img className='w-10 h-10' src={CommPic}/>
            <div className='flex flex-col '>
                <p className='text-sm font-poppins'>{props.Name}</p>
                <p className='text-sm font-poppins text-terhal-gray'>Il y a {props.duree} heurs </p>
                <p className='text-xs'> ⭐⭐⭐⭐⭐ </p>
            </div>
        </div>
        <button onClick={toggleDropdowns}>
        <img className='h-3 w-1 ' src={points}/>
        </button>
        </div>
        {showDropdowns && (<div className='absolute bg-white shadow-2xl ml-[355px] mt-5'>
            <button onClick={toggleDropdowns} className='text-sm font-poppins p-2 hover:text-red-500'>Supprimer</button>
            <hr className="border-terhal-black" />
            <button onClick={toggleDropdowns} className='text-sm font-poppins p-2 hover:text-red-700'>Signaler</button>
        </div>)}
       
       <p className='text-xs font-poppins pl-5'>{props.Text}</p>
       <hr className='h-[2px] mx-4 bg-black text-bold'/>
    </div>
  )
}
