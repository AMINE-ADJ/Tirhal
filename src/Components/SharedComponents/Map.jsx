import React, { useState,useEffect,useRef } from "react";
import { MapContainer, TileLayer, useMapEvents,Marker,Popup, useMap } from 'react-leaflet';
import PinPic from "../../assets/Pin.png"
import "leaflet/dist/leaflet.css";
import L, { Icon, map } from "leaflet"
import GeocoderLeaflet from "./Geocoder"

export default function Map(props){
   const[position,setPosition]=useState(null);
   const[newposition,setnewPosition]=useState(null);
   const [newpos,setNewPos]=useState(""); 
   //const [map,setMap]=useState(null);
   const mapRef = useRef(null);
    function LocationMarker() {
        const map = useMapEvents({
          click(e) {
              props.handleClickMap("Region");
              setPosition(e.latlng);
              map.flyTo(e.latlng, map.getZoom());

          }
        })
        return position === null ? null : (
          <Marker position={position} >
            <Popup>Vous etes ici</Popup>
          </Marker>
        )
        
      }
      const HandleBtnClick = ()=> { 
        props.handleClickMap("AddResp");
      }
      const icon= new Icon({
        iconUrl : "../../assets/epingle.png",
        iconSize:     [38, 38], // size of the icon
      })
           
     
      
       useEffect(()=>{
        
                const fetchData = async () => {
                  try {
                    const response = await fetch(
                      `https://nominatim.openstreetmap.org/search.php?q=${props.pos}&polygon_geojson=1&format=jsonv2`
                    );
                    if (response.ok) {
                      const data = await response.json();
                      console.log(data);
                      console.log([parseFloat(data[0].lat) , parseFloat(data[0].lon)]);
                      return [parseFloat(data[0].lat) , parseFloat(data[0].lon)]
                    } else {
                      console.log('HTTP request failed');
                    }
                  } catch (error) {
                    console.log('Error:', error);
                  }
                };
                const newpos = fetchData();
                newpos.then(function(result) {
                  console.log(result) // "Some User token"
                  // console.log(newposition);
                  if(props.pos!="" && mapRef.current && result ){
      
                    console.log(result);
                       const map=mapRef.current;
                      
                       map.setView(result,map.getZoom());
                      } 
               })
      console.log("props.pos=",props.pos);
      console.log("map is rendred");
       },[props.pos,map])
    return(
        
<div className="relative">
<MapContainer ref={mapRef} id="map"  center={ [30.70718851,3.048062480049727]} zoom={9} whenCreated={(map) =>mapRef.current = map}  >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker/>
      
      </MapContainer>
        <button onClick={HandleBtnClick} className="absolute bottom-5 flex flex-row justify-center items-center shadow-black shadow-2xl right-2 z-50 py-2 px-5 bg-white rounded-lg font-poppins"><img src={PinPic}/>+ Ajouter un nouveau Lieu Touristique </button>
    
</div>

    );
}