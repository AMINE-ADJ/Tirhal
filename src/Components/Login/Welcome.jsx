import React from "react";
import email from "../../assets/email.svg"
import password from "../../assets/password.svg"
import google from "../../assets/google.svg"
export default function Welcome() {
    let inputs=[{description:"Adresse mail",icon:email,type:""},{description:"Mot de passe",icon:password,type:"password"}];
    return(
        <form className="flex flex-col md:w-[500px] md:h-[550px] gap-y-[30px]  bg-white items-center p-[25px]">
            <div className="flex flex-col gap-y-[8px] mr-[220px]">
            <p className="text-xl font-[500]  font-poppins">Bienvenue à </p>
                <p className="text-2xl text-[#5E81F4] font-poppins font-bold">DZ Travel </p>

            </div>
            <div className="flex flex-col gap-y-[30px]">
            {inputs.map((index)=>(
              <div className="md:w-[400px] md:h-[45px] flex flex-row  justify-around items-center bg-[#ECECEC] rounded-[5px]">
              <img src={index.icon} className="w-[16px] h-[16px]"></img>
              <input className="md:w-[350px] md:h-[35px] outline-none bg-[#ECECEC] font-normal text-sm " placeholder={index.description} type={index.type}></input>
          </div>
            ))}
            <div className="flex flex-row justify-between md:w-[400px]">
            <input type="checkbox" className="cursor-pointer"></input>
            <p className="text-sm text-[#6358DC] font-normal"><a>Forgot password?</a></p>
            </div>
                <button className="md:w-[400px] md:h-[45px] text-white  bg-[#6358DC] rounded-[5px] hover:bg-white hover:text-[#6358DC] hover:border-2 hover:border-[#6358DC] font-normal md:text-[17px]">Connexion</button>
                  <div className="flex flex-row items-baseline justify-center gap-x-[10px]">
                    <div className="md:w-[150px] md:h-[3px] bg-[#F4F4F4]"></div>
                    <p className="md:text-lg font-normal">Ou</p>
                    <div className="md:w-[150px] md:h-[3px] bg-[#F4F4F4]"></div>

                  </div>
                  <a href="google.com"><div className="flex flex-row justify-center items-center gap-x-[10px] md:w-[400px] md:h-[45px]  rounded-[5px] border-[2px] border-black cursor-pointer">
                <img className="md:w-[30px] md:h-[30px]" src={google}></img>
                <p className="md:text-black font-medium font-normal md:text-[17px]">Continuer avec Google</p>
                </div></a>

            </div>

            
        </form>
    )
}