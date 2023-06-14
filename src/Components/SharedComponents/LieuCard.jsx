import React, { useState } from 'react'
import RegionPic from '../../assets/regionPic.png'
import StarPic from '../../assets/star.png'
import location from '../../assets/location.png'
import ouverture from '../../assets/ouverture.png'
import Usercommentaire from '../../assets/commentaire.png'
import website from '../../assets/website.png'
import PhonePic from '../../assets/phoneLieu.png'
import Commentaire from './Commentaire'
export default function LieuCard() {
    const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };


    var LieuInfo = {
        location : 'P3XF+RR7, Rue Mohamed Belouizdad',
        ouverture :'Ouvre toujours de 9H à  18H',
        phone : '0213756300',
        website:'Pas Encore',
        Commentaires : [
            {
                Name:"Amine ADJOU",
                duree:'9',
                Text:"Meilleure jardin dans toute l'Algérie, un endroit calme magnifique les arbres, l'air est frais, la tranquillité."
            
            },
            {
                Name:"Said Sahbi",
                duree:'10',
                Text:"Intik"
            }
        ]
    }
  return (
    <div className="bg-white h-[600px] rounded-2xl shadow-2xl flex flex-col gap-3">
        <div className='rounded-2xl px-2 py-3'>
            <img src={RegionPic}/>
        </div>
        <div className='flex flex-row items-center justify-between px-5 '>
            <div className='flex flex-col'>
                <h1 className='font-semibold font-poppins text-terhal-black text-lg'>Jardin d'essais</h1>
                <p className='font-poppins text-terhal-black  font-extralight '>El Hamma</p>
            </div>
            <div className='flex flex-row gap-2 items-end'>
                <img src={StarPic}/> 
                <p className='font-poppins font-normal'>4.8</p>
            </div>
        </div>
        <div className='flex flex-row items-center justify-around'>
            <button  className={toggleState === 1 ? "text-terhal-purple underline-offset-8 underline" : "text-terhal-black"} onClick={()=>toggleTab(1)}>A propos</button>
            <button className={toggleState === 2 ? "text-terhal-purple underline-offset-8 underline" : "text-terhal-black"} onClick={()=>toggleTab(2)}>Commentaires</button>
        </div>
        <hr className='h-[2px] mx-4 bg-black text-bold'/>

        <div  className={toggleState === 1 ? " block " : "hidden"}>
                <div className='flex flex-col px-5 gap-7 pt-4'>
                    <div className='flex flex-row items-center gap-3 '>
                        <img className='w-6 h-6' src={location}/>
                        <p>{LieuInfo.location}</p>
                    </div>
                    <div className='flex flex-row items-center gap-3 '>
                        <img className='w-6 h-6' src={ouverture}/>
                        <p>{LieuInfo.ouverture}</p>
                    </div>
                    <div className='flex flex-row items-center gap-3 '>
                        <img className='w-6 h-5' src={PhonePic}/>
                        <p>{LieuInfo.phone}</p>
                    </div>
                    <div className='flex flex-row items-center gap-3 '>
                        <img className='w-6 h-6' src={website}/>
                        <p>{LieuInfo.website}</p>
                    </div>
                </div>
        </div>
        <div className={toggleState === 2 ? " flex flex-col gap-2  overflow-y-auto pb-10 px-2 " : "hidden"}>
          {LieuInfo.Commentaires && LieuInfo.Commentaires.map((Com,index)=><div key={index}> <Commentaire Name={Com.Name} duree={Com.duree} Text={Com.Text} /></div> )

          }
        
            
        
        </div>

    </div>
  )
}
