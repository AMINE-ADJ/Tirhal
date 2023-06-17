import React, { useEffect, useState } from "react";
import RegionPic from "../../assets/regionPic.png";
import StarPic from "../../assets/star.png";
import location from "../../assets/location.png";
import ouverture from "../../assets/ouverture.png";
import Usercommentaire from "../../assets/commentaire.png";
import website from "../../assets/website.png";
import PhonePic from "../../assets/phoneLieu.png";
import Commentaire from "./Commentaire";
import axios from "axios";
export default function LieuCard(props) {
  const [toggleState, setToggleState] = useState(1);
  const [wilaya, setWilaya] = useState({});
  const [resp, setResp] = useState({});
  const [place, setPlace] = useState({});

  const toggleTab = (index) => {
    setToggleState(index);
  };

  useEffect(() => {
    console.log(props.idPlace);
    axios
      .get(`http://127.0.0.1:8700/api/place/${props.idPlace}`, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        // console.log(res.data.data);
        // console.log(res.data.data[0]);
        setPlace(res.data.data);
        setWilaya(res.data.data.idRegion);
        setResp(res.data.data.idUtilizer);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  console.log(place);
  console.log(place.idRegion);

  var LieuInfo = {
    location: wilaya.wilaya,
    ouverture: place.timefrom,
    fermeture: place.timeto,
    phone: resp.phone,
    website: "Pas Encore",
    Commentaires: [
      {
        Name: "Amine ADJOU",
        duree: "9",
        Text: "Meilleure jardin dans toute l'Algérie, un endroit calme magnifique les arbres, l'air est frais, la tranquillité.",
      },
      {
        Name: "Said Sahbi",
        duree: "10",
        Text: "This is a beautiful space ",
      },
    ],
  };
  return (
    <div className="bg-white h-[600px] rounded-2xl shadow-2xl flex flex-col gap-3">
      <div className="rounded-2xl px-2 py-3">
        <img src={RegionPic} />
      </div>
      <div className="flex flex-row items-center justify-between px-5 ">
        <div className="flex flex-col">
          <h1 className="font-semibold font-poppins text-terhal-black text-lg">
            {place.name}
          </h1>
          <p className="font-poppins text-terhal-black  font-extralight ">
            {place.description}
          </p>
        </div>
        <div className="flex flex-row gap-2 items-end">
          <img src={StarPic} />
          <p className="font-poppins font-normal">4.8</p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-around">
        <button
          className={
            toggleState === 1
              ? "text-terhal-purple underline-offset-8 underline"
              : "text-terhal-black"
          }
          onClick={() => toggleTab(1)}
        >
          A propos
        </button>
        <button
          className={
            toggleState === 2
              ? "text-terhal-purple underline-offset-8 underline"
              : "text-terhal-black"
          }
          onClick={() => toggleTab(2)}
        >
          Commentaires
        </button>
      </div>
      <hr className="h-[2px] mx-4 bg-black text-bold" />

      <div className={toggleState === 1 ? " block " : "hidden"}>
        <div className="flex flex-col px-5 gap-7 pt-4">
          <div className="flex flex-row items-center gap-3 ">
            <img className="w-6 h-6" src={location} />
            <p>
              P{Math.floor(Math.random() * 10)}FXR -{" "}
              {Math.floor(Math.random() * 10)}R
            </p>
          </div>
          <div className="flex flex-row items-center gap-3 ">
            <img className="w-6 h-6" src={ouverture} />
            <p>
              from {LieuInfo.ouverture} to {LieuInfo.fermeture}
            </p>
          </div>
          <div className="flex flex-row items-center gap-3 ">
            <img className="w-6 h-5" src={PhonePic} />
            <p>{LieuInfo.phone}</p>
          </div>
          <div className="flex flex-row items-center gap-3 ">
            <img className="w-6 h-6" src={website} />
            <p>{LieuInfo.website}</p>
          </div>
        </div>
      </div>
      <div
        className={
          toggleState === 2
            ? " flex flex-col gap-2  overflow-y-auto pb-10 px-2 "
            : "hidden"
        }
      >
        {LieuInfo.Commentaires &&
          LieuInfo.Commentaires.map((Com, index) => (
            <div key={index}>
              {" "}
              <Commentaire Name={Com.Name} duree={Com.duree} Text={Com.Text} />
            </div>
          ))}
      </div>
    </div>
  );
}
