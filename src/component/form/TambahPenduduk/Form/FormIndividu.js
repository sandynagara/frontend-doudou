import React,{useState,useEffect} from 'react'
import {RiErrorWarningFill} from "react-icons/ri"
import SelectForm from '../../SelectForm'
import InputForm from '../../InputForm'

const list = {
  "Jenis kelamin":["Laki-laki","Perempuan"],
  "Agama":["Islam","Kristen","Katolik","Buddha","Hindu"],
  "Pernikanan":["Kawin","Tidak kawin","Duda/Janda"],
  "Warga negara":["WNI","WNA"]
}

function FormIndividu({setIndividu=()=>{},warning=()=>{},edit=true,individu=false}) {

  const [kk, setKk] = useState("-")
  const [nik, setNik] = useState("-")
  const [nama, setNama] = useState("-")
  const [kelamin, setKelamin] = useState("Laki-laki")
  const [lahir, setLahir] = useState("-")
  const [perkawinan, setPerkawinan] = useState("Kawin")
  const [agama, setAgama] = useState("Islam")
  const [suku, setSuku] = useState("-")
  const [wargaNegara, setWargaNegara] = useState("WNI")
  const [hp, setHp] = useState("-")
  const [nomorWa, setNomorWa] = useState("-")
  const [email, setEmail] = useState("-")
  const [fb, setFb] = useState("-")
  const [twitter, setTwitter] = useState("-")
  const [instagram, setInstagram] = useState("-")

  useEffect(() => {
    if(individu){
      console.log(individu,"individu")
      setKk(individu["kk"])
      setNik(individu["nik"])
      setNama(individu["nama"])
      setKelamin(individu["kelamin"])
      setLahir(individu["lahir"])
      setPerkawinan(individu["perkawinan"])
      setAgama(individu["agama"])
      setSuku(individu["suku"])
      setWargaNegara(individu["warga_negara"])
      setHp(individu["hp"])
      setNomorWa(individu["nomor_wa"])
      setEmail(individu["email"])
      setFb(individu["fb"])
      setTwitter(individu["twitter"])
      setInstagram(individu["instagram"])
    }
  }, [individu])

  useEffect(() => {
      var individu = {
        kk:kk,
        nik:nik,
        nama:nama,
        kelamin:kelamin,
        lahir:lahir,
        perkawinan:perkawinan,
        agama:agama,
        suku:suku,
        warga_negara:wargaNegara,
        hp:hp,
        nomor_wa:nomorWa,
        email:email,
        fb:fb,
        twitter:twitter,
        instagram:instagram
      }
      if(kk !== "" && nik !=="" && nama !== "" && lahir !==""){
        warning(false)
      }else{
        warning(true)
      }
      setIndividu(individu)
  }, [kk,nik,nama,kelamin,lahir,perkawinan,agama,suku,wargaNegara,hp,nomorWa,email,fb,twitter,instagram,setIndividu])
  

  return (
    <div className='overflow-y-scroll scrollbar'
        style={{
          height:"100%"
          }}
    >
        <div>
          <div className='flex items-center'>
            <div className='py-2 mr-2'>Nomor Kartu Keluarga</div>
            {kk === "" &&  <RiErrorWarningFill style={{color:"red"}}/>}
          </div>
          <InputForm placeholder="Nomor Kartu Keluarga" name="kk-individu" wajib={true} text={kk} edit={edit} onChange={(e)=>{setKk(e.target.value)}}/>
        </div>
        <div>
          <div className='flex items-center'>
            <div className='py-2 mr-2'>NIK</div>
            {nik === "" &&  <RiErrorWarningFill style={{color:"red"}}/>}
          </div>
          <InputForm placeholder="NIK" name="nik-Individu" wajib={true} text={nik} edit={edit} onChange={(e)=>{setNik(e.target.value)}}/>
        </div>
        <div>
          <div className='flex items-center'>
            <div className='py-2 mr-2'>Nama</div>
            {nama === "" &&  <RiErrorWarningFill style={{color:"red"}}/>}
          </div>
          <InputForm placeholder="Nama" name="nama-individu" wajib={true} text={nama} edit={edit} onChange={(e)=>{setNama(e.target.value)}}/>
        </div>
        <div>
          <div className='py-2'>Jenis Kelamin</div>
          <SelectForm name="jenis-kelamin" list={list["Jenis kelamin"]} text={kelamin} edit={edit} onChange={(e)=>{setKelamin(e.target.value)}}/>
        </div>
        <div>
          <div className='flex items-center'>
            <div className='py-2 mr-2'>Tempat lahir</div>
            {lahir === "" &&  <RiErrorWarningFill style={{color:"red"}}/>}
          </div>
          <InputForm placeholder="Tempat lahir" name="tempat-lahir" wajib={lahir} text={kk} edit={edit} onChange={(e)=>{setLahir(e.target.value)}}/>
        </div>
        <div>
          <div className='py-2'>Status Pernikanan</div>
          <SelectForm name="pernikanan-individu" list={list["Pernikanan"]} text={perkawinan} edit={edit} onChange={(e)=>{setPerkawinan(e.target.value)}}/>
        </div>
        <div>
          <div className='py-2'>Agama</div>
          <SelectForm name="agama" list={list["Agama"]} text={kk} edit={agama} onChange={(e)=>{setAgama(e.target.value)}}/>
        </div>
        <div>
          <div className='py-2'>Suku bangsa</div>
          <InputForm placeholder="Suku Bangsa" name="suku-individu" text={suku} edit={edit} onChange={(e)=>{setSuku(e.target.value)}}/>
        </div>
        <div>
          <div className='py-2'>Warga negara</div>
          <SelectForm name="warga negara" list={list["Warga negara"]} text={wargaNegara} edit={edit} onChange={(e)=>{setWargaNegara(e.target.value)}}/>
        </div>
        <div>
          <div className='py-2'>Nomor HP</div>
          <InputForm placeholder="Nomor HP" name="hp-individu" text={kk} edit={hp} onChange={(e)=>{setHp(e.target.value)}}/>
        </div>
        <div>
          <div className='py-2'>Nomor untuk Whatsapp</div>
          <InputForm placeholder="Nomor untuk Whatsapp" name="wa-individu" text={nomorWa} edit={edit} onChange={(e)=>{setNomorWa(e.target.value)}}/>
        </div>
        <div>
          <div className='py-2'>Alamat email pribadi</div>
          <InputForm placeholder="Alamat email pribadi" name="email-individu" text={email} edit={edit} onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
        <div>
          <div className='py-2'>Alamat Facebook</div>
          <InputForm placeholder="Alamat Facebook pribadi" name="fb-individu" text={fb} edit={edit} onChange={(e)=>{setFb(e.target.value)}}/>
        </div>
        <div>
          <div className='py-2'>Alamat Twitter</div>
          <InputForm placeholder="Alamat twitter pribadi" name="twitter-individu" text={twitter} edit={edit} onChange={(e)=>{setTwitter(e.target.value)}}/>
        </div>
        <div>
          <div className='py-2'>Alamat Instagram</div>
          <InputForm placeholder="Alamat Instagram pribadi" name="ig-individu" text={instagram} edit={edit} onChange={(e)=>{setInstagram(e.target.value)}}/>
        </div>
    </div>
  )
}

export default FormIndividu