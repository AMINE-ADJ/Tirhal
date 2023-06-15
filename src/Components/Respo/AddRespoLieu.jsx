import React,{useState} from "react";
import camera from "../../assets/Camera.svg";
import { useForm } from "react-hook-form"; 
export default function AddrespoLieu(){
const [etape,setEtape]=useState(1);
const [noml,setNoml]=useState("");
const [cat,setCat]=useState("");
const [ad,setAd]=useState("");
const [hor,setHor]=useState("");
const prochaineEtape=()=>{
  if  (noml!="" && cat!="" && hor!="" && ad!="") {
        setEtape(cur=>cur+1);
        
    }else alert("Please fill all the fields");
      
}
const {register,handleSubmit}=useForm(
  
  );
const formSubmitHandler = (data) => {
    //data is the set of data retrived from the form it won t be sent unless the form is valid (0 error messages)
console.log(data);
};
    return(
        <div>

        <form onSubmit={handleSubmit(formSubmitHandler)}>
       { etape==1 ? ( <div className="md:w-[350px] md:h-[500px] flex flex-col bg-[#FFFFF] border-2  gap-y-[80px] p-5  items-center" >   
            <div className=" flex flex-col items-center gap-y-[20px] ">
            <p className="text-xl font-medium font-poppins font-bold">Ajouter un lieu</p>
            <input className=" outline-none md:w-[300px] md:h-[40px] rounded-[20px] bg-[#E7E7E7] font-normal text-sm p-5 text-[#656565]" placeholder="Nom lieu" name="nomlieu"{...register("nomlieu")} onChange={(e)=>setNoml(e.target.value)}></input>
            
            <select className="outline-none md:w-[300px] md:h-[40px] rounded-[20px] bg-[#E7E7E7] font-normal text-sm px-5 text-[#656565]" name="categorie" {...register("category") } onChange={(e)=>setCat(e.target.value)} >
            <option value="" className="font-normal text-sm text-[#656565]">Catégorie</option>
            <option value="Historique" className="font-normal text-sm text-[#656565]">Historique</option>


            </select>
            <input className="outline-none md:w-[300px] md:h-[40px] rounded-[20px] bg-[#E7E7E7] font-normal text-sm p-5 text-[#656565]" placeholder="Adresse" name="addresse" {...register("addresse")} onChange={(e)=>setAd(e.target.value)}></input>
            <input className="outline-none md:w-[300px] md:h-[40px] rounded-[20px] bg-[#E7E7E7] font-normal text-sm p-5 text-[#656565]" placeholder="Horaires du travail" name="horaires" {...register("horaires")} onChange={(e)=>setHor(e.target.value)}></input>
           <div className="md:w-[300px] md:h-[40px]">
            <div className="md:w-[150px] md:h-[40px] rounded-[20px] bg-[#E7E7E7] font-normal text-sm gap-x-[10px]  text-[#656565] cursor-pointer flex justify-center items-center">
            <img src={camera}></img>
                <label htmlFor="input" className="cursor-pointer"><p className="font-normal text-sm  text-[#656565]">Ajouter photo</p></label>
            
            <input id="input" className="hidden"  type="file"  accept="image/png, image/jpg, image/gif, image/jpeg" name="photo" {...register("photo")}></input> </div>
           

           </div>
            </div>
              <div className="flex flex-col items-center gap-y-[15px]">
              <div className="flex flex-row gap-x-[15px] justify-center items-center md:w-[150px]">
            <div className="md:w-[35px] md:h-[3px] bg-[#00B2FF] rounded-[5px]"></div>
            <div className="md:w-[35px] md:h-[3px] bg-[#AFAFAF] rounded-[5px]"></div>
           </div>
           <button className="md:w-[120px] md:h-[35px] bg-[#3E87F6] text-white text-sm font-semibold rounded-[20px]" onClick={prochaineEtape} type="button">Prochaine étape</button>
              </div>
          

        </div>)  : null }
        { etape==2 ? ( <div className="md:w-[350px] md:h-[500px] flex flex-col bg-[#FFFFF] border-2  gap-y-[80px] p-5  items-center" >   
            <div className=" flex flex-col items-center gap-y-[30px] ">
            <p className="text-xl font-medium font-poppins font-bold">Ajouter un responsable </p>
            <input className=" outline-none md:w-[300px] md:h-[40px] rounded-[20px] bg-[#E7E7E7] font-normal text-sm p-5 text-[#656565]" placeholder="Nom responsable" name="nomresponsable" {...register("nomresponsable")} required></input>
           
            <input className="outline-none md:w-[300px] md:h-[40px] rounded-[20px] bg-[#E7E7E7] font-normal text-sm p-5 text-[#656565]" placeholder="Numéro de téléphone" name="numero"type="number" {...register("numero")}required></input>
            <input className="outline-none md:w-[300px] md:h-[40px] rounded-[20px] bg-[#E7E7E7] font-normal text-sm p-5 text-[#656565]" placeholder="Email" name="email" {...register("email")} required></input>

            <input className="outline-none md:w-[300px] md:h-[40px] rounded-[20px] bg-[#E7E7E7] font-normal text-sm p-5 text-[#656565]" placeholder="Mot de passe"name="mdp"{...register("mdp")}required></input>

         
            </div>
              <div className="flex flex-col items-center gap-y-[15px]">
              <div className="flex flex-row gap-x-[15px] justify-center items-center md:w-[150px]">
            <div className="md:w-[35px] md:h-[3px] bg-[#AFAFAF] rounded-[5px]"></div>
            <div className="md:w-[35px] md:h-[3px] bg-[#00B2FF] rounded-[5px]"></div>
           </div>
           <button className="md:w-[120px] md:h-[35px] bg-[#3E87F6] text-white text-sm font-semibold rounded-[20px]" type="submit">Terminer</button>

              </div>
          

        </div>)  : null }
        </form>
        </div>
    );
}