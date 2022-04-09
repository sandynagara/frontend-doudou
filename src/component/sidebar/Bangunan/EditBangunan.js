import React,{useState,useEffect}  from 'react'
import * as WMS from "leaflet.wms";
import Swal from 'sweetalert2';
import { EditControl } from "react-leaflet-draw";
import configApi from "../../config.json";
import ButtonHeaderForm from '../../form/ButtonHeaderForm';
import { MapContainer, useMap,FeatureGroup,Polygon,TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import L from "leaflet";

function EditBangunan({data}) {
  
  const [mapLayer, setMapLayer] = useState([])
  const [mapDelete, setMapDelete] = useState(false)
  const [mapEdit, setMapEdit] = useState(false)
  const [first, setFirst] = useState(true);
  const [start, setStart] = useState(false)
  const [pilih, setPilih] = useState("Bangunan")
  const [dataFeature,setDataFeature] = useState(false)
  const [position, setPosition] = useState([-7.864220975, 110.138661812]);

  useEffect(() => {
      console.log(data,"data")
    var geojsondata = {
        "type": "FeatureCollection", 
        "features":[data]}
    var geojsongroup = L.geoJSON(geojsondata);
    var center = geojsongroup.getBounds().getCenter()
    var geojsonInput = {
        type:data["type"],
        geometry:data["geometry"]
    }
    setMapLayer(geojsonInput);
    var koordinat = [];
    data.geometry.coordinates[0].map((e)=>{
          koordinat.push([e[1],e[0]])
    })
    koordinat.push([data.geometry.coordinates[0][0][1],data.geometry.coordinates[0][0][0]])
    setDataFeature(koordinat);
    setPosition([center["lat"],center["lng"]])
    }, [data])

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
          setMapLayer(mapEdit)
      }
  }, [mapEdit])
  
  const onEditPath = (e) =>{
      var geojson
      Object.keys(e.layers._layers).forEach(function(k){
          var koordinat =[]
          e.layers._layers[k]._latlngs[0].map(e=>{
              var posisi = [e.lng,e.lat]
              koordinat.push(posisi)
          })
          koordinat.push([e.layers._layers[k]._latlngs[0][0].lng,e.layers._layers[k]._latlngs[0][0].lat])
          geojson = {
              idBidang:Number(k),
              type:"Feature",
              geometry:{
                  type : "Polygon",
                  coordinates:[koordinat]
              }
          }
          // setMapEdit(geojson);
      })
      setMapEdit(geojson)
  }

  var Changedview = center => {
    const map = useMap();
    map.setView(center.center);
    return null;
  }

  const simpanBangunan = () => {
      const url = configApi.SERVER_API + `bangunan`
      console.log(
        {bangunan:{
            id:data.id,
            bangunan:mapLayer
          }}
      )
      fetch(url,{
          method:"PATCH",
          credentials:"include",
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },body: JSON.stringify({
            bangunan:{
                  id:data.id,
                  bangunan:mapLayer
                }
          }),
      }).then(res=>res.json()).then(res=>{
          if(res["RTN"]){
            Swal.fire({
              icon: 'success',
              title: 'Data bangunan berhasil diedit',
            })
          }else{
            Swal.fire({
              icon: 'error',
              title: 'Data bangunan gagal diedit',
              text: res["MSG"],
            })
          }
      }).catch(err=>console.log(err))   
  }

return (
    <div className='bg-white rounded-md relative'
    style={{
        width:"600px",
        height:"600px"
    }}>
        <div className='w-full'>
            <ButtonHeaderForm teks="Edit bangunan" pilih={pilih} setPilih={setPilih}/>
        </div>
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
        {/* <Changedview center={position} /> */}
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
                {position && <Changedview center={position}/> }
                <TileLayer url={"https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"} style={{opacity:"0.5"}} maxZoom={22} />
                <FeatureGroup>
                    <EditControl
                    position='topright'
                    onEdited={onEditPath}
                    onEditStart={()=>console.log("start")}
                    draw={{
                        rectangle: false,
                        polyline:false,
                        circle:false,
                        circlemarker: false,
                        marker:false,
                        polygon:false,
                    }}
                    
                    />
                    <Polygon pathOptions={{ fillColor: 'red' }} positions={dataFeature} />
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
                Untuk mengedit bangunan, silahkan tekan tombol Start
            </div>
            <div className='cursor-pointer px-6 py-2 rounded-md bg-white font-bold'
                onClick={()=>setStart(true)}
            >
                Start
            </div>
        </div>
        }
        
        </div>
    </div>

)
}

export default EditBangunan