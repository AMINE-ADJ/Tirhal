import React, { useEffect, useState } from "react";
import camera from "../../assets/Camera.svg";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function AddrespoRegion(props) {
  const [etape, setEtape] = useState(1);
  const [nomRegion, setNomRegion] = useState("");
  const [codeWilaya, setCodeWilaya] = useState("");

  const prochaineEtape = () => {
    if (nomRegion != "" && codeWilaya != "") {
      setEtape((cur) => cur + 1);
    } else alert("Please fill all the fields");
  };

  const { register, handleSubmit } = useForm();
  const formSubmitHandler = (data) => {
    props.setSideBar(false);
    let newWilaya = {
      nomRegion: data.nomregion,
      codeWilaya: data.codewilaya,
      coords: JSON.parse(localStorage.getItem("region")),
      nomresponsable: data.nomresponsable,
      email: data.email,
      phone: data.numero,
      motDePasse: data.mdp,
    };
    console.log(newWilaya);
    let resp = {
      email: data.email,
      password: data.mdp,
      fullname: data.nomresponsable,
      phone: data.numero,
      role: "admin",
    };
    let region = {
      email: data.email,
      wilaya: data.nomregion,
      latitude: newWilaya.coords[0],
      longitude: newWilaya.coords[1],
      code: data.codewilaya,
    };
    //+ add lat, lon in that request malgre vide.
    //data is the set of data retrived from the form it won t be sent unless the form is valid (0 error messages)
    axios
      .post("http://127.0.0.1:8700/api/register/", resp, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        console.log("response added ", res);
      })
      .catch((e) => console.log(e));
    axios
      .post("http://127.0.0.1:8700/api/addregion/", region, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        console.log("response added ", res);
      })
      .catch((e) => console.log(e));
  };

  // useEffect(() => {
  //   let regionCoords = JSON.parse(localStorage.getItem("region"));
  //   setregionCoords(regionCoords);
  //   console.log(regionCoords);
  // }, []);

  return (
    <div>
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        {etape == 1 ? (
          <div className="md:h-[500px] flex flex-col bg-[#FFFFF] border-2  gap-y-[80px] p-5  items-center rounded-2xl shadow-2xl">
            <div className=" flex flex-col items-center gap-y-[20px] ">
              <p className="text-xl font-medium font-poppins">
                Ajouter une Region
              </p>
              <input
                className=" outline-none md:w-[300px] md:h-[40px] rounded-[20px] bg-[#E7E7E7] font-normal text-sm p-5 text-[#656565]"
                placeholder="Nom Region"
                name="nomregion"
                {...register("nomregion")}
                onChange={(e) => setNomRegion(e.target.value)}
              ></input>

              <input
                className="outline-none md:w-[300px] md:h-[40px] rounded-[20px] bg-[#E7E7E7] font-normal text-sm p-5 text-[#656565]"
                placeholder="Code Wilaya"
                name="codewilaya"
                {...register("codewilaya")}
                onChange={(e) => setCodeWilaya(e.target.value)}
              ></input>
            </div>
            <div className="flex flex-col items-center gap-y-[15px]">
              <div className="flex flex-row gap-x-[15px] justify-center items-center md:w-[150px]">
                <div className="md:w-[35px] md:h-[3px] bg-[#00B2FF] rounded-[5px]"></div>
                <div className="md:w-[35px] md:h-[3px] bg-[#AFAFAF] rounded-[5px]"></div>
              </div>
              <button
                className="md:w-[120px] md:h-[35px] bg-terhal-green text-white text-sm font-semibold rounded-[20px]"
                onClick={prochaineEtape}
                type="button"
              >
                Prochaine étape
              </button>
            </div>
          </div>
        ) : null}
        {etape == 2 ? (
          <div className="rounded-2xl shadow-2xl md:h-[500px] flex flex-col bg-[#FFFFF] border-2  gap-y-[80px] p-5  items-center">
            <div className=" flex flex-col items-center gap-y-[30px] ">
              <p className="text-xl font-medium font-poppins ">
                Ajouter un responsable region{" "}
              </p>
              <input
                className=" outline-none md:w-[300px] md:h-[40px] rounded-[20px] bg-[#E7E7E7] font-normal text-sm p-5 text-[#656565]"
                placeholder="Nom responsable"
                name="nomresponsable"
                {...register("nomresponsable")}
                required
              ></input>

              <input
                className="outline-none md:w-[300px] md:h-[40px] rounded-[20px] bg-[#E7E7E7] font-normal text-sm p-5 text-[#656565]"
                placeholder="Numéro de téléphone"
                name="numero"
                type="number"
                {...register("numero")}
                required
              ></input>
              <input
                className="outline-none md:w-[300px] md:h-[40px] rounded-[20px] bg-[#E7E7E7] font-normal text-sm p-5 text-[#656565]"
                placeholder="Email"
                name="email"
                {...register("email")}
                required
              ></input>

              <input
                className="outline-none md:w-[300px] md:h-[40px] rounded-[20px] bg-[#E7E7E7] font-normal text-sm p-5 text-[#656565]"
                placeholder="Mot de passe"
                name="mdp"
                {...register("mdp")}
                required
              ></input>
            </div>
            <div className="flex flex-col items-center gap-y-[15px]">
              <div className="flex flex-row gap-x-[15px] justify-center items-center md:w-[150px]">
                <div className="md:w-[35px] md:h-[3px] bg-[#AFAFAF] rounded-[5px]"></div>
                <div className="md:w-[35px] md:h-[3px] bg-[#00B2FF] rounded-[5px]"></div>
              </div>
              <button
                className="md:w-[120px] md:h-[35px] bg-terhal-green text-white text-sm font-semibold rounded-[20px]"
                type="submit"
                // onClick={}
              >
                Terminer
              </button>
            </div>
          </div>
        ) : null}
      </form>
    </div>
  );
}
