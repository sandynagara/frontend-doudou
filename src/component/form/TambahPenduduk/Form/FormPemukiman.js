import React,{useState,useEffect} from 'react'
import {RiErrorWarningFill} from "react-icons/ri"
import SelectForm from '../../SelectForm'
import InputForm from '../../InputForm'

const list = {
  "Tempat tinggal":["Milik sendiri","Kontrak/Sewa","Bebas sewa","Dipinjami","Dinas","Lainnya"],
  "Status lahan":["Milik sendiri","Milik orang lain","Tanah negara","Lainnya"],
  "Lantai":["Mamer","Keramik","Parket/Vinil/Permadani","Ubin/Legel/Teraso","Kayu/Papan kualitas tinggi","Semen/bata merah","Bambu","Kayu/Papan kualitas rendah"],
  "Dinding":["Semen/Beton/Kayu berkualitas tinggi","Kayu berkualitas rendah/bamboo","Lainnya"],
  "Jendela":["Ada, berfungsi","Ada, tidak berfungsi","Tidak ada"],
  "Atap":["Genteng","Kayu/Jerami","Lainnya"],
  "Penerangan":["Listrik PLN","Listrik non PLN","Lampu minyak","Sumber penerangan lainnya","Tidak ada"],
  "Memasak":["Gas kota/LPG/Biogas","Minyak tanah/Batu bara","Kayu bakar","Lainnya"],
  "Kayu bakar":["Pembelian","Diambil dari hutan","Diambil di luar(bukan hutan)","Lainnya"],
  "TPS":["Tidak ada","Di kebun/sungai/drainase","Dibakar","Tempat sampah","Tempat sampah diangkut reguler"],
  "MCK":["Sendiri","Berkelompok/tetangga","MCK Umum","Tidak ada"],
  "Sumber air mandi":["Ladang/Perpipaan berbayar/Air isi ulang/kemasan","Perpipaan","Mata air/sumur","Sungai, danau, embung","Tadah air hujan","Lainnya"],
  "BAB":["Jamban Sendiri","Jamban bersama tetangga","Jamban umum","Lainnya"],
  "Sumber air minum":["Ledeng/perpiaan berbayar/air isi ulang/kemasan","Mata air/perpipaan/sumur","Sungai, danau, embung","Tadah air hujan","Lainnya"],
  "Tempat limbah":["Tangki/instalasi pengelolaan limbah","kawah/kolam/sungai/drainase/laut","Lubang di tanah","Lainnya"],
  "Sutet":["Ya","Tidak"],
  "Bantaran sungai":["Ya","Tidak"],
  "Lereng bukit":["Ya","Tidak"],
  "Kondisi rumah":["Kumuh","Tidak kumuh"]
}

function FormPemukiman({setPemukiman=()=>{},warning=()=>{},edit=true,pemukiman=false}) {

  const [tempatTinggal, setTempatTinggal] = useState("Milik sendiri")
  const [statusLahan, setStatusLahan] = useState("Milik sendiri")
  const [luasLantai, setLuasLantai] = useState(0)
  const [luasLahan, setLuasLahan] = useState(0)
  const [lantai, setLantai] = useState("Mamer")
  const [dinding, setDinding] = useState("Semen/Beton/Kayu berkualitas tinggi")
  const [jendela, setJendela] = useState("Ada")
  const [atap, setAtap] = useState("Genteng")
  const [penerangan, setPenerangan] = useState("Listrik PLN")
  const [memasak, setMemasak] = useState("Gas kota/LPG/Biogas")
  const [kayuBakar, setKayuBakar] = useState("")
  const [TPS, setTPS] = useState("Tidak ada")
  const [MCK, setMCK] = useState("Sendiri")
  const [sumberMandi, setSumberMandi] = useState("Ladang/Perpipaan berbayar/Air isi ulang/kemasan")
  const [BAB, setBAB] = useState("Jamban Sendiri")
  const [sumberMinum, setSumberMinum] = useState("Ledeng/perpiaan berbayar/air isi ulang/kemasan")
  const [limbah, setLimbah] = useState("Tangki/instalasi pengelolaan limbah")
  const [sutet, setSutet] = useState("Ya")
  const [bantaranSungai, setBantaranSungai] = useState("Ya")
  const [lerengBukit, setLerengBukit] = useState("Ya")
  const [kondisiRumah, setKondisiRumah] = useState("Kumuh")

  useEffect(() => {
    
    if(pemukiman){
      setTempatTinggal(pemukiman["tempat_tinggal"])
      setStatusLahan(pemukiman["status_lahan"])
      setLuasLantai(pemukiman["luas_lantai"])
      setLuasLahan(pemukiman["luas_lahan"])
      setLantai(pemukiman["jenis_lantai"])
      setDinding(pemukiman["dinding"])
      setJendela(pemukiman["jendela"])
      setAtap(pemukiman["atap"])
      setPenerangan(pemukiman["penerangan"])
      setMemasak(pemukiman["memasak"])
      setKayuBakar(pemukiman["kayu"])
      setTPS(pemukiman["tps"])
      setMCK(pemukiman["mck"])
      setSumberMandi(pemukiman["sumber_mandi"])
      setBAB(pemukiman["fasilitas_bab"])
      setSumberMinum(pemukiman["sumber_minum"])
      setLimbah(pemukiman["limbah_cair"])
      setSutet(pemukiman["sutet"])
      setBantaranSungai(pemukiman["bantaran_sungai"])
      setLerengBukit(pemukiman["lereng_bukit"])
      setKondisiRumah(pemukiman["kondisi_rumah"])
    }
  }, [pemukiman])

  useEffect(() => {
    

    var pemukiman={
        tempat_tinggal:tempatTinggal,
        status_lahan:statusLahan,
        luas_lantai:luasLantai,
        luas_lahan:luasLahan,
        jenis_lantai:lantai,
        dinding:dinding,
        jendela:jendela,
        atap:atap,
        penerangan:penerangan,
        memasak:memasak,
        kayu:kayuBakar,
        tps:TPS,
        mck:MCK,
        sumber_mandi:sumberMandi,
        fasilitas_bab:BAB,
        sumber_minum:sumberMinum,
        limbah_cair:limbah,
        sutet:sutet,
        bantaran_sungai:bantaranSungai,
        lereng_bukit:lerengBukit,
        kondisi_rumah:kondisiRumah
    }

    if(luasLantai !== "" && luasLahan !== ""){
      warning(false)
    }else{
      warning(true)
    }

    setPemukiman(pemukiman)
    
  }, [tempatTinggal,statusLahan,luasLantai,luasLahan,lantai,dinding,jendela,
    atap,penerangan,memasak,kayuBakar,TPS,MCK,sumberMandi,BAB,sumberMinum,
    limbah,sutet,bantaranSungai,lerengBukit,kondisiRumah,setPemukiman
  ])
  

  return (
    <div className='overflow-y-scroll scrollbar'
        style={{
          height:"100%"
          }}
    >
        <div >
          <div className='py-2'>Tempat tinggal yang ditempati</div>
          <SelectForm name="Tempat tinggal" list={list["Tempat tinggal"]} edit={edit} text={tempatTinggal} onChange={(e)=>{setTempatTinggal(e.target.value)}}/>
        </div>
        <div >
          <div className='py-2'>Status lahan tempat tinggal yang ditempati</div>
          <SelectForm name="Status lahan" list={list["Status lahan"]} edit={edit} text={statusLahan} onChange={(e)=>{setStatusLahan(e.target.value)}}/>
        </div>
        <div >
          <div className='flex items-center'>
            <div className='py-2 mr-2'>Luas lantai tempat tinggal (m<sup>2</sup>)</div>
            {luasLantai === "" &&  <RiErrorWarningFill style={{color:"red"}}/>}
          </div>
          <InputForm placeholder="Luas lantai" name="luas-lantai-keluarga" type='Number' edit={edit} text={luasLantai} wajib={true} onChange={(e)=>{setLuasLantai(e.target.value)}}/>
        </div>
        <div >
          <div className='flex items-center'>
            <div className='py-2 mr-2'>Luas lahan tempat tinggal (m<sup>2</sup>)</div>
            {luasLahan === "" &&  <RiErrorWarningFill style={{color:"red"}}/>}
          </div>
          <InputForm placeholder="Luas lahan" name="luas-lahan-keluarga" type='Number' edit={edit} text={luasLahan} wajib={true} onChange={(e)=>{setLuasLahan(e.target.value)}}/>
        </div>
        <div >
          <div className='py-2'>Jenis lantai tempat tinggal terluas</div>
          <SelectForm name="Lantai" list={list["Lantai"]} edit={edit} text={lantai} onChange={(e)=>{setLantai(e.target.value)}}/>
        </div>
        <div >
          <div className='py-2'>Dinding sebagian besar rumah</div>
          <SelectForm name="Dinding" list={list["Dinding"]} edit={edit} text={dinding} onChange={(e)=>{setDinding(e.target.value)}}/>
        </div>
        <div >
          <div className='py-2'>Kondisi jendela rumah</div>
          <SelectForm name="Jendela" list={list["Jendela"]} edit={edit} text={jendela} onChange={(e)=>{setJendela(e.target.value)}}/>
        </div>
        <div >
          <div className='py-2'>Jenis atap rumah</div>
          <SelectForm name="Atap" list={list["Atap"]} edit={edit} text={atap} onChange={(e)=>{setAtap(e.target.value)}}/>
        </div>
        <div >
          <div className='py-2'>Penerangan rumah</div>
          <SelectForm name="Penerangan" list={list["Penerangan"]} edit={edit} text={penerangan} onChange={(e)=>{setPenerangan(e.target.value)}}/>
        </div>
        <div >
          <div className='py-2'>Energi untuk memasak</div>
          <SelectForm name="Memasak" list={list["Memasak"]} edit={edit} text={memasak} onChange={(e)=>{setMemasak(e.target.value)}}/>
        </div>
        {memasak === "Kayu bakar" && 
          <div >
            <div className='py-2'>Sumber kayu bakar</div>
            <SelectForm name="Kayu bakar" list={list["Kayu bakar"]} edit={edit} text={kayuBakar} onChange={(e)=>{setKayuBakar(e.target.value)}}/>
          </div>
        }
        <div >
          <div className='py-2'>Tempat pembuangan sampah</div>
          <SelectForm name="TPS" list={list["TPS"]} edit={edit} text={TPS} onChange={(e)=>{setTPS(e.target.value)}}/>
        </div>
        <div >
          <div className='py-2'>Fasilitas MCK</div>
          <SelectForm name="MCK" list={list["MCK"]} edit={edit} text={MCK} onChange={(e)=>{setMCK(e.target.value)}}/>
        </div>
        <div >
          <div className='py-2'>Sumber air mandi terbanyak</div>
          <SelectForm name="Sumber air mandi" list={list["Sumber air mandi"]} edit={edit} text={sumberMandi} onChange={(e)=>{setSumberMandi(e.target.value)}}/>
        </div>
        <div >
          <div className='py-2'>Fasilitas buang air besar</div>
          <SelectForm name="BAB" list={list["BAB"]} edit={edit} text={BAB} onChange={(e)=>{setBAB(e.target.value)}}/>
        </div>
        <div >
          <div className='py-2'>Sumber air minum terbanyak</div>
          <SelectForm name="Sumber air minum" list={list["Sumber air minum"]} edit={edit} text={sumberMinum} onChange={(e)=>{setSumberMinum(e.target.value)}}/>
        </div>
        <div >
          <div className='py-2'>Tempat pembuangan limbah cair</div>
          <SelectForm name="Tempat limbah" list={list["Tempat limbah"]} edit={edit} text={limbah} onChange={(e)=>{setLimbah(e.target.value)}}/>
        </div>
        <div >
          <div className='py-2'>Rumah berada di bawah SUTET/SUTT/SUTTAS</div>
          <SelectForm name="Sutet" list={list["Sutet"]} edit={edit} text={sutet} onChange={(e)=>{setSutet(e.target.value)}}/>
        </div>
        <div >
          <div className='py-2'>Rumah di bantaran sungai</div>
          <SelectForm name="Bantaran sungai" list={list["Bantaran sungai"]} edit={edit} text={bantaranSungai} onChange={(e)=>{setBantaranSungai(e.target.value)}}/>
        </div>
        <div >
          <div className='py-2'>Rumah di lereng bukit/gunung</div>
          <SelectForm name="Lereng bukit" list={list["Lereng bukit"]} edit={edit} text={lerengBukit} onChange={(e)=>{setLerengBukit(e.target.value)}}/>
        </div>
        <div >
          <div className='py-2'>Secara keseluruhan kondisi rumah</div>
          <SelectForm name="Kondisi rumah" list={list["Kondisi rumah"]} edit={edit} text={kondisiRumah} onChange={(e)=>{setKondisiRumah(e.target.value)}}/>
        </div>
    </div>
  )
}

export default FormPemukiman