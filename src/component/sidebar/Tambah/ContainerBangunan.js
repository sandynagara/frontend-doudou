import React,{useState,useEffect ,useRef} from 'react'

import ButtonHeaderForm from '../../form/ButtonHeaderForm';
import TambahPendudukPage from '../../form/TambahPendudukPage';
import TambahBangunan from './TambahBangunan';

function ContainerBangunan({data=false,basemap}) {

  const [pilih, setPilih] = useState("Bangunan")

 
  return (
    <div className='bg-white rounded-md relative'
    style={{
        width:"600px",
        height:"600px"
    }}>
        <div className='w-full grid grid-cols-2'>
            <ButtonHeaderForm teks="Bangunan" pilih={pilih} setPilih={setPilih}/>
            <ButtonHeaderForm teks="Penduduk" pilih={pilih} setPilih={setPilih}/>
        </div>
        <div 
            className='absolute w-full h-full '
            style={ pilih !== "Bangunan" ? {zIndex:-1}:{}}>
            <TambahBangunan/>
        </div>
        <div 
            className='absolute w-full h-full '
            style={ pilih !== "Penduduk" ? {zIndex:-1}:{}}>
            <TambahPendudukPage/>
        </div>
    </div>
  )
}

export default ContainerBangunan