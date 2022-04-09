import React,{useState,useEffect} from 'react'
import {AiFillDollarCircle} from "react-icons/ai"
import {BsFillPersonFill} from "react-icons/bs"
import {FaAddressCard} from "react-icons/fa"
import {MdOutlineWork,MdPhoneAndroid,MdHomeWork,MdEdit,MdSave,MdCancel} from "react-icons/md"
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
import ItemPengenalPenduduk from './ItemPengenalPenduduk'
import Swal from "sweetalert2"

function DetailPenduduk({detailPenduduk}) {

    const [pilih, setPilih] = useState("Enumerator")
    const [dataPenduduk, setDataPenduduk] = useState(false)
    const [edit, setEdit] = useState(false)
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
      const url = configApi.SERVER_API + `penduduk/${detailPenduduk}`
      fetch(url,{
          method:"GET",
          credentials:"include"
        }).then(res=>res.json()).then(res=>{
            setDataPenduduk(res)
        }).catch(err=>console.log(err))
        }, [detailPenduduk])
    
    const updatePenduduk = () => {
        const url = configApi.SERVER_API+`penduduk/${detailPenduduk}`
        fetch(url,{
            method:"PATCH",
            credentials:"include",
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
          }).then(res=>res.json()).then(res=>{
            if(res["RTN"]){
                Swal.fire({
                  icon: 'success',
                  title: 'Data penduduk berhasil diupdate',
                })
                setEdit(false)
              }else{
                Swal.fire({
                  icon: 'error',
                  title: 'Data penduduk gagal diupdate',
                })
              }
          }).catch(err=>console.log(err))
    }

  return (
    <div 
    className='bg-white rounded-md py-2 px-3 text-left relative'
    style={{
        width:"600px",
        height:"600px"
    }}
    >   
        {dataPenduduk && 
            <div className='grid grid-cols-2 m-1 mx-3'>
                <ItemPengenalPenduduk judul={"Nama"} isi={dataPenduduk["individu"]["nama"]} icon={ <BsFillPersonFill style={{width:"20px",height:"20px",color:"gray"}}/>}/>
                <ItemPengenalPenduduk judul={"Status Pekerjaan"} isi={dataPenduduk["pekerjaan"]["kondisi"]} icon={ <MdOutlineWork style={{width:"20px",height:"20px",color:"gray"}}/>}/>
                <ItemPengenalPenduduk judul={"Nomor Induk Kependudukan"} isi={dataPenduduk["individu"]["nik"]} icon={ <FaAddressCard style={{width:"20px",height:"20px",color:"gray"}}/>}/>
                <ItemPengenalPenduduk judul={"Pekerjaan Utama"} isi={dataPenduduk["pekerjaan"]["pekerjaan"]} icon={ <MdHomeWork style={{width:"20px",height:"20px",color:"gray"}}/>}/>
                <ItemPengenalPenduduk judul={"Nomor Handphone"} isi={dataPenduduk["individu"]["hp"]} icon={ <MdPhoneAndroid style={{width:"20px",height:"20px",color:"gray"}}/>}/>
                <ItemPengenalPenduduk judul={"Penghasilan"} isi={dataPenduduk["pekerjaan"]["jumlah_penghasilan"]} icon={ <AiFillDollarCircle style={{width:"20px",height:"20px",color:"gray"}}/>}/>
            </div>
        }
        
        <div className='top-5 absolute right-5'>
            {
                edit ? 
                <div>
                    <div className='cursor-pointer bg-gray-300 rounded-full p-2 mb-2'
                        onClick={updatePenduduk}
                    >
                        <MdSave style={{color:"black"}} />
                    </div>
                    <div className='cursor-pointer bg-gray-300 rounded-full p-2'
                        onClick={()=>setEdit(false)}
                    >
                        <MdCancel  style={{color:"black"}}/>
                    </div>
                </div> : 
                <div className='cursor-pointer bg-gray-300 rounded-full p-2'
                    onClick={()=>setEdit(true)}
                >
                    <MdEdit  style={{color:"black"}}/>
                </div> 
            }
            
            
        </div>
        <div className='w-full flex overflow-x-scroll scrollbar '>
          <ButtonTipeInput teks="Enumerator" pilih={pilih} setPilih={setPilih} wajib={enumeratorWajib}/>
          <ButtonTipeInput teks="Lokasi" pilih={pilih} setPilih={setPilih} wajib={lokasiWajib} />
          <ButtonTipeInput teks="Keluarga" pilih={pilih} setPilih={setPilih} wajib={keluargaWajib}/>
          <ButtonTipeInput teks="Pemukiman" pilih={pilih} setPilih={setPilih} wajib={pemukimanWajib}/>
          <ButtonTipeInput teks="Akses" pilih={pilih} setPilih={setPilih}/>
          <ButtonTipeInput teks="Individu" pilih={pilih} setPilih={setPilih} wajib={individuWajib} />
          <ButtonTipeInput teks="Pekerjaan" pilih={pilih} setPilih={setPilih}/>
          <ButtonTipeInput teks="Kesehatan" pilih={pilih} setPilih={setPilih}/>
          <ButtonTipeInput teks="Pendidikan" pilih={pilih} setPilih={setPilih} wajib={pendidikanWajib}/>
        </div>
        <div className='relative px-2'
          style={{height:"380px"}}
        >
            <div
                className='absolute w-full h-full '
                style={ pilih !== "Enumerator" ? {zIndex:-1}:{}}>
                <FormEnumerator  setEnumerator={setEnumerator} warning={setEnumeratorWajib} edit={edit} enumerator={dataPenduduk["enumerator"]}/>
            </div>
            <div 
                className='absolute w-full h-full'
                style={ pilih !== "Lokasi" ? {zIndex:-1}:{}}>
                <FormLokasi setLokasi={setLokasi} warning={setLokasiWajib} edit={edit} lokasi={dataPenduduk["lokasi"]}/>
            </div>
            <div 
                className='absolute w-full h-full'
                style={ pilih !== "Keluarga" ? {zIndex:-1}:{}}>
                <FormKeluarga setKeluarga={setKeluarga} warning={setKeluargaWajib} edit={edit} keluarga={dataPenduduk["keluarga"]}/>
            </div>
            <div 
                className='absolute w-full h-full'
                style={ pilih !== "Pemukiman" ? {zIndex:-1}:{}}>
                <FormPemukiman setPemukiman={setPemukiman} warning={setPemukimanWajib} edit={edit} pemukiman={dataPenduduk["pemukiman"]}/>
            </div>
            <div 
                className='absolute w-full h-full'
                style={ pilih !== "Akses" ? {zIndex:-1}:{}}>
                <FormAkses setAkses={setAkses} edit={edit} akses={dataPenduduk["akses"]}/>
            </div>
            <div 
                className='absolute w-full h-full'
                style={ pilih !== "Individu" ? {zIndex:-1}:{}}>
                <FormIndividu setIndividu={setIndividu} warning={setIndividuWajib} edit={edit} individu={dataPenduduk["individu"]}/>
            </div>
            <div 
                className='absolute w-full h-full'
                style={ pilih !== "Pekerjaan" ? {zIndex:-1}:{}}>
                <FormPekerjaan setPekerjaan={setPekerjaan} edit={edit} pekerjaan={dataPenduduk["pekerjaan"]}/>
            </div>
            <div 
                className='absolute w-full h-full'
                style={ pilih !== "Kesehatan" ? {zIndex:-1}:{}}>
                <FormKesehatan setKesehatan={setKesehatan} edit={edit} kesehatan={dataPenduduk["kesehatan"]}/>
            </div>
            <div 
                className='absolute w-full h-full'
                style={ pilih !== "Pendidikan" ? {zIndex:-1}:{}}>
                <FormPendidikan setPendidikan={setPendidikan} warning={setPendidikanWajib} edit={edit} pendidikan={dataPenduduk["pendidikan"]}/>
            </div>
        </div>
        
    </div>
  )
}

export default DetailPenduduk