import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search.jpg";
export default function SearchBar(props) {
  const [message, setMessage] = useState("");
  const handleChange = (event) => {
    setMessage(event.target.value);

    console.log("value is:", event.target.value);
  };
  const handleSubmit = () => {
    console.log("submitted value is:", message);
    props.sendText(message);
  };

  return (
    <div className="flex flex-row items-center gap-4 ">
      <img
        src={logo}
        className="md:my-0 my-2 md:ml-4 w-12 lg:h-10 md:h-5 md:w-5 lg:w-10 h-12 cursor-pointer rounded-full"
      />
      <div className="flex flex-row gap-0">
        <input
          className="w-[450px] pl-5 h-14 bg-white border-[1px] border-terhal-gray focus:outline-none "
          onChange={handleChange}
          value={message}
        ></input>
        <div
          onClick={handleSubmit}
          className="w-14 h-15 justify-center bg-terhal-blue rounded-r-lg flex flex-row items-center "
        >
          <img src={searchIcon} />
        </div>
      </div>
    </div>
  );
}
