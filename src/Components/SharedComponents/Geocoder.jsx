import React ,{useEffect} from "react";
import L from "leaflet"
import { useMap } from "react-leaflet";

export default function Geocoder(){
  let pass=true;
 
  
    const map=useMap();
    useEffect(()=>{
      if(pass){
        L.Control.geocoder({
             defaultMarkGeocode: false
           })
           .on('markgeocode', function(e) {
            var coord= e.geocode.center;// here we get lat and long
            console.log(e.geocode.name,coord);// here we get the name
            //add marker to the map

            map.fitBounds(e.geocode.bbox);
          })
          .addTo(map);
             pass=false;
      }
     
    },[])
return null;



}
