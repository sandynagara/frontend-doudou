import React,{useState,useEffect} from 'react'
import {RiErrorWarningFill} from "react-icons/ri"
import InputForm from "../../InputForm"

function FormLokasi({setLokasi=()=>{},warning=()=>{},edit=true,lokasi=false}) {

  const [provinsi, setProvinsi] = useState("")
  const [kabupaten, setKabupaten] = useState("")
  const [desa, setDesa] = useState("")
  const [rt, setRt] = useState("")
  const [nama, setNama] = useState("")
  const [alamat, setAlamat] = useState("")
  const [hp, setHp] = useState("")
  const [telepon, setTelepon] = useState("")

  useEffect(() => {
    
    if(lokasi){
      console.log(lokasi,"lokasi")
      setProvinsi(lokasi["provinsi"])
      setKabupaten(lokasi["kabupaten"])
      setDesa(lokasi["desa"])
      setRt(lokasi["rt"])
      setNama(lokasi["nama"])
      setAlamat(lokasi["alamat"])
      setHp(lokasi["hp"])
      setTelepon(lokasi["telepon"])
    }
  }, [lokasi])

  useEffect(() => {
    var lokasi = {
      provinsi:provinsi,
      kabupaten:kabupaten,
      desa:desa,
      rt:rt,
      nama:nama,
      alamat:alamat,
      hp:hp,
      telepon:telepon
    }
    if(provinsi !== "" && kabupaten !== "" && desa !== "" && rt !== "" && nama !== "" && alamat !== "" ){
      warning(false)
    }else{
      warning(true)
    }
    setLokasi(lokasi)
  }, [provinsi,kabupaten,desa,rt,nama,alamat,hp,telepon,setLokasi])
  

  return (
    <div className='overflow-y-scroll scrollbar'
        style={{
          height:"100%"
          }}
    >
        <div >
          <div className='flex items-center'>
            <div className='py-2 mr-2'>Provinsi</div>
            {provinsi === "" &&  <RiErrorWarningFill style={{color:"red"}}/>}
          </div>
          <InputForm placeholder="Provinsi" name="provinsi-lokasi" wajib={true} edit={edit} text={provinsi} onChange={(e)=>setProvinsi(e.target.value)}/>
        </div>
        <div>
          <div className='flex items-center'>
            <div className='py-2 mr-2'>Kabupaten/kota</div>
            {kabupaten === "" &&  <RiErrorWarningFill style={{color:"red"}}/>}
          </div>
          <InputForm placeholder="Kabupaten/kota" name="kabupaten-lokasi" wajib={true} edit={edit} text={kabupaten} onChange={(e)=>setKabupaten(e.target.value)}/>
        </div>
        <div>
          <div className='flex items-center'>
            <div className='py-2 mr-2'>Kecamatan</div>
            {desa === "" &&  <RiErrorWarningFill style={{color:"red"}}/>}
          </div>
          <InputForm placeholder="Desa" name="desa-lokasi" wajib={true} edit={edit} text={desa} onChange={(e)=>setDesa(e.target.value)}/>
        </div>
        <div>
          <div className='flex items-center'>
            <div className='py-2 mr-2'>RT/RW</div>
            {rt === "" &&  <RiErrorWarningFill style={{color:"red"}}/>}
          </div>
          <InputForm placeholder="RT/RW" name="rt/rw-lokasi" wajib={true} edit={edit} text={rt} onChange={(e)=>setRt(e.target.value)}/>
        </div>
        <div>
          <div className='flex items-center'>
            <div className='py-2 mr-2'>Nama</div>
            {nama === "" &&  <RiErrorWarningFill style={{color:"red"}}/>}
          </div>
          <InputForm placeholder="nama" name="nama-lokasi" wajib={true} edit={edit} text={nama} onChange={(e)=>setNama(e.target.value)}/>
        </div>
        <div>
          <div className='flex items-center'>
            <div className='py-2 mr-2'>Alamat</div>
            {alamat === "" &&  <RiErrorWarningFill style={{color:"red"}}/>}
          </div>
          <InputForm placeholder="Alamat" name="alamat-lokasi" wajib={true} edit={edit} text={alamat} onChange={(e)=>setAlamat(e.target.value)}/>
        </div>
        <div>
          <div className='py-2'>Nomor Hp</div>
          <InputForm placeholder="Nomor Hp" name="hp-lokasi" edit={edit} text={hp} onChange={(e)=>setHp(e.target.value)}/>
        </div>
        <div>
          <div className='py-2'>Nomor telepon kabel/rumah</div>
          <InputForm placeholder="Nomor telepon kabel/rumah" name="hp-rumah-lokasi" edit={edit} text={telepon} onChange={(e)=>setTelepon(e.target.value)}/>
        </div>
    </div>
  )
}

export default FormLokasi