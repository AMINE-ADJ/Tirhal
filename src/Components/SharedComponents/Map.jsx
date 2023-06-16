import React, { useState, useEffect, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker,
  Popup,
  useMap,
  Polygon,
} from "react-leaflet";
import PinPic from "../../assets/Pin.png";
import "leaflet/dist/leaflet.css";
import L, { Icon, map } from "leaflet";
import GeocoderLeaflet from "./Geocoder";
import { wilayas } from "./wilayas.js";
export default function Map(props) {
  const [position, setPosition] = useState(null);

  //const [map,setMap]=useState(null);
  const [ischoosed, setichoosed] = useState(new Array(58).fill(false));
  const [isZoomed, setisZoomed] = useState(false);
  const [showMarker,setShowMarker]=useState(false);
  const mapRef = useRef(null);
  const markers = [
    { position: [26.426308999847024, -1.5776367858052256], title: 'Marker 1' },
    { position: [27.070778724009017, -2.912674156243442], title: 'Marker 2' },
    
    // Add more marker objects as needed
  ];
  function LocationMarker() {
    const map = useMapEvents({
      click(e) {
       // props.handleClickMap("Region");
        setPosition(e.latlng);
        console.log("marker",e.latlng);
        localStorage.setItem("coords",JSON.stringify(e.latlng));

        map.flyTo(e.latlng, map.getZoom());
      },
    });
    
    return position === null ? null : (
      <Marker position={position}>
        <Popup>Vous etes ici</Popup>
      </Marker>
    );
  }
 
  const HandleRegionClick = (e) => {
    props.handleClickMap(e);
  };
  const [isClicked,setIsClicked]=useState(false);
  const HandleBtnClick = () => {
    setIsClicked(true);
    props.setFinished(false);
    props.handleClickMap("AddRespLieu");
  };
  const icon = new Icon({
    iconUrl: "../../assets/epingle.png",
    iconSize: [38, 38], // size of the icon
  });

  const updateRegionCase = (index, value) => {
    const updatedTab = [...ischoosed];
    updatedTab[index] = value;
    setichoosed(updatedTab);
  };

  useEffect(() => {
    //check if each region rahi majoutiya wella nn, ...
    //recuper code wilaya existant. //get all region.
    updateRegionCase(0, true); //updating adrar
    // updateRegionCase(code_wilaya - 1 , true); //updating adrar
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search.php?q=${props.pos}&polygon_geojson=1&format=jsonv2`
        );
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          console.log([parseFloat(data[0].lat), parseFloat(data[0].lon)]);
          return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
        } else {
          console.log("HTTP request failed");
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };
    const newpos = fetchData();
    newpos.then(function (result) {
      console.log(result); // "Some User token"
      // console.log(newposition);
      if (props.pos != "" && mapRef.current && result) {
        console.log(result);
        const map = mapRef.current;
        map.setView(result, 7);
      }
    });
    console.log("props.pos=", props.pos);
    console.log("map is rendred");
  }, [props.pos, map]);

  // const [choosed, setChoosed] = useState(true);
    const [color,setColor]=useState("#FFA500");
    const [selectedPos,setSelectedPos]=useState(null);





  return (
    <div className="relative">
      <MapContainer
        ref={mapRef}
        id="map"
        center={[30.70718851, 3.048062480049727]}
        zoom={5}
        whenCreated={(map) => (mapRef.current = map)}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
{ isZoomed ? markers.map((marker) => (  //here is the code that displays given markers in the map when loaded
        <Marker  position={marker.position}>
          <Popup>{marker.title}</Popup>
        </Marker>
      )) : null }
        {wilayas.features.map((key, index) => {

          const coordinates = key.geometry.coordinates[0].map((item) => [
            item[1],
            item[0],
          ]);
          return (
            <Polygon
              pathOptions={{
                fillColor: ischoosed[key.properties.city_code - 1]
                  ? color
                  : "#FFFFF",
                //fillOpacity: 0.8,
                weight: 1,
                opacity: 1,
                dashArray: 4,
                color: "grey",
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
                click: (event) => {
                  const { target } = event;
                  const { lat, lng } = target.getCenter();
                  const map = mapRef.current;
                
                
                 
                  map.setView([lat, lng], 8);
                  if (ischoosed[key.properties.city_code - 1]) {
                    if(!isClicked){HandleRegionClick("Region")}
                   setColor("");
                   setSelectedPos([lat, lng]);
                    setisZoomed(true);
                    setShowMarker(true);
               
                  } else {
                    setisZoomed(false);
                    setShowMarker(false);
                    HandleRegionClick("AddRespRegion");
                    if (props.isMaster) {
                      HandleRegionClick("AddRespRegion");
                    } else {
                      HandleRegionClick("PrivateRegion");
                    }
                  }
                  // HandleRegionClick();
                },
              }}
            />
          );
        })}
        {showMarker && isClicked ? <LocationMarker></LocationMarker> : null}
      </MapContainer>
      {isZoomed && (
        <>
          <button
            onClick={HandleBtnClick}
            className="absolute bottom-5 flex flex-row justify-center items-center shadow-black shadow-2xl right-2 z-50 py-2 px-5 bg-white rounded-lg font-poppins"
          >
            <img src={PinPic} />+ Ajouter un nouveau Lieu Touristique{" "}
          </button>
        </>
      )}
    </div>
  );
}
