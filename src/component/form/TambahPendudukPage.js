import React,{useState,useEffect,useRef} from 'react'
import ButtonTipeInput from './TambahPenduduk/ButtonTipeInput'
import "./TambahPendudukcroolBar.css"
import FormEnumerator from './TambahPenduduk/FormEnumerator'
import FormLokasi from './TambahPenduduk/FormLokasi'
import FormKeluarga from './TambahPenduduk/FormKeluarga'
import FormPemukiman from './TambahPenduduk/FormPemukiman'
import FormIndividu from './TambahPenduduk/FormIndividu'
import FormPekerjaan from './TambahPenduduk/FormPekerjaan'
import FormKesehatan from './TambahPenduduk/FormKesehatan'
import FormPendidikan from './TambahPenduduk/FormPendidikan'
import FormAkses from './TambahPenduduk/FormAkses'
import configApi from "../config.json"

function TambahPendudukPage() {

  const buttonSubmit = useRef()

  const [pilih, setPilih] = useState("Enumerator")

  const [enumerator, setEnumerator] = useState()
  const [lokasi, setLokasi] = useState()
  const [keluarga, setKeluarga] = useState()
  const [pemukiman, setPemukiman] = useState()
  const [akses, setAkses] = useState()
  const [individu, setIndividu] = useState()
  const [pekerjaan, setPekerjaan] = useState()
  const [kesehatan, setKesehatan] = useState()
  const [pendidikan, setPendidikan] = useState()

  const [enumeratorWajib, setEnumeratorWajib] = useState(true)
  const [lokasiWajib, setLokasiWajib] = useState(true)
  const [keluargaWajib, setKeluargaWajib] = useState(true)
  const [pemukimanWajib, setPemukimanWajib] = useState(true)
  const [individuWajib, setIndividuWajib] = useState(true)
  const [pendidikanWajib, setPendidikanWajib] = useState(true)

  useEffect(() => {
    if(!enumeratorWajib && !lokasiWajib && !keluargaWajib && !pemukimanWajib && !individuWajib && !pendidikanWajib){
      buttonSubmit.current.disabled = false
      buttonSubmit.current.style.backgroundColor = "rgb(14 165 233)"
      buttonSubmit.current.style.cursor = "Pointer"
    }else{
      buttonSubmit.current.disabled = true
      buttonSubmit.current.style.backgroundColor = "rgb(186 230 253)"
      buttonSubmit.current.style.cursor = "Default"
    }
  }, [enumeratorWajib,lokasiWajib,keluargaWajib,pemukimanWajib,individuWajib,pendidikanWajib])
  

  const submit = () =>{
    var penduduk = {
      enumerator:enumerator,
      lokasi:lokasi,
      keluarga:keluarga,
      pemukiman:pemukiman,
      akses:akses,
      individu:individu,
      pekerjaan:pekerjaan,
      kesehatan:kesehatan,
      pendidikan:pendidikan
    }
    console.log(penduduk)
    fetch(configApi.SERVER_API_Develop+"penduduk",{
      method:"POST",
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },body: JSON.stringify({
          enumerator:enumerator,
          lokasi:lokasi,
          keluarga:keluarga,
          pemukiman:pemukiman,
          akses:akses,
          individu:individu,
          pekerjaan:pekerjaan,
          kesehatan:kesehatan,
          pendidikan:pendidikan
      }),
    }).
    then(res=>res.json()).
    then(res=>console.log(res)).
    catch(err=>console.log(err))
  }

  return (
    <div className=' p-3 text-left ' >
        <div className='w-full flex overflow-x-scroll scrollbar '>
          <ButtonTipeInput teks="Enumerator" pilih={pilih} setPilih={setPilih} wajib={enumeratorWajib}/>
          <ButtonTipeInput teks="Lokasi" pilih={pilih} setPilih={setPilih} wajib={lokasiWajib}/>
          <ButtonTipeInput teks="Keluarga" pilih={pilih} setPilih={setPilih} wajib={keluargaWajib}/>
          <ButtonTipeInput teks="Pemukiman" pilih={pilih} setPilih={setPilih} wajib={pemukimanWajib}/>
          <ButtonTipeInput teks="Akses" pilih={pilih} setPilih={setPilih}/>
          <ButtonTipeInput teks="Individu" pilih={pilih} setPilih={setPilih} wajib={individuWajib}/>
          <ButtonTipeInput teks="Pekerjaan" pilih={pilih} setPilih={setPilih}/>
          <ButtonTipeInput teks="Kesehatan" pilih={pilih} setPilih={setPilih}/>
          <ButtonTipeInput teks="Pendidikan" pilih={pilih} setPilih={setPilih} wajib={pendidikanWajib}/>
        </div>
        <div className='relative'
          style={{height:"430px"}}
        >
          <div
            className='absolute w-full h-full '
            style={ pilih !== "Enumerator" ? {zIndex:-1}:{}}>
            <FormEnumerator setEnumerator={setEnumerator} warning={setEnumeratorWajib}/>
          </div>
          <div 
            className='absolute w-full h-full'
            style={ pilih !== "Lokasi" ? {zIndex:-1}:{}}>
            <FormLokasi setLokasi={setLokasi} warning={setLokasiWajib}/>
          </div>
          <div 
            className='absolute w-full h-full'
            style={ pilih !== "Keluarga" ? {zIndex:-1}:{}}>
            <FormKeluarga setKeluarga={setKeluarga} warning={setKeluargaWajib}/>
          </div>
          <div 
            className='absolute w-full h-full'
            style={ pilih !== "Pemukiman" ? {zIndex:-1}:{}}>
            <FormPemukiman setPemukiman={setPemukiman} warning={setPemukimanWajib}/>
          </div>
          <div 
            className='absolute w-full h-full'
            style={ pilih !== "Akses" ? {zIndex:-1}:{}}>
            <FormAkses setAkses={setAkses}/>
          </div>
          <div 
            className='absolute w-full h-full'
            style={ pilih !== "Individu" ? {zIndex:-1}:{}}>
            <FormIndividu setIndividu={setIndividu} warning={setIndividuWajib}/>
          </div>
          <div 
            className='absolute w-full h-full'
            style={ pilih !== "Pekerjaan" ? {zIndex:-1}:{}}>
            <FormPekerjaan setPekerjaan={setPekerjaan}/>
          </div>
          <div 
            className='absolute w-full h-full'
            style={ pilih !== "Kesehatan" ? {zIndex:-1}:{}}>
            <FormKesehatan setKesehatan={setKesehatan}/>
          </div>
          <div 
            className='absolute w-full h-full'
            style={ pilih !== "Pendidikan" ? {zIndex:-1}:{}}>
            <FormPendidikan setPendidikan={setPendidikan} warning={setPendidikanWajib}/>
          </div>
        
        </div>
        <div className='w-full p-2'
          onClick={submit}
        >
          <button className='bg-sky-500 px-8 rounded-md cursor-pointer py-2 mx-3 absolute right-0 text-white hover:bg-sky-800'
            ref={buttonSubmit}
          >
            Add
            </button>
        </div>
    </div>
  )
}

export default TambahPendudukPage