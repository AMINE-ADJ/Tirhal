import React, { useState, useEffect } from "react";
import camera from "../../assets/Camera.svg";
import { useForm } from "react-hook-form";
import axios from "axios";
export default function AddrespoLieu(props) {
  const [etape, setEtape] = useState(1);
  const [noml, setNoml] = useState("");
  const [cat, setCat] = useState("");
  const [type, setType] = useState("");
  const [ad, setAd] = useState("");
  const [hor, setHor] = useState("");
  const [vor, setVor] = useState("");
  const prochaineEtape = () => {
    if (
      noml != "" &&
      cat != "" &&
      type != "" &&
      hor != "" &&
      vor != "" &&
      ad != ""
    ) {
      setEtape((cur) => cur + 1);
    } else alert("Please fill all the fields");
  };
  const { register, handleSubmit } = useForm();
  const [submittedData, setSubmittedData] = useState(null);
  const [location, setLocation] = useState([]);
  useEffect(() => {
    setLocation(JSON.parse(localStorage.getItem("coords"))); //maranich nst3mlha
  }, []);

  const [cpt, setCpt] = useState(1);
  const formSubmitHandler = (data) => {
    setCpt(cpt + 1);
    //data is the set of data retrived from the form it won t be sent unless the form is valid (0 error messages)
    //const local=JSON.parse(localStorage.getItem("coords"));
    setSubmittedData([data, JSON.parse(localStorage.getItem("coords"))]);

    console.log("local", JSON.parse(localStorage.getItem("coords")));
    console.log("submitted", submittedData);
    let resp = {
      email: submittedData[0].email,
      password: submittedData[0].mdp,
      fullname: submittedData[0].nomresponsable,
      phone: submittedData[0].numero,
      role: "responsable",
    };
    let submittedPlace = {
      email: submittedData[0].email,
      idRegion: 4,
      // IdUtilizer: 1,
      name: submittedData[0].nomlieu,
      latitude: submittedData[1].lat,
      longitude: submittedData[1].lng,
      category: submittedData[0].category,
      theme: submittedData[0].type,
      timefrom: submittedData[0].ouverture + ":00",
      timeto: submittedData[0].fermeture + ":00",
      description: `this is ${submittedData[0].nomlieu} `,
      1: "",
      2: "",
    };
    console.log("this is the place a i submit ", submittedPlace);

    axios
      .post("http://127.0.0.1:8700/api/register/", resp, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        console.log("responsable added ", res);
      })
      .catch((e) => console.log(e));

    axios
      .post("http://127.0.0.1:8700/api/addplace/", submittedPlace, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        console.log(res); //pb fla requete 2eme.
        console.log(res.data.data);
      });
    if (cpt > 1) {
      props.setSideBar(false);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        {etape == 1 ? (
          <div className="md:h-[500px] flex flex-col bg-[#FFFFF] border-2  gap-y-[80px] p-5  items-center rounded-2xl shadow-2xl">
            <div className=" flex flex-col items-center gap-y-[20px] ">
              <p className="text-xl font-medium font-poppins">
                Ajouter un lieu
              </p>
              <input
                className=" outline-none md:w-[300px] md:h-[40px] rounded-[20px] bg-[#E7E7E7] font-normal text-sm p-5 text-[#656565]"
                placeholder="Nom lieu"
                name="nomlieu"
                {...register("nomlieu")}
                onChange={(e) => setNoml(e.target.value)}
              ></input>

              <select
                className="outline-none md:w-[300px] md:h-[40px] rounded-[20px] bg-[#E7E7E7] font-normal text-sm px-5 text-[#656565]"
                name="categorie"
                {...register("category")}
                onChange={(e) => setCat(e.target.value)}
              >
                <option value="" className="font-normal text-sm text-[#656565]">
                  Catégorie
                </option>
                <option
                  value="Monument"
                  className="font-normal text-sm text-[#656565]"
                >
                  Monument
                </option>
                <option
                  value="Musée"
                  className="font-normal text-sm text-[#656565]"
                >
                  Musée
                </option>
                <option
                  value="place publique"
                  className="font-normal text-sm text-[#656565]"
                >
                  place publique
                </option>
                <option
                  value="Site naturel"
                  className="font-normal text-sm text-[#656565]"
                >
                  Site naturel
                </option>
                <option
                  value="Parc d'attraction"
                  className="font-normal text-sm text-[#656565]"
                >
                  Parc d'attraction
                </option>
                <option
                  value="Lieu de culte"
                  className="font-normal text-sm text-[#656565]"
                >
                  Lieu de culte
                </option>
                <option
                  value="Site archéologique"
                  className="font-normal text-sm text-[#656565]"
                >
                  Site archéologique
                </option>
              </select>
              <select
                className="outline-none md:w-[300px] md:h-[40px] rounded-[20px] bg-[#E7E7E7] font-normal text-sm px-5 text-[#656565]"
                name="type"
                {...register("type")}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="" className="font-normal text-sm text-[#656565]">
                  Type
                </option>
                <option
                  value="Histoire"
                  className="font-normal text-sm text-[#656565]"
                >
                  Histoire
                </option>
                <option
                  value="Culture "
                  className="font-normal text-sm text-[#656565]"
                >
                  Culture{" "}
                </option>
                <option
                  value="Nature "
                  className="font-normal text-sm text-[#656565]"
                >
                  Nature{" "}
                </option>
                <option
                  value="Religion "
                  className="font-normal text-sm text-[#656565]"
                >
                  Religion{" "}
                </option>
                <option
                  value="Divertissement "
                  className="font-normal text-sm text-[#656565]"
                >
                  Divertissement{" "}
                </option>
                <option
                  value="Aventure "
                  className="font-normal text-sm text-[#656565]"
                >
                  Aventure{" "}
                </option>
                <option
                  value="Éducation "
                  className="font-normal text-sm text-[#656565]"
                >
                  Éducation{" "}
                </option>
                <option
                  value="Gastronomie  "
                  className="font-normal text-sm text-[#656565]"
                >
                  Gastronomie{" "}
                </option>
              </select>
              <input
                className="outline-none md:w-[300px] md:h-[40px] rounded-[20px] bg-[#E7E7E7] font-normal text-sm p-5 text-[#656565]"
                placeholder="Adresse"
                name="addresse"
                {...register("addresse")}
                onChange={(e) => setAd(e.target.value)}
              ></input>
              <input
                className="outline-none md:w-[300px] md:h-[40px] rounded-[20px] bg-[#E7E7E7] font-normal text-sm p-5 text-[#656565]"
                placeholder="heure d'ouverture"
                name="ouverture"
                type="time"
                {...register("ouverture")}
                onChange={(e) => setHor(e.target.value)}
              ></input>
              <input
                className="outline-none md:w-[300px] md:h-[40px] rounded-[20px] bg-[#E7E7E7] font-normal text-sm p-5 text-[#656565]"
                placeholder="heure de fermeture"
                name="fermeture"
                type="time"
                {...register("fermeture")}
                onChange={(e) => setVor(e.target.value)}
              ></input>
              {/* <div className="md:w-[300px] md:h-[40px]">
            <div className="md:w-[150px] md:h-[40px] rounded-[20px] bg-[#E7E7E7] font-normal text-sm gap-x-[10px]  text-[#656565] cursor-pointer flex justify-center items-center">
            <img src={camera}></img>
                <label htmlFor="input" className="cursor-pointer"><p className="font-normal text-sm  text-[#656565]">Ajouter photo</p></label>
            
            <input id="input" className="hidden"  type="file"  accept="image/png, image/jpg, image/gif, image/jpeg" name="photo" {...register("photo")}></input> </div>
           

           </div> */}
            </div>
            <div className="flex flex-col items-center gap-y-[15px]">
              <div className="flex flex-row gap-x-[15px] justify-center items-center md:w-[150px]">
                <div className="md:w-[35px] md:h-[3px] bg-[#00B2FF] rounded-[5px]"></div>
                <div className="md:w-[35px] md:h-[3px] bg-[#AFAFAF] rounded-[5px]"></div>
              </div>
              <button
                className="md:w-[120px] md:h-[35px] bg-[#3E87F6] text-white text-sm font-semibold rounded-[20px]"
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
              <p className="text-xl font-medium font-poppins">
                Ajouter un responsable{" "}
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
                className="md:w-[120px] md:h-[35px] bg-[#3E87F6] text-white text-sm font-semibold rounded-[20px]"
                type="submit"
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
