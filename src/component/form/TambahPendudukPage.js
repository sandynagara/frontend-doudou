import React,{useState} from 'react'
import ButtonTipeInput from './TambahPenduduk/ButtonTipeInput'
import "./TambahPendudukcroolBar.css"
import FormEnumerator from './TambahPenduduk/FormEnumerator'
import FormLokasi from './TambahPenduduk/FormLokasi'
import FormKeluarga from './TambahPenduduk/FormKeluarga'
import FormPemukiman from './TambahPenduduk/FormPemukiman'
import FormIndividu from './TambahPenduduk/FormIndividu'
import FormPekerjaan from './TambahPenduduk/FormPekerjaan'
import FormKesehatan from './TambahPenduduk/FormKesehatan'

function TambahPendudukPage() {

  const [pilih, setPilih] = useState("Enumerator")

  return (
    <div className='p-3 text-left ' >
        <div className='w-full flex overflow-x-scroll scrollbar'>
          <ButtonTipeInput teks="Enumerator" pilih={pilih} setPilih={setPilih}/>
          <ButtonTipeInput teks="Lokasi" pilih={pilih} setPilih={setPilih}/>
          <ButtonTipeInput teks="Keluarga" pilih={pilih} setPilih={setPilih}/>
          <ButtonTipeInput teks="Pemukiman" pilih={pilih} setPilih={setPilih}/>
          <ButtonTipeInput teks="Individu" pilih={pilih} setPilih={setPilih}/>
          <ButtonTipeInput teks="Pekerjaan" pilih={pilih} setPilih={setPilih}/>
          <ButtonTipeInput teks="Kesehatan" pilih={pilih} setPilih={setPilih}/>
        </div>
        <div className='relative '>
          <div
            className='absolute w-full h-full'
            style={ pilih !== "Enumerator" ? {zIndex:-1}:{}}>
            <FormEnumerator/>
          </div>
          <div 
            className='absolute w-full h-full'
            style={ pilih !== "Lokasi" ? {zIndex:-1}:{}}>
            <FormLokasi/>
          </div>
          <div 
            className='absolute w-full h-full'
            style={ pilih !== "Keluarga" ? {zIndex:-1}:{}}>
            <FormKeluarga/>
          </div>
          <div 
            className='absolute w-full h-full'
            style={ pilih !== "Pemukiman" ? {zIndex:-1}:{}}>
            <FormPemukiman/>
          </div>
          <div 
            className='absolute w-full h-full'
            style={ pilih !== "Individu" ? {zIndex:-1}:{}}>
            <FormIndividu/>
          </div>
          <div 
            className='absolute w-full h-full'
            style={ pilih !== "Pekerjaan" ? {zIndex:-1}:{}}>
            <FormPekerjaan/>
          </div>
          <div 
            className='absolute w-full h-full'
            style={ pilih !== "Kesehatan" ? {zIndex:-1}:{}}>
            <FormKesehatan/>
          </div>
        </div>
    </div>
  )
}

export default TambahPendudukPage