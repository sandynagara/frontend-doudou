import React,{useState} from 'react'
import "./Dashboard.css"
import Map from '../component/map/Map'
import Sidebar from '../component/sidebar/Sidebar'
import SidebarContainer from '../component/sidebar/SidebarContainer'
import Basemap from '../component/sidebar/Basemap-Sidebar/Basemap'
import Modal from '../component/modal/Modal'
import ContainerInputSearch from '../component/form/ContainerInputSearch'
import Bangunan from '../component/sidebar/Bangunan/Bangunan'
import DetailPenduduk from '../component/sidebar/Bangunan/DetailPenduduk'
import Search from '../component/sidebar/Search/Search'
import ContainerBangunan from '../component/sidebar/Tambah/ContainerBangunan'
import EditBangunan from '../component/sidebar/Bangunan/EditBangunan'
import Layer from '../component/sidebar/layer/Layer'
import LoginPage from '../component/sidebar/login/LoginPage'

function Dashboard() {

  const [open, setOpen] = useState(false)
  const [bangunanSelect, setbangunanSelect] = useState()
  const [tambahPemilik, setTambahPemilik] = useState(false)
  const [detailPenduduk, setDetailPenduduk] = useState(false)
  const [basemap, setBasemap] = useState("https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}");

  const [opacityBasemap, setOpacityBasemap] = useState(100);
  const [opacityBangunan, setOpacityBangunan] = useState(100);
  const [opacityBatas, setOpacityBatas] = useState(100);
  const [opacityFoto, setOpacityFoto] = useState(100);

  return (
    <div>
      <Sidebar open={open} setOpen={setOpen}/>
      <SidebarContainer 
        component={
          <Search 
            open={open} 
            jenis="Search"
            setDetailPenduduk={setDetailPenduduk}
            setbangunanSelect={setbangunanSelect}
          />
          }
      />
      <SidebarContainer 
        component={
          <Basemap 
            setInputBasemap={(e) => setBasemap(e)}
            inputBasemap={basemap}
            open={open} 
            jenis="Basemap"
          />
          }
      />
      <SidebarContainer 
        component={
          <Layer 
            open={open} 
            jenis="Layer"
            setOpacityBangunan={setOpacityBangunan}
            setOpacityBasemap={setOpacityBasemap}
            setOpacityBatas={setOpacityBatas}
            setOpacityFoto={setOpacityFoto}
          />
          }
      />
      <SidebarContainer 
        component={
          <Bangunan 
            open={open} 
            jenis="Bangunan"
            bangunanSelect={bangunanSelect}
            setTambahPemilik={setTambahPemilik}
            setDetailPenduduk={setDetailPenduduk}
            setOpen={setOpen}
          />
          }
      />
      {tambahPemilik && <Modal component={<ContainerInputSearch bangunanSelect={bangunanSelect} setTambahPemilik={setTambahPemilik}/>} close={()=>setTambahPemilik(false)}/>}
      {detailPenduduk && <Modal component={<DetailPenduduk detailPenduduk={detailPenduduk} />} close={()=>setDetailPenduduk(false)}/> }
      {open === "Admin" && <Modal component={<LoginPage setOpen={setOpen} />} close={()=>setOpen(false)}/> }
      {open === "Tambah" && <Modal component={<ContainerBangunan basemap={basemap} />} close={()=>setOpen(false)}/> }
      {open === "Edit" && <Modal component={<EditBangunan data={bangunanSelect} />} close={()=>setOpen(false)}/> }
      <Map 
        setbangunanSelect={setbangunanSelect} 
        bangunanSelect={bangunanSelect} 
        setOpen={setOpen} 
        basemap={basemap}
        opacityBasemap={opacityBasemap}
        opacityBangunan={opacityBangunan}
        opacityBatas={opacityBatas}
        opacityFoto={opacityFoto}
      />
    </div>
  )
}

export default Dashboard