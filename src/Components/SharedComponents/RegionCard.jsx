import React, { useEffect, useState } from "react";
import RegionPic from "../../assets/regionPic.png";
import StarPic from "../../assets/star.png";
import lieuPic from "../../assets/lieuTour.png";
import visitPic from "../../assets/visits.png";
import UserPic from "../../assets/User.png";
import EmailPic from "../../assets/email.png";
import PhonePic from "../../assets/phone.png";
import axios from "axios";
export default function RegionCard(props) {
  const [isDisabled, setisDisabled] = useState(true);
  // const [WilayaCode, setisWilayaCode] = useState(props.code);
  // const WilayaCard = {
  //   WilayaCardname: "Hicham tihami",
  //   email: "tihami@esi.dz",
  //   phone: "0994933933",
  // };
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8700/api/region/${props.code}`, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        console.log(res);
        console.log(res.data.data[0]);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  //init this data with the default one that comes from back.
  const [WilayaData, setWilayaData] = useState({
    WilayaName: "Alger",
    WilayaCode: 16,
    WilayaNbPlaces: 11,
    WilayaResponsable: { name: "Amine", email: "AD", phone: "03993939" },
  });
  const handleChange = (e) => {
    const name1 = e.target.name;
    const name = WilayaData.WilayaResponsable.name1;
    const value = e.target.value;

    setWilayaData({ ...WilayaData, [name]: value });
    // console.log(data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setisDisabled(true);
    //send updated infos
    console.log("send post request cuz info is modified and confirmed");
    console.log("this is data i send : ", WilayaData);

    console.log(isDisabled);
  };
  const OnClickModifie = () => {
    setisDisabled(false);
    console.log(isDisabled);
  };
  //   const OnClickConfirm = () => {
  //     setisDisabled(true);
  //     //send updated infos
  //     console.log("send post request cuz info is modified and confirmed");
  //     console.log(isDisabled);
  //   };
  return (
    <div className="bg-white h-[600px] rounded-2xl shadow-2xl flex flex-col gap-3">
      <div className="rounded-2xl px-2 py-3">
        <img src={RegionPic} />
      </div>
      <div className="flex flex-row items-center justify-between px-5 ">
        <div className="flex flex-col">
          <h1 className="font-semibold font-poppins text-terhal-black text-lg">
            {WilayaData.WilayaName}
          </h1>
          <p className="font-poppins text-terhal-black  font-extralight ">
            Wilaya {WilayaData.WilayaCode}
          </p>
        </div>
        <div className="flex flex-row gap-2 items-end">
          <img src={StarPic} />
          <p className="font-poppins font-normal">
            4.{Math.floor(Math.random() * 10)}
          </p>
        </div>
      </div>

      <div className="flex flex-row  gap-10 px-5 ">
        <div className="flex flex-row gap-2">
          {" "}
          <img className="h-4" src={visitPic} />{" "}
          <p className=" text-xs font-poppins font-normal">
            {Math.floor(Math.random() * 1200) + 1} visiteurs
          </p>
        </div>
        <div className="flex flex-row gap-2">
          {" "}
          <img className="h-4" src={lieuPic} />{" "}
          <p className="text-xs font-poppins font-normal">
            {WilayaData.WilayaNbPlaces} lieux touristiques
          </p>
        </div>
      </div>

      <hr className="h-1 mx-4 bg-black text-bold" />
      <form method="post" onSubmit={handleSubmit}>
        <div className="flex flex-col items-start px-5 gap-2">
          <h1 className="font-semibold font-poppins text-terhal-black text-lg">
            Responsable de {WilayaData.WilayaName}
          </h1>

          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-3">
              <img src={UserPic} className="w-9 h-9" />
              {/* <p className='font-poppins text-base'>Hicham Tihami</p> */}
              <input
                className={`text-base font-poppins text-black placeholder-black rounded-sm px-1 ${
                  !isDisabled ? "border-black border-[1px]" : ""
                }`}
                type="name"
                defaultValue={WilayaData.WilayaResponsable.name}
                disabled={isDisabled}
                name="name"
                onChange={handleChange}
              />
            </div>
            <p className="text-terhal-gray2 text-xs font-poppins">
              Nom et prénom
            </p>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-3">
              <img src={EmailPic} className="w-9 h-9" />
              {/* <p className="font-poppins text-base">ka_adjou@esi.dz</p> */}
              <input
                className={`text-base font-poppins text-black rounded-sm placeholder-black px-1 ${
                  !isDisabled ? "border-black border-[1px]" : ""
                }`}
                type="email"
                name="email"
                defaultValue={WilayaData.WilayaResponsable.email}
                disabled={isDisabled}
                onChange={handleChange}
              />
            </div>
            <p className="text-terhal-gray2 text-xs font-poppins">E-Mail</p>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-3">
              <img src={PhonePic} className="w-9 h-9" />
              {/* <p className="font-poppins text-base">0559309610</p> */}
              <input
                className={`text-base font-poppins text-black rounded-sm placeholder-black px-1 ${
                  !isDisabled ? "border-black border-[1px]" : ""
                }`}
                type="text"
                name="phone"
                defaultValue={WilayaData.WilayaResponsable.phone}
                disabled={isDisabled}
                onChange={handleChange}
              />
            </div>
            <p className="text-terhal-gray2 text-xs font-poppins">
              Numéro de télephone
            </p>
          </div>
        </div>
        {!isDisabled && (
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-terhal-green mx-32 mt-3 px-1 rounded-xl font-poppins font-semibold hover:bg-green-900 text-white py-3"
          >
            Confirm
          </button>
        )}
      </form>
      {isDisabled && (
        <button
          onClick={OnClickModifie}
          className="bg-terhal-green mx-24 rounded-xl font-poppins font-semibold hover:bg-green-900 text-white py-3"
        >
          Modifie
        </button>
      )}
    </div>
  );
}
