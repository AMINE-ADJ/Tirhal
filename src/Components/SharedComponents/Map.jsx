import React, { useState,useEffect,useRef } from "react";
import { MapContainer, TileLayer, useMapEvents,Marker,Popup, useMap } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L, { Icon, map } from "leaflet"
import GeocoderLeaflet from "./Geocoder"

export default function Map(props){
   const[position,setPosition]=useState(null);
   const [newpos,setNewPos]=useState(""); 
   //const [map,setMap]=useState(null);
   const mapRef = useRef(null);
    function LocationMarker() {
        const map = useMapEvents({
          click(e) {
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
      const icon= new Icon({
        iconUrl : "../../assets/epingle.png",
        iconSize:     [38, 38], // size of the icon
      })
           
     
      
       useEffect(()=>{
        function geocode(name){
           
                const fetchData = async () => {
                  try {
                    const response = await fetch(
                      `https://nominatim.openstreetmap.org/search.php?q=${name}&polygon_geojson=1&format=jsonv2`
                    );
            
                    if (response.ok) {
                      const data = await response.json();
                      console.log([parseFloat(data[0].lat) , parseFloat(data[0].lon)]);
                      return [parseFloat(data[0].lat) , parseFloat(data[0].lon)]
                    } else {
                      console.log('HTTP request failed');
                    }
                  } catch (error) {
                    console.log('Error:', error);
                  }
                };
            
                fetchData();
             
           }
         console.log(geocode(props.pos));  
        if(props.pos!="" && mapRef.current){
         const map=mapRef.current;
         console.log(geocode("alger"));
         map.setView(()=>geocode(props.pos),map.getZoom());
        } 
      console.log("props.pos=",props.pos);
      console.log("map is rendred");


       },[props.pos,map])
    return(
        

<MapContainer ref={mapRef} id="map"  center={  [36.737232, 3.086472] } zoom={13} whenCreated={(map) =>mapRef.current = map}  >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker/>

      </MapContainer>
    
    );
}