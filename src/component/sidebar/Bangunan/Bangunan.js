import React,{useState,useEffect} from 'react'
import {IoMdArrowDropdown} from "react-icons/io"
import configApi from "../../config.json"
import { MapContainer, TileLayer,useMap,GeoJSON} from "react-leaflet";
import PemilikBangunan from './PemilikBangunan';
import L from "leaflet";
import Swal from "sweetalert2"

function Bangunan({open,setOpen,jenis,bangunanSelect=false,setTambahPemilik,setDetailPenduduk}) {

    const [map, setMap] = useState(false)
    const [daftarPenghuni, setDaftarPenghuni] = useState(false)
    const [deletePemilik, setDeletePemilik] = useState(false)
    const [active, setActive] = useState(true)
    const [position, setPosition] = useState(false)

    useEffect(() => {
        if(!deletePemilik){
            return
        }

        console.log({"id":{
            "bangunan":bangunanSelect["id"],
            "pemilik":deletePemilik
          }})

        const url = configApi.SERVER_API + `deletepemilik`
        fetch(url,{
            method:"PATCH",
            credentials:"include",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },body: JSON.stringify({
                  id:{
                    "bangunan":bangunanSelect["id"],
                    "pemilik":deletePemilik
                  }
            }),
        }).then(res=>res.json()).then(res=>{
            if(res["RTN"]){
                Swal.fire({
                  icon: 'success',
                  title: 'Pemilik berhasil dihapus',
                })
                updatePemilik()
            }else{
                Swal.fire({
                  icon: 'error',
                  title: 'Penduduk gagal dihapus',
                  text: res["MSG"],
                })
             }
        }).catch(err=>{
            console.log(err)
        })

    }, [deletePemilik])
    
    const updatePemilik = () => {
        const url = configApi.SERVER_API + `penghuni/${bangunanSelect["id"]}`
        fetch(url,{
            method:"GET",
            credentials:"include"
        }).then(res=>res.json()).then(res=>{
            console.log(res.length)
            if(res.length === 0){
                setDaftarPenghuni(false)
            }else{
                setDaftarPenghuni(res)
            }
        }).catch(err=>{
            setDaftarPenghuni(false)
        })
    }

    const hapusBangunan = () => {
        const url = configApi.SERVER_API + `bangunan`
        fetch(url,{
            method:"DELETE",
            credentials:"include",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },body: JSON.stringify({
                  id:bangunanSelect["id"]
            }),
        }).then(res=>res.json()).then(res=>{
            if(res["RTN"]){
                Swal.fire({
                  icon: 'success',
                  title: 'Bangunan berhasil dihapus',
                })
                updatePemilik()
            }else{
                Swal.fire({
                  icon: 'error',
                  title: 'Bangunan gagal dihapus',
                  text: res["MSG"],
                })
             }
        }).catch(err=>{
            setDaftarPenghuni(false)
        })
    }

    useEffect(() => {
        if(bangunanSelect){
            setDeletePemilik(false)
            var geojsonfix = {
                type: "FeatureCollection",
                features:[bangunanSelect]
            }
            var geojsongroup = L.geoJSON(geojsonfix)

            var center = geojsongroup.getBounds().getCenter()
            console.log(center,"center2")
            setPosition([center["lat"],center["lng"]])
            updatePemilik()
        }
    }, [bangunanSelect])

    var Changedview = center => {
        const map = useMap();
        map.setView(center.center);
        return null;
    }

    var SelectedLayerHandler = () =>{
        return <GeoJSON data={bangunanSelect} style={{color:"yellow"}} />
    }
  return (
    <div className='w-30 px-0 duration-500 '
    style={open === jenis ? {marginLeft:"50px", width: "275px" } : {marginLeft:"-300px", width: "275px"}}
    >
       <MapContainer
        center={[-7.787178, 110.376075]}
        zoom={20}
        className="w-32 h-32"
        style={{ width: "275px", height: "200px" }}
        zoomControl={false}
        whenReady={(e)=>setMap(e)}
      >
          <TileLayer url={"https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"} maxZoom={22} />
            {position && <Changedview center={position}/> }
            {bangunanSelect && <SelectedLayerHandler/>}
      </MapContainer>
    <div className='bg-gray-200 py-2 px-3 cursor-pointer overflow-hidden text-left text-sm flex justify-between items-center'
        onClick={()=>{
            if(active === "Penghuni"){
                setActive(false)
            }else{
                setActive("Penghuni")
            }
        }}
        style={active === "Penghuni" ? {backgroundColor:"black",color:'white'} : {}}
    >
        Penghuni Bangunan
        <IoMdArrowDropdown/>
    </div>
    <div className='overflow-scroll duration-200 scrollbar'  
        style={active === "Penghuni" ? {height:"calc(100vh - 273px)"} : {height:"0px"}}
    >
        {daftarPenghuni ? daftarPenghuni.map((e)=>{
            return  <PemilikBangunan data={e} setDetailPenduduk={setDetailPenduduk} setDeletePemilik={setDeletePemilik}/>
        }) : 
        <div className='text-sm py-2'>
            Belum ada penghuni yang terdaftar
        </div>
        } 
        
        <div className='bg-sky-500 py-1 text-sm my-2 rounded-sm text-white text-center cursor-pointer hover:bg-sky-700'
            onClick={()=>{setTambahPemilik(true)}}
        >
            Tambah
        </div>
    </div>
    <div className='bg-gray-200 py-2 px-3 cursor-pointer overflow-hidden text-left text-sm flex justify-between items-center'
            onClick={()=>{
                if(active === "Bangunan"){
                    setActive(false)
                }else{
                    setActive("Bangunan")
                }
            }}
            style={active === "Bangunan" ? {backgroundColor:"black",color:'white'} : {}}
      >
        Bangunan
        <IoMdArrowDropdown/>
    </div>
    <div className=' flex px-2 overflow-clip duration-200 text-white text-sm '
        style={active === "Bangunan" ? {height:"45px",padding:"0.5rem"} : {height:"0px"}}
    >
        <div className='bg-red-600 hover:bg-red-700 cursor-pointer mr-1 w-full rounded-sm flex justify-center items-center'
            onClick={hapusBangunan}
        >
            Hapus
        </div>
        <div className='bg-gray-400 hover:bg-gray-600 cursor-pointer ml-1 w-full rounded-sm flex justify-center items-center'
            onClick={()=>setOpen("Edit")}
        >
            Edit
        </div>
    </div>
    </div>
  )
}

export default Bangunan