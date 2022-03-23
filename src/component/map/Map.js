import { MapContainer, TileLayer} from "react-leaflet";
import React,{useState} from "react";
import "leaflet/dist/leaflet.css";

function Map() {

  const [map, setMap] = useState(false)
  const [first, setFirst] = useState(true)

  const TileLayerHandler = () => {
    return <TileLayer url="https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}" maxZoom={22} />;
  };

  return (
    <div className="w-screen h-screen z-0">
      <MapContainer
        center={[-7.787178, 110.376075]}
        zoom={17}
        className="h-screen w-screen"
        zoomControl={false}
        whenReady={(e)=>setMap(e)}
      >
        <TileLayer url="https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}" maxZoom={22} />
      </MapContainer>
    </div>
  )
}

export default Map