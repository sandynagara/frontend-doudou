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

function Dashboard() {

  const [open, setOpen] = useState(false)
  const [bangunanSelect, setbangunanSelect] = useState()
  const [tambahPemilik, setTambahPemilik] = useState(false)
  const [detailPenduduk, setDetailPenduduk] = useState(false)
  const [basemap, setBasemap] = useState("https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}");

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
          <Bangunan 
            open={open} 
            jenis="Bangunan"
            bangunanSelect={bangunanSelect}
            setTambahPemilik={setTambahPemilik}
            setDetailPenduduk={setDetailPenduduk}
          />
          }
      />
      {tambahPemilik && <Modal component={<ContainerInputSearch bangunanSelect={bangunanSelect} setTambahPemilik={setTambahPemilik}/>} close={()=>setTambahPemilik(false)}/>}
      {detailPenduduk && <Modal component={<DetailPenduduk detailPenduduk={detailPenduduk} />} close={()=>setDetailPenduduk(false)}/> }
      <Map setbangunanSelect={setbangunanSelect} bangunanSelect={bangunanSelect} setOpen={setOpen} basemap={basemap}/>
    </div>
  )
}

export default Dashboard