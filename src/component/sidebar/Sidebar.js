import React from 'react'
import IconSidebar from './IconSidebar'
import * as Ai from "react-icons/ai";
import {FaRegMap} from "react-icons/fa"
import * as Bs from "react-icons/bs";
import { Link } from "react-router-dom";

function Sidebar({ icon ,judul ,open, setOpen}) {

  return (
    <div className='absolute left-0 h-screen  bg-black' style={{zIndex:1000}}>
        <Link to={"/"}>
            <IconSidebar 
                icon={<Ai.AiOutlineHome className='w-5 h-5'/>}
                judul="Home"
                open={open}
                setOpen={setOpen}
            />
        </Link>
        <IconSidebar 
            icon={<Ai.AiOutlineSearch className='w-5 h-5'/>}
            judul="Search"
            open={open}
            setOpen={setOpen}
        />
        <IconSidebar 
            icon={<Bs.BsBuilding className='w-5 h-5'/>}
            judul="Bangunan"
            open={open}
            setOpen={setOpen}
        />
        <IconSidebar 
            icon={<Bs.BsLayers className='w-5 h-5'/>}
            judul="Layer"
            open={open}
            setOpen={setOpen}
        />
        {/* <IconSidebar 
            icon={<FaRegMap className='w-5 h-5'/>}
            judul="Legenda"
            open={open}
            setOpen={setOpen}
        /> */}
        <IconSidebar 
            icon={<Bs.BsGlobe2 className='w-5 h-5'/>}
            judul="Basemap"
            open={open}
            setOpen={setOpen}
        />
        <IconSidebar 
            icon={<Bs.BsPlusLg className='w-5 h-5'/>}
            judul="Tambah"
            open={open}
            setOpen={setOpen}
        />
        <div className='absolute bottom-0'>
            <IconSidebar 
                icon={<Ai.AiOutlineUser className='w-5 h-5'/>}
                judul="Admin"
                open={open}
                setOpen={setOpen}
            />
        </div>
        
    </div>
  )
}

export default Sidebar