import React,{useState} from 'react'
import SearchPage from './SearchPage'
import TambahPendudukPage from './TambahPendudukPage'
import ButtonHeaderForm from './ButtonHeaderForm'

function FormInputSearch({bangunanSelect,setTambahPemilik}) {

    const [pilih, setPilih] = useState("Cari")

  return (
    <div 
        className='bg-white rounded-md'
        style={{
            width:"600px",
            height:"600px"
        }}
    >
        <div className='w-full grid grid-cols-2'>
          <ButtonHeaderForm teks="Cari" pilih={pilih} setPilih={setPilih}/>
          <ButtonHeaderForm teks="Input Baru" pilih={pilih} setPilih={setPilih}/>
        </div>
        <div className='relative'>
          <div
            className='absolute w-full h-full'
            style={ pilih !== "Cari" ? {zIndex:-1}:{}}>
            <SearchPage bangunanSelect={bangunanSelect} setTambahPemilik={setTambahPemilik}/>
          </div>
          <div 
            className='absolute w-full h-full '
            style={ pilih !== "Input Baru" ? {zIndex:-1}:{}}>
            <TambahPendudukPage/>
          </div>
        </div>
        
        {/* {pilih == "Input Baru" && <TambahPendudukPage/>} */}
    </div>
  )
}

export default FormInputSearch