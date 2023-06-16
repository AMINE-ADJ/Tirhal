import React, { useState } from "react";
import { Link } from "react-router-dom";
import image from "../../assets/umg.png";
const UserCircle = (props) => {
  const [showDropdowns, setShowDropdowns] = useState(false);
  const [userImage, setUserImage] = useState("../../assets/umg.png");
  const user = props.user;
  const toggleDropdowns = () => {
    setShowDropdowns(!showDropdowns);
  };

  return (
    <div>
      <div className="relative">
        <img
          src={image}
          alt="User Image"
          className="md:my-0 my-2 md:ml-4 w-12 lg:h-12 md:h-5 md:w-5 lg:w-12 h-12 cursor-pointer rounded-full"
          onClick={toggleDropdowns}
        />
        {showDropdowns && (
          <div className="absolute top-0 md:right-0 mt-16 bg-white rounded-lg shadow-xl">
            <div className="p-2 font-Inter">
              {" "}
              <span className="font-bold"> Nom </span> : {user.fullname}
            </div>
            <hr className="border-akkar-black" />
            <div className="py-2 pr-16 pl-2 font-Inter">
              {" "}
              <span className="font-bold">Email </span> : {user.email}
            </div>
            <hr className="border-akkar-black" />
            <div className="py-2 pr-16 pl-2 font-Inter">
              {" "}
              <span className="font-bold">Role </span> : {user.role}
            </div>
            <hr className="border-akkar-black" />
            <Link to="/">
              <button
                onClick={() => LogoutFunction()}
                className="text-red-700 font-Inter  md:my-0 my-2  items-center md:ml-3 md:py-6 py-1  px-1 flex rounded-[3px] hover:bg-akkar-orange-second hover:text-black
    duration-200"
              >
                <ion-icon
                  size="md:large small "
                  name="log-out-outline"
                ></ion-icon>{" "}
                Déconnecter
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCircle;
