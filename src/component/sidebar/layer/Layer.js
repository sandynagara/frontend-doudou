import React from 'react'
import Slider from './Slider'

function Layer({jenis,open,setOpacityFoto,setOpacityBasemap,setOpacityBangunan,setOpacityBatas}) {
  return (
    <div className='w-30 px-3 py-2 duration-500 text-sm text-left'
    style={open === jenis ? {marginLeft:"50px", width: "275px" } : {marginLeft:"-300px", width: "275px"}}
    >   
        <div className='mb-2'>
            <Slider label="Batas Desa" setOpacity={setOpacityBatas}/>
        </div>
        <div className='mb-2'>
            <Slider label="Foto Udara" setOpacity={setOpacityFoto}/>
        </div>
        <div className='mb-2'>
            <Slider label="Basemap" setOpacity={setOpacityBasemap}/>
        </div>
        <div className='mb-2'>   
            <Slider label="Bangunan" setOpacity={setOpacityBangunan}/>
        </div>
    </div>
  )
}

export default Layer