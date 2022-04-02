import React,{useEffect, useState} from 'react'
import InputForm from './InputForm'
import SelectForm from './SelectForm'

function TableJarakWaktu({judul,setTabel,data=false,edit=true}) {

    const listKemudahan = ["Mudah","Sulit"]

    const [jarak,setJarak] = useState(0)
    const [waktu,setWaktu] = useState(0)
    const [kemudahan,setKemudahan] = useState("Mudah")

    useEffect(() => {
    
      if(data){
        setJarak(data["jarak"])
        setWaktu(data["waktu"])
        setKemudahan(data["kemudahan"])
      }
    }, [data])

    useEffect(() => {
      var table = {
          jarak:jarak,
          waktu:waktu,
          kemudahan:kemudahan
      }

      setTabel(table)
    }, [jarak,waktu,kemudahan,setTabel])
    

  return (
    <div className='flex justify-center items-center'>
        <div className='w-1/2'>{judul}</div>
        <div className='w-1/2 px-1'>
            <InputForm placeholder={"Jarak (km)"} type="Number" name="jarak" text={jarak} edit={edit} onChange={(e)=>{setJarak(e.target.value)}}/>
        </div>
        <div className='w-1/2 px-1'>
            <InputForm placeholder={"Waktu (jam)"} type="Number" name="waktu" text={waktu} edit={edit} onChange={(e)=>{setWaktu(e.target.value)}}/>
        </div>
        <div className='w-1/2 pl-2'>
            <SelectForm name="Kemudahan" list={listKemudahan} text={kemudahan} edit={edit} onChange={(e)=>{setKemudahan(e.target.value)}}/>
        </div>
    </div>
  )
}

export default TableJarakWaktu