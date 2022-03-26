import React,{useState,useEffect} from 'react'
import {RiErrorWarningFill} from "react-icons/ri"
import InputForm from './InputForm'
import SelectForm from './SelectForm'

var listPendidikan = ["Tidak sekolah","SD dan sederajat","SMP dan sederajat","SMA dan sederajat","Diploma 1-3","S1 dan sederajat","S2 dan sederajat","S3 dan sederajat","Pesantren, seminari, wihara, dan sejenisnya","Lainnya"]

function FormPendidikan({setPendidikan,warning}) {

    const [pendidikanAkhir, setPendidikanAkhir] = useState("Tidak sekolah")
    const [bahasaRumah, setBahasaRumah] = useState("")
    const [bahasaFormal, setBahasaFormal] = useState("")
    const [jumlahKerjaBakti, setJumlahKerjaBakti] = useState(0)
    const [jumlahSiskampling, setJumlahSiskampling] = useState(0)
    const [jumlahPesta, setJumlahPesta] = useState(0)
    const [menolongKematian, setMenolongKematian] = useState(0)
    const [menolongSakit, setMenolongSakit] = useState(0)
    const [menolongKecelakaan, setMenolongKecelakaan] = useState(0)

    useEffect(() => {
      var pendidikan = {
          pendidikan:pendidikanAkhir,
          bahasa_rumah:bahasaRumah,
          bahasa_formal:bahasaFormal,
          jumlah_kerja_bakti:jumlahKerjaBakti,
          jumlah_siskampling:jumlahSiskampling,
          jumlah_pesta:jumlahPesta,
          menolong_kematian:menolongKematian,
          menolong_sakit:menolongSakit,
          menolong_kecelakaan:menolongKecelakaan
      }
      if(bahasaFormal !== "" && bahasaRumah !== ""){
        warning(false)
      }else{
        warning(true)
      }
      setPendidikan(pendidikan)
    }, [pendidikanAkhir,bahasaRumah,bahasaFormal,jumlahKerjaBakti,jumlahSiskampling,jumlahPesta,menolongKematian,menolongSakit,menolongKecelakaan,setPendidikan])
    

  return (
    <div className='overflow-y-scroll scrollbar'
        style={{
          height:"430px"
          }}
    >
        <div>
          <div className='py-2'>Kondisi pekerjaan</div>
          <SelectForm name="kondisi-pekerjaan" list={listPendidikan} onChange={(e)=>setPendidikanAkhir(e.target.value)}/>
        </div>
        <div>
          <div className='flex items-center'>
            <div className='py-2 mr-2'>Bahasa digunakan di rumah dan pemukiman</div>
            {bahasaRumah === "" &&  <RiErrorWarningFill style={{color:"red"}}/>}
          </div>
          <InputForm placeholder="Bahasa di rumah" name="bahasa-rumah-pendidikan" wajib={true} onChange={(e)=>setBahasaRumah(e.target.value)}/>
        </div>
        <div>
          <div className='flex items-center'>
            <div className='py-2 mr-2'>Bahasa digunakan di lembaga formal (sekolah/tempat kerja)</div>
            {bahasaFormal === "" &&  <RiErrorWarningFill style={{color:"red"}}/>}
          </div>
          <InputForm placeholder="Bahasa di lembaga formal" name="bahasa-formal-pendidikan" wajib={true} onChange={(e)=>setBahasaFormal(e.target.value)}/>
        </div>
        <div>
          <div className='py-2'>Kerja bakti setahun terakhir</div>
          <InputForm placeholder="Jumlah kerja bakti" type='Number' name="kerja-bakti-pendidikan" onChange={(e)=>setJumlahKerjaBakti(e.target.value)}/>
        </div>
        <div>
          <div className='py-2'>Siskampling setahun terakhir</div>
          <InputForm placeholder="Jumlah siskampling" type='Number' name="siskampling-pendidikan" onChange={(e)=>setJumlahSiskampling(e.target.value)}/>
        </div>
        <div>
          <div className='py-2'>Pesta rakyat/adat setahun terakhir</div>
          <InputForm placeholder="Jumlah pesta rakyat" type='Number' name="pesta-rakyat-pendidikan" onChange={(e)=>setJumlahPesta(e.target.value)}/>
        </div>
        <div>
          <div className='py-2'>Menolong warga yang mengalami kematian keluarga setahun terakhir</div>
          <InputForm placeholder="Jumlah menolong warga meninggal" type='Number' name="warga-meninggal-pendidikan" onChange={(e)=>setMenolongKematian(e.target.value)}/>
        </div>
        <div>
          <div className='py-2'>Menolong warga yang mengalami sakit setahun terakhir</div>
          <InputForm placeholder="Jumlah menolong warga sakit" type='Number' name="warga-sakit-pendidikan" onChange={(e)=>setMenolongSakit(e.target.value)}/>
        </div>
        <div>
          <div className='py-2'>Menolong warga yang mengalami kecelakaan setahun terakhir</div>
          <InputForm placeholder="Jumlah menolong warga kecelakaan" type='Number' name="warga-kecelakaan-pendidikan" onChange={(e)=>setMenolongKecelakaan(e.target.value)}/>
        </div>
        
    </div>
  )
}

export default FormPendidikan