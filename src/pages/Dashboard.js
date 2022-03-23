import React,{useState} from 'react'
import Map from '../component/map/Map'
import Sidebar from '../component/sidebar/Sidebar'
import SidebarContainer from '../component/sidebar/SidebarContainer'
import Basemap from '../component/sidebar/Basemap-Sidebar/Basemap'
import Modal from '../component/modal/Modal'
import ContainerInputSearch from '../component/form/ContainerInputSearch'

function Dashboard() {

  const [open, setOpen] = useState(false)
  const [basemap, setBasemap] = useState("https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}");

  return (
    <div>
      <Sidebar open={open} setOpen={setOpen}/>
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
      <Modal component={<ContainerInputSearch/>}/>
      <Map/>
    </div>
  )
}

export default Dashboard