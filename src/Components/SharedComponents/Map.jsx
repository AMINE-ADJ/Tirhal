import React, { useState,useEffect,useRef } from "react";
import { MapContainer, TileLayer, useMapEvents,Marker,Popup, useMap,GeoJSON,Polygon } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L, { Icon, map } from "leaflet"
import GeocoderLeaflet from "./Geocoder"
import {wilayas} from "./wilayas.js";
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
       },[props.pos,map]);
     const [choosed,setChoosed]=useState(true);

    return(
        

<MapContainer ref={mapRef} id="map"  center={ [30.70718851,3.048062480049727]} zoom={5} whenCreated={(map) =>mapRef.current = map}  >

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      {
        wilayas.features.map((key) => {
          const coordinates = key.geometry.coordinates[0].map((item) => [item[1], item[0]]);

          return (<Polygon
            pathOptions={{
                //fillColor: '#AFAFAF',
                //fillOpacity: 0.8,
              weight: 1,
              opacity: 1,
              dashArray: 4,
              color: 'grey'
            }}
            positions={coordinates}
            eventHandlers={{
                /*mouseover: (e) => {
                  const layer = e.target;
                  layer.setStyle({
                    dashArray: "",
                    fillColor: "#8BA6FF",
                    fillOpacity: 0.7,
                    weight: 2,
                    opacity: 1,
                    color: "white",
                  });
                  const { lat, lng } = e.latlng;
            e.target.bindPopup(`Coordinates: ${lat.toFixed(4)}, ${lng.toFixed(4)}`).openPopup();
                } ,
                mouseout: (e) => {
                    const layer = e.target;
                    layer.setStyle({
                      fillOpacity: 0.7,
                      weight: 2,
                      dashArray: "3",
                      color: 'white',
                      fillColor: '#AFAFAF'
                    });
                  },*/
                click:(event)=>{
                    const { target } = event;
    const { lat, lng } = target.getCenter();
    const map=mapRef.current;
      console.log([lat,lng]);               
    map.setView([lat,lng],map.getZoom()+1);
    if(choosed){
        const layer = event.target;

        layer.setStyle({ fillColor: "#8BA6FF",
        fillColor: "#8BA6FF",
        fillOpacity: 0.7,
        weight: 2,
        opacity: 1,
        color: "white", });
    }
   

                }
                
                
                }
            }

               
            
            
            />)},
            
            )}
        
        

      </MapContainer>
    
    );
}