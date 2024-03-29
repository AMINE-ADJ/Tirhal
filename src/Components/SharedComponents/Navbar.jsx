import React, { useState } from "react";
import UserCircle from "./userCircle";
import SearchBar from "./SearchBar";

export default function Navbar(props) {
  const [searchText, setSearchText] = useState("");

  const handleTextChange = (text) => {
    setSearchText(text);
    props.sendCords(searchText);
  };
  console.log(searchText);
  const phone = "+213559309619";
  return (
    <div className="z-10 w-full h-20 sticky flex flex-row justify-between items-center bg-white pr-10 pl-5">
      <SearchBar  sendText={handleTextChange} />
      <div className="flex flex-row gap-10 items-center">
        <div className="flex flex-row gap-2 items-center">
          <ion-icon name="call"></ion-icon>
          <p>{props.user!=null ? props.user.phone : phone}</p>
        </div>

        <UserCircle user={props.user} />
      </div>
    </div>
  );
}
