import React from 'react'
import RegionPic from '../../assets/regionPic.png'
import StarPic from '../../assets/star.png'
import lieuPic from '../../assets/lieuTour.png'
import visitPic from '../../assets/visits.png'
import UserPic from '../../assets/User.png'
import EmailPic from '../../assets/email.png'
import PhonePic from '../../assets/phone.png'
export default function RegionCard() {
  return (
    <div className="bg-white h-[600px] rounded-2xl shadow-2xl flex flex-col gap-3">
        <div className='rounded-2xl px-2 py-3'>
            <img src={RegionPic}/>
        </div>
        <div className='flex flex-row items-center justify-between px-5 '>
            <div className='flex flex-col'>
                <h1 className='font-semibold font-poppins text-terhal-black text-lg'>Laghouat</h1>
                <p className='font-poppins text-terhal-black  font-extralight '>Wilaya</p>
            </div>
            <div className='flex flex-row gap-2 items-end'>
                <img src={StarPic}/> 
                <p className='font-poppins font-normal'>4.8</p>
            </div>
        </div>

        <div className='flex flex-row  gap-10 px-5 '>
            <div className='flex flex-row gap-2'> <img className='h-4' src={visitPic}/> <p className=' text-xs font-poppins font-normal'>1200 visiteurs</p></div>
            <div className='flex flex-row gap-2'> <img className='h-4' src={lieuPic}/> <p className='text-xs font-poppins font-normal'>24 lieux touristiques</p></div>
        </div>

        <hr className='h-1 mx-4 bg-black text-bold'/>
        <div className='flex flex-col items-start px-5 gap-2'>
        <h1 className='font-semibold font-poppins text-terhal-black text-lg'>Responsable de Laghouat</h1>
    
        <div className='flex flex-col'>
        <div className='flex flex-row items-center gap-3'>
            <img src={UserPic} className='w-9 h-9'/>
            <p className='font-poppins text-base'>Hicham Tihami</p>
            </div>
            <p className='text-terhal-gray2 text-xs font-poppins'>Nom et prénom</p>
        </div>
        
        <div className='flex flex-col'>
        <div className='flex flex-row items-center gap-3'>
            <img src={EmailPic} className='w-9 h-9'/>
            <p className='font-poppins text-base'>ka_adjou@esi.dz</p>
            </div>
            <p className='text-terhal-gray2 text-xs font-poppins'>E-Mail</p>
        </div>

        <div className='flex flex-col'>
        <div className='flex flex-row items-center gap-3'>
            <img src={PhonePic} className='w-9 h-9'/>
            <p className='font-poppins text-base'>0559309610</p>
            </div>
            <p className='text-terhal-gray2 text-xs font-poppins'>Numéro de télephone</p>
        </div>

        </div>
       
       <button className='bg-terhal-blue2 mx-24 rounded-xl font-poppins font-semibold hover:bg-blue-300 text-white py-3'>Modifer</button>
    </div>
  )
}
