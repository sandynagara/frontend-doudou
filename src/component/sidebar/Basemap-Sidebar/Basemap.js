import React from 'react'
import OpenStreetMap from '../../../images/Basemap/OpenStreetMap.jpg'
import EsriWorldImagery from '../../../images/Basemap/EsriWorldImagenery.jpg'
import EsriToPo from '../../../images/Basemap/EsriToPo.jpg'
import OpenToPo from '../../../images/Basemap/OpenToPo.jpg'
import StadiaDark from '../../../images/Basemap//StadiaDark.jpg'
import GoogleMaps from '../../../images/Basemap/GoogleMaps.jpg'
import GoogleStreet from '../../../images/Basemap/GoogleStreet.jpg'
import EsriStreet from '../../../images/Basemap/EsriStreetMap.jpg'
import CartoDb from "../../../images/Basemap/CartoDb.jpg"

const jenisBasemap = [
    {
      url: "https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
      nama: "Google Satelite",
      gambar: GoogleMaps,
    },
    {
      url: "https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
      nama: "Google Streets",
      gambar: GoogleStreet,
    },
    {
      url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
      nama: "Esri WorldStreetMap",
      gambar: EsriStreet,
    },
    {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      nama: "OpenStreetMap",
      gambar: OpenStreetMap,
    },
    {
      url: "https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png",
      nama: "CartoDB",
      gambar: CartoDb,
    },
    {
      url: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
      nama: "OpenTopoMap",
      gambar: OpenToPo,
    },
    {
      url: "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
      nama: "Stadia.AlidadeSmoothDark",
      gambar: StadiaDark,
    },
    {
      url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      nama: "Esri.WorldImagery",
      gambar: EsriWorldImagery,
    },
    {
      url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
      nama: "Esri.WorldTopoMap",
      gambar: EsriToPo,
    },
  ];
  

function Basemap({setInputBasemap ,inputBasemap,open,jenis }) {

  return (
    <div className='w-30 px-0 py-2 duration-500'
    style={open === jenis ? {marginLeft:"50px"} : {marginLeft:"-300px"}}
    >
        {jenisBasemap.map((basemap)=>{
            return (
                <div key={basemap.url} className='relative m-0 p-0 cursor-pointer' onClick={()=>setInputBasemap(basemap.url)}>
                    <div className='absolute text-sm flex items-center bottom-0 p-1 bg-white'>
                        <div 
                            className='ml-1 mr-1 w-4 h-4 rounded-full border-black border-2 bg-white'
                            style={inputBasemap===basemap.url ? {backgroundColor:"#000000"} : {}}
                        >
                        </div>
                        <p className='p-0'>{basemap.nama}</p>
                    </div>
                    <img src={basemap.gambar} alt="" className='w-full h-32 object-cover'/>
                </div>
            )
        })}
    </div>
  )
}

export default Basemap