import React,{useState,useEffect} from 'react'
import configApi from "../../config.json"
import FormEnumerator from '../../form/TambahPenduduk/Form/FormEnumerator'
import ButtonTipeInput from '../../form/TambahPenduduk/ButtonTipeInput'
import FormAkses from '../../form/TambahPenduduk/Form/FormAkses'
import FormIndividu from '../../form/TambahPenduduk/Form/FormIndividu'
import FormKeluarga from '../../form/TambahPenduduk/Form/FormKeluarga'
import FormKesehatan from '../../form/TambahPenduduk/Form/FormKesehatan'
import FormLokasi from '../../form/TambahPenduduk/Form/FormLokasi'
import FormPekerjaan from '../../form/TambahPenduduk/Form/FormPekerjaan'
import FormPemukiman from '../../form/TambahPenduduk/Form/FormPemukiman'
import FormPendidikan from '../../form/TambahPenduduk/Form/FormPendidikan'

function DetailPenduduk({detailPenduduk}) {

    const [pilih, setPilih] = useState("Enumerator")
    const [dataPenduduk, setDataPenduduk] = useState(false)

    useEffect(() => {
      const url = configApi.SERVER_API_Develop + `penduduk/${detailPenduduk}`
      fetch(url,{
          method:"GET",
          credentials:"include"
        }).then(res=>res.json()).then(res=>{
            console.log(res)
            setDataPenduduk(res)
        }).catch(err=>console.log(err))
    }, [detailPenduduk])
    

  return (
    <div 
    className='bg-white rounded-md py-2 px-3 text-left'
    style={{
        width:"600px",
        height:"600px"
    }}
    >
        <div className='w-full flex overflow-x-scroll scrollbar '>
          <ButtonTipeInput teks="Enumerator" pilih={pilih} setPilih={setPilih}/>
          <ButtonTipeInput teks="Lokasi" pilih={pilih} setPilih={setPilih} />
          <ButtonTipeInput teks="Keluarga" pilih={pilih} setPilih={setPilih}/>
          <ButtonTipeInput teks="Pemukiman" pilih={pilih} setPilih={setPilih}/>
          <ButtonTipeInput teks="Akses" pilih={pilih} setPilih={setPilih}/>
          <ButtonTipeInput teks="Individu" pilih={pilih} setPilih={setPilih} />
          <ButtonTipeInput teks="Pekerjaan" pilih={pilih} setPilih={setPilih}/>
          <ButtonTipeInput teks="Kesehatan" pilih={pilih} setPilih={setPilih}/>
          <ButtonTipeInput teks="Pendidikan" pilih={pilih} setPilih={setPilih}/>
        </div>
        <div className='relative px-2'
          style={{height:"520px"}}
        >
            <div
                className='absolute w-full h-full '
                style={ pilih !== "Enumerator" ? {zIndex:-1}:{}}>
                <FormEnumerator edit={false} enumerator={dataPenduduk["enumerator"]}/>
            </div>
            <div 
                className='absolute w-full h-full'
                style={ pilih !== "Lokasi" ? {zIndex:-1}:{}}>
                <FormLokasi edit={false} lokasi={dataPenduduk["lokasi"]}/>
            </div>
            <div 
                className='absolute w-full h-full'
                style={ pilih !== "Keluarga" ? {zIndex:-1}:{}}>
                <FormKeluarga edit={false} keluarga={dataPenduduk["keluarga"]}/>
            </div>
            <div 
                className='absolute w-full h-full'
                style={ pilih !== "Pemukiman" ? {zIndex:-1}:{}}>
                <FormPemukiman edit={false} pemukiman={dataPenduduk["pemukiman"]}/>
            </div>
            <div 
                className='absolute w-full h-full'
                style={ pilih !== "Akses" ? {zIndex:-1}:{}}>
                <FormAkses edit={false} akses={dataPenduduk["akses"]}/>
            </div>
            <div 
                className='absolute w-full h-full'
                style={ pilih !== "Individu" ? {zIndex:-1}:{}}>
                <FormIndividu edit={false} individu={dataPenduduk["individu"]}/>
            </div>
            <div 
                className='absolute w-full h-full'
                style={ pilih !== "Pekerjaan" ? {zIndex:-1}:{}}>
                <FormPekerjaan edit={false} pekerjaan={dataPenduduk["pekerjaan"]}/>
            </div>
            <div 
                className='absolute w-full h-full'
                style={ pilih !== "Kesehatan" ? {zIndex:-1}:{}}>
                <FormKesehatan edit={false} kesehatan={dataPenduduk["kesehatan"]}/>
            </div>
            <div 
                className='absolute w-full h-full'
                style={ pilih !== "Pendidikan" ? {zIndex:-1}:{}}>
                <FormPendidikan edit={false} pendidikan={dataPenduduk["pendidikan"]}/>
            </div>
        </div>
        
    </div>
  )
}

export default DetailPenduduk