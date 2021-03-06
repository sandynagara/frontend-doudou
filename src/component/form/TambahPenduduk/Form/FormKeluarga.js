import React,{useState,useEffect} from 'react'
import {RiErrorWarningFill} from "react-icons/ri"
import InputForm from '../../InputForm'

function FormKeluarga({setKeluarga=()=>{},warning=()=>{},edit=true,keluarga=false}) {

  const [kk, setKK] = useState("")
  const [nik_KK, setNik] = useState("")

  useEffect(() => {
    if(keluarga){
      setKK(keluarga["kk"])
      setNik(keluarga["nik_KK"])
    }
  }, [keluarga])
  
  useEffect(() => {
    var keluarga = {
      kk:kk,
      nik_KK:nik_KK
    }
    setKeluarga(keluarga)
    if(kk !== "" && nik_KK !== ""){
      warning(false)
    }else{
      warning(true)
    }
  }, [kk,nik_KK,setKeluarga])
  

  return (
    <div className='overflow-y-scroll scrollbar'
        style={{
          height:"100%"
          }}
    >
        <div >
          <div className='flex items-center'>
            <div className='py-2 mr-2'>Nomor KK</div>
            {kk === "" &&  <RiErrorWarningFill style={{color:"red"}}/>}
          </div>
          <InputForm placeholder="Nomor KK" name="kk-keluarga" wajib={true} text={kk} edit={edit} onChange={(e)=>setKK(e.target.value)}/>
        </div>
        <div>
          <div className='flex items-center'>
            <div className='py-2 mr-2'>NIK kepala keluarga</div>
            {nik_KK === "" &&  <RiErrorWarningFill style={{color:"red"}}/>}
          </div>
          <InputForm placeholder="NIK kepala keluarga" name="NIK-kepala-keluarga" text={nik_KK} edit={edit} wajib={true} onChange={(e)=>setNik(e.target.value)}/>
        </div>
    </div>
  )
}

export default FormKeluarga