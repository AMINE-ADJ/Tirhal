import React, { useEffect, useState } from "react";
import Navbar from "../SharedComponents/Navbar";
import SideBar from "../SharedComponents/SideBar";
import Map from "../SharedComponents/Map";
export default function HomePage() {
  const [isOpen, setSideBar] = useState(false);
  const [isMaster, setisMaster] = useState();
  const [User, setUser] = useState();

  const [WhatToToggle, setisWhatToToggle] = useState("");
  const [WilayaCode, setWilayaCode] = useState(0);
  const [idPlace, setidPlace] = useState(null);
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
    if (user.role == "master") {
      setisMaster(true);
    } else {
      setisMaster(false);
    }
    console.log(user);
  }, []);
  const [finished, setFinished] = useState(false);
  const handleFinished = (e) => {
    console.log("finished", e);
    setFinished(e);
  };
  const showSidebar = () => setSideBar(!isOpen);
  const handleClickMap = (what, code) => {
    showSidebar();
    setWilayaCode(code);
    setisWhatToToggle(what);
  };
  const HandleLieuClick = (what, id) => {
    showSidebar();
    setidPlace(id);
    setisWhatToToggle(what);
  };
  const [place, setPlace] = useState("");
  const handleTextChangend = (text) => {
    setPlace(text);
    // handleClickMap("Region");
  };

  return (
    <div className="h-screen w-screen bg-white ">
      <Navbar user={User} sendCords={handleTextChangend} />
      <div className="flex flex-row">
        <SideBar
          isOpen={isOpen}
          setSideBar={setSideBar}
          WhatToToggle={WhatToToggle}
          code={WilayaCode}
          idPlace={idPlace}
        />
        <div className=" flex flex-row gap-20 items-center justify-center w-screen rounded-3xl mx-3 my-2">
          {/* <button onClick={()=>handleClickMap("Region")} className='bg-slate-400 rounded p-10'>Region</button>
        <button onClick={()=>handleClickMap("Lieu")} className='bg-slate-400 rounded p-10'>Lieu</button>
        <button onClick={()=>handleClickMap("AddResp")} className='bg-slate-400 rounded p-10'> Add resp Lieu</button> */}
          <Map
            handleClickMap={handleClickMap}
            HandleLieuClick={HandleLieuClick}
            pos={place}
            isMaster={isMaster}
            setFinished={setFinished}
          />
        </div>
      </div>
    </div>
  );
}
