import React from "react";
import landing from "../../assets/landing.svg"
import Welcome from "./Welcome";
import AddrespoLieu from "../Respo/AddRespoLieu";

export default function Landing() {
  
    return(
        <div className="flex flex-row gap-x-[250px] items-center justify-center h-screen w-full bg-[#F4F4F4]">
              <img id="landing" src={landing} className="md:w-[350px] md:h-[350px]"></img>
          <Welcome></Welcome>
        </div>
    )
}