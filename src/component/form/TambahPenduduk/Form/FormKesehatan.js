import React,{useState,useEffect} from 'react'
import SelectForm from '../../SelectForm'
import {GrFormAdd} from "react-icons/gr"
import InputForm from '../../InputForm'
import ButtonTambah from '../ButtonTambah'
import DaftarPenyakit from '../DaftarPenyakit'

function FormKesehatan({setKesehatan=()=>{},edit=true,kesehatan=false}) {

    const [jaminanKesehatan, setJaminanKesehatan] = useState("Peserta")

    const [penyakitTambah, setPenyakitTambah] = useState(false)
    const [daftarPenyakit, setDaftarPenyakit] = useState([])
    const [penyakit, setPenyakit] = useState("Muntaber")
    const [idDeletePenyakit, setIdDeletePenyakit] = useState(false)
    const [namaPenyakit, setNamaPenyakit] = useState(false)

    const [faskesTambah, setFaskesTambah] = useState(false)
    const [daftarFaskes, setDaftarFaskes] = useState([])
    const [faskes, setFaskes] = useState("Rumah sakit")
    const [idDeleteFaskes, setIdDeleteFaskes] = useState(false)
    const [jumlahFaskes, setJumlahFaskes] = useState(false)

    const [disabilitasTambah, setDisabilitasTambah] = useState(false)
    const [daftarDisabilitas, setDaftarDisabilitas] = useState([])
    const [disabilitas, setDisabilitas] = useState("Tunanetra (Buta)")
    const [idDeleteDisabilitas, setIdDeleteDisabilitas] = useState(false)

    useEffect(() => {
        if(kesehatan){
            setDaftarPenyakit(kesehatan["penyakit"])
            setDaftarFaskes(kesehatan["kunjungan_faskes"])
            setDaftarDisabilitas(kesehatan["disabilitas"])
            setJaminanKesehatan(kesehatan["jaminan_kesehatan"])
        }
      }, [kesehatan])

    var tambahPenyakit = () => {
        var dataPenyakit
        if(namaPenyakit){
            dataPenyakit = {
                "id":Math.random().toString(16).slice(2),
                "judul":namaPenyakit,
            }
        }else{
            dataPenyakit = {
                "id":Math.random().toString(16).slice(2),
                "judul":penyakit,
            }
        }
        
        setDaftarPenyakit(daftarPenyakit.concat(dataPenyakit))
        setPenyakitTambah(false)
    }

    var tambahFaskes = () => {

        var dataFaskes = {
            "id":Math.random().toString(16).slice(2),
            "judul":faskes,
            "isi":jumlahFaskes
        }
        
        setDaftarFaskes(daftarFaskes.concat(dataFaskes))
        setFaskesTambah(false)
    }

    var tambahDisabilitas = () => {

        var dataDisabilitas = {
            "id":Math.random().toString(16).slice(2),
            "judul":disabilitas,
        }
        
        setDaftarDisabilitas(daftarDisabilitas.concat(dataDisabilitas))
        setDisabilitasTambah(false)
    }

    useEffect(() => {
        var lists = daftarPenyakit.filter(x => {
          return x.id !== idDeletePenyakit;
        })
        setDaftarPenyakit(lists)
    }, [idDeletePenyakit])

    useEffect(() => {
        var lists = daftarFaskes.filter(x => {
          return x.id !== idDeleteFaskes;
        })
        setDaftarFaskes(lists)
    }, [idDeleteFaskes])

    useEffect(() => {
        var lists = daftarDisabilitas.filter(x => {
          return x.id !== idDeleteDisabilitas;
        })
        setDaftarDisabilitas(lists)
    }, [idDeleteDisabilitas])

    useEffect(() => {
      var kesehatan = {
        penyakit:daftarPenyakit,
        jaminan_kesehatan:jaminanKesehatan,
        kunjungan_faskes:daftarFaskes,
        disabilitas:daftarDisabilitas
      }
      setKesehatan(kesehatan)
    }, [daftarDisabilitas,daftarFaskes,daftarPenyakit,jaminanKesehatan,setKesehatan])
    

    useEffect(() => {
        if(penyakit !== "Lainnya"){
            setNamaPenyakit(false)
        }
    }, [penyakit])


    var listPenyakit = ["Muntaber","Demam Berdarah","Campak","Malaria","Flu burung/SARS","Covid-19","Hepatitis B","Hepatitis E","Difteri","Chikungunya","Leplospirosis","Kolera","Gizi buruk","Jantung","TBC paru-paru","Kanker","Diabetes","Lumpuh","Lainnya"]
    var listJaminan = ["Peserta","Bukan peserta"]
    var listFaskes = ["Rumah sakit","Rumah sakit bersalin","Puskesmas dengan rawat inap","Puskesmas tanpa rawat inap","Puskesmas pembantu","Poliklinik/balai pengobatan","Tempat praktik dokter","Rumah bersalin","Tempat praktik bidan","Poskesdes","Polindes","Apotik","Toko khusus obat/jamu","Posyandu","Posbindu","Tempat praktik dukun bayi/bersalin/paraji"]
    var listDisablitasi = ["Tunanetra (Buta)","Tunarungu (Tuli)","Tunawicara (Bisu)","Tunarungu-wicara (Tuli-Bisu)","Tunadaksa (Cacat tubuh)","Tunagrahita (Cacat mental, keterbelakangan mental)","Tunalaras (Eks-sakit jiwa, gangguan mengendalikan emosi dan kontrol sosial)","Cacat eks-sakit kusta, pernah sakit kusta dan dinyatakan sembuh oleh dokter","Cacat ganda (cacat fisik dan cacat mental)","Dipasung"]

  return (
    <div className='overflow-y-scroll scrollbar'
        style={{
          height:"100%"
          }}
    >

        <div className='flex items-center'>
            <div className='py-2'>Penyakit yang diderita setahun terakhir</div>
            <div className="bg-gray-200 mx-2 rounded-full cursor-pointer hover:bg-blue-400"
                onClick={()=>{setPenyakitTambah(true)}}
            >
               {edit && <GrFormAdd className='hover:fill-white'/>} 
            </div>  
        </div>

        {penyakitTambah && 
            <div>
                <SelectForm name="nama-penyakit" list={listPenyakit} onChange={(e)=>{setPenyakit(e.target.value)}}/>
                {penyakit === "Lainnya" &&  
                    <div className='py-2'>
                        <InputForm placeholder="Nama Penyakit" onChange={(e)=>{setNamaPenyakit(e.target.value)}}/>
                    </div>
                }
                <div className='py-2'>
                    <ButtonTambah click={tambahPenyakit}/>
                </div>    
            </div>
        }
        

        {daftarPenyakit !== [] && daftarPenyakit.map((e,index) => {
        return  <DaftarPenyakit list={e} judul="Nama Penyakit" edit={edit} key={index} setIdDelete={setIdDeletePenyakit}/>
        })
        }

        <div>
            <div className='py-2'>Jaminan sosial kesehatan</div>
            <SelectForm name="jaminan-kesehatan" list={listJaminan} edit={edit} text={jaminanKesehatan} onChange={(e)=>setJaminanKesehatan(e.target.value)}/>
        </div>
        

        <div className='flex items-center'>
            <div className='py-2'>Kunjungan ke fasilitas kesehatan dalam setahun terakhir</div>
            <div className="bg-gray-200 mx-2 rounded-full cursor-pointer hover:bg-blue-400"
                onClick={()=>{setFaskesTambah(true)}}
            >
                {edit && <GrFormAdd className='hover:fill-white'/>}
            </div>  
        </div>

        {faskesTambah && 
            <div>
                <SelectForm name="faskes" list={listFaskes} onChange={(e)=>{setFaskes(e.target.value)}}/>
                <div className='py-2'>
                    <InputForm placeholder="Jumlah" onChange={(e)=>{setJumlahFaskes(e.target.value)}}/>
                </div>
                <div className='pb-2'>
                    <ButtonTambah click={tambahFaskes}/>
                </div>
            </div>
        }
        
        {daftarFaskes !== [] && daftarFaskes.map((e,index) => {
            return  <DaftarPenyakit list={e} judul="Fasilitas kesehatan" edit={edit} key={index} isi="Jumlah" setIdDelete={setIdDeleteFaskes}/>
            })
        }

        <div className='flex items-center'>
            <div className='py-2'>Disabilitas</div>
            <div className="bg-gray-200 mx-2 rounded-full cursor-pointer hover:bg-blue-400"
                onClick={()=>{setDisabilitasTambah(true)}}
            >
                {edit && <GrFormAdd className='hover:fill-white'/>}
            </div>  
        </div>

        {disabilitasTambah && 
            <div>
                <SelectForm name="faskes" list={listDisablitasi} onChange={(e)=>{setDisabilitas(e.target.value)}}/>
                <div className='py-2'>
                    <ButtonTambah click={tambahDisabilitas}/>
                </div>
            </div>
        }
        
        {daftarDisabilitas !== [] && daftarDisabilitas.map((e,index) => {
            return  <DaftarPenyakit list={e} judul="Disabilitas" key={index} edit={edit} setIdDelete={setIdDeleteDisabilitas}/>
            })
        }
        
    </div>
  )
}

export default FormKesehatan