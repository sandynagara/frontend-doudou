import React,{useState,useEffect} from 'react'
import * as WMS from "leaflet.wms";
import Swal from 'sweetalert2';
import { EditControl } from "react-leaflet-draw";
import configApi from "../../config.json";
import { MapContainer, useMap,FeatureGroup,Polygon,TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";


function TambahBangunan() {

    const [mapLayer, setMapLayer] = useState([])
    const [mapTambah, setMapTambah] = useState(false)
    const [mapDelete, setMapDelete] = useState(false)
    const [mapEdit, setMapEdit] = useState(false)
    const [first, setFirst] = useState(true);
    const [start, setStart] = useState(false)

    function CustomWMSLayer(props) {
        const { url, options, layers } = props;
        var map = useMap();
        // Add WMS source/layers
        if (first) {
          const source = WMS.source(url, options);
          var Basemap = source.getLayer(layers);
          Basemap.addTo(map);
          setFirst(false);
        }
    
        return null;
      }

      function Changedview({ center }) {
        const map = useMap();
        map.setView(center);
        return null;
      }
    
    // useEffect(() => {
    //     if(!data){
    //         return 
    //     }
    //     setMapLayer(data.feature.geometry);
    //     var koordinat = [];
    //     data.feature.geometry.coordinates[0][0].map((e)=>{
    //         koordinat.push([e[1],e[0]])
    //     })
    //     setDataFeature(koordinat);
    //     setPosition([data.center.coordinates[1],data.center.coordinates[0]]);
    // }, [data])

    useEffect(() => {
        if(mapTambah){
            setMapLayer(mapLayer.concat(mapTambah))
        }
    }, [mapTambah])

    useEffect(() => {
        if(mapDelete){
            var geojsonBaru = mapLayer
            mapLayer.map((bidangLayer,index)=>{
                mapDelete.map(idBidang=>{
                    console.log(index,idBidang)
                    if(bidangLayer["idBidang"] === idBidang){
                        geojsonBaru.splice(index,1)
                    }
                })
            })
            setMapLayer(geojsonBaru)
        }
    }, [mapDelete])

    useEffect(() => {
       console.log(mapLayer)
    }, [mapLayer])
    
    useEffect(() => {
        if(mapEdit){
            console.log(mapEdit)
            var geojsonBaru = mapLayer
            mapLayer.map((bidangLayer,index)=>{
                console.log(bidangLayer,index)
                mapEdit.map(bidangEdit=>{
                    if(bidangLayer["idBidang"] === bidangEdit["idBidang"]){
                        geojsonBaru[index] = bidangEdit
                    }
                })
            })
            console.log(geojsonBaru,"baru")
            setMapLayer(geojsonBaru)
        }
    }, [mapEdit])
    
    const onEditPath = (e) =>{
        var editGeojson = []
        Object.keys(e.layers._layers).forEach(function(k){
            var koordinat =[]
            e.layers._layers[k]._latlngs[0].map(e=>{
                var posisi = [e.lng,e.lat]
                koordinat.push(posisi)
            })
            console.log(k)
            koordinat.push([e.layers._layers[k]._latlngs[0][0].lng,e.layers._layers[k]._latlngs[0][0].lat])
            var geojson = {
                idBidang:Number(k),
                type:"Feature",
                geometry:{
                    type : "Polygon",
                    coordinates:[koordinat]
                }
            }
            editGeojson.push(geojson)
            // setMapEdit(geojson);
        })
        setMapEdit(editGeojson)
    }

    const createPath = (e) => {
        var koordinat =[]
        e.layer._latlngs[0].map(e=>{
            var posisi = [e.lng,e.lat]
            koordinat.push(posisi)
        })
        koordinat.push([e.layer._latlngs[0][0].lng,e.layer._latlngs[0][0].lat])
        var geojson = [{
            idBidang:e.layer._leaflet_id,
            type:"Feature",
            geometry:{
                type : "Polygon",
                coordinates:[koordinat]
            }
        }]

        setMapTambah(geojson);
    }

    const deletePath = (e) => {
        var idBidang = []
        Object.keys(e.layers._layers).forEach(function(k){
            idBidang.push(k)
        })
        setMapDelete(idBidang)
    }

    const simpanBangunan = () => {
        const url = configApi.SERVER_API + `bangunan`
        fetch(url,{
            method:"POST",
            credentials:"include",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },body: JSON.stringify({
                bangunan:mapLayer
            }),
        }).then(res=>res.json()).then(res=>{
            if(res["RTN"]){
              Swal.fire({
                icon: 'success',
                title: 'Data bangunan berhasil dibuat',
              })
            }else{
              Swal.fire({
                icon: 'error',
                title: 'Data bangunan gagal dibuat',
                text: res["MSG"],
              })
            }
        }).catch(err=>console.log(err))   
    }

  return (
      <div className='relative m-2 flex justify-center items-center'
      style={{height:"530px",zIndex:"10000"}}
      >
        <div className='w-full absolute'>
            <MapContainer
                center={[-6.956534, 112.505224]}
                zoom={18}
                style={{ width: "100%", height: "530px" }}
                zoomControl={false}
            >
                <CustomWMSLayer
                url={configApi.SERVER_GEOSERVER+"geoserver/doudou/wms"}
                layers={"doudou:mosaik_doudo"}
                options={{
                    format: "image/png",
                    transparent: "true",
                    tiled: "true",
                    info_format: "application/json",
                    identify: false,
                    maxZoom: 22,
                }}
                />
                <CustomWMSLayer
                    url={configApi.SERVER_GEOSERVER+"geoserver/doudou/wms"}
                    layers={"doudou:Batas_desa_doudo"}
                    options={{
                        format: "image/png",
                        transparent: "true",
                        tiled: "true",
                        info_format: "application/json",
                        identify: false,
                        maxZoom: 22,
                    }}
                />
        {/* <Changedview center={position} /> */}
                <CustomWMSLayer
                    url={configApi.SERVER_GEOSERVER+"geoserver/doudou/wms?"}
                    layers={"doudou:bangunan"}
                    options={{
                    format: "image/png",
                    transparent: "true",
                    tiled: "true",
                    info_format: "application/json",
                    identify: false,
                    maxZoom: 22,
                    }}
                />
                <TileLayer url={"https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"} style={{opacity:"0.5"}} maxZoom={22} />
                <FeatureGroup>
                    <EditControl
                    position='topright'
                    onEdited={onEditPath}
                    onCreated={createPath}
                    onDeleted={deletePath}
                    draw={{
                        rectangle: false,
                        polyline:false,
                        circle:false,
                        circlemarker: false,
                        marker:false,
                        
                    }}
                    />
                
                </FeatureGroup>
            </MapContainer>
        </div>
        <div className='absolute bg-sky-500 hover:bg-sky-700 bottom-2 py-2 text-white rounded-lg cursor-pointer'
             style={{zIndex:"10000",width:"calc(100% - 2rem)"}}
             onClick={simpanBangunan}
        >
            Simpan
        </div>
        {!start && 
            <div className='w-full absolute bg-white bg-opacity-70 flex items-center flex-col justify-center'
            style={{height: "100%",zIndex:"10000"}}
        >   
            <div className='cursor-pointer p-2 rounded-md mb-2'>
                Untuk menambahkan bangunan, silahkan tekan tombol Start
            </div>
            <div className='cursor-pointer px-6 py-2 rounded-md bg-white font-bold'
                onClick={()=>setStart(true)}
            >
                Start
            </div>
        </div>
        }
        
      </div>
  )
}

export default TambahBangunan