import React,{useState, useEffect} from 'react'
import InputForm from "./InputForm"
import {RiErrorWarningFill} from "react-icons/ri"

function FormEnumerator({setEnumerator,warning}) {

  const [nama, setNama] = useState("")
  const [alamat, setAlamat] = useState("")
  const [hp, setHp] = useState("")

  useEffect(() => {
    var enumerator = {
      nama:nama,
      alamat:alamat,
      hp:hp
    }
    if(nama !== "" && alamat !== "" ){
      warning(false)
    }else{
      warning(true)
    }
    setEnumerator(enumerator)
  }, [nama,alamat,hp,setEnumerator])

  return (
    <div>
        <div>
          <div className='flex items-center'>
            <div className='py-2 mr-2'>Nama</div>
            {nama === "" &&  <RiErrorWarningFill style={{color:"red"}}/>}
          </div>
          <InputForm placeholder="Nama" name="nama" wajib={true} onChange={(e)=>{setNama(e.target.value)}}/>
        </div>
        <div>
        <div className='flex items-center'>
            <div className='py-2 mr-2'>Alamat</div>
            {alamat === "" &&  <RiErrorWarningFill style={{color:"red"}}/>}
          </div>
          <InputForm placeholder="Alamat" name="alamat" wajib={true} onChange={(e)=>{setAlamat(e.target.value)}}/>
        </div>
        <div>
          <div className='py-2'>HP/Telepon</div>
          <InputForm placeholder="Hp" name="hp" onChange={(e)=>{setHp(e.target.value)}}/>
        </div>
    </div>
  )
}

export default FormEnumerator