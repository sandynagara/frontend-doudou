import React,{useState,useEffect} from 'react'
import TableJarakWaktu from './TableJarakWaktu'

function FormAkses({setAkses}) {

    const [paud, setPaud] = useState()
    const [tk, setTk] = useState()
    const [sd, setSd] = useState()
    const [smp, setSmp] = useState()
    const [sma, setSma] = useState()
    const [universitas, setUniversitas] = useState()
    const [pesantren, setPesantren] = useState()
    const [seminari, setSeminari] = useState()
    const [pendidikanLain, setPendidikanLain] = useState()
    const [rumahSakit, setRumahSakit] = useState()
    const [rumahBersalin, setRumahBersalin] = useState()
    const [poliklinik, setPoliklinik] = useState()
    const [puskesmas, setPuskesmas] = useState()
    const [pustu, setPustu] = useState()
    const [polindes, setPolindes] = useState()
    const [poskesdes, setPoskesdes] = useState()
    const [posyandu, setPosyandu] = useState()
    const [apotik, setApotik] = useState()
    const [tokoObat, setTokoObat] = useState()
    const [dokterSpesialist, setDokterSpesialist] = useState()
    const [dokterUmum, setDokterUmum] = useState()
    const [bidan, setBidan] = useState()
    const [tenagaKesehatan, setTenagaKesehatan] = useState()
    const [dukun, setDukun] = useState()

    useEffect(() => {
      var akses = {
        paud:paud,
        tk:tk,
        sd:sd,
        smp:smp,
        sma:sma,
        universitas:universitas,
        pesantren:pesantren,
        seminari:seminari,
        pendidikanLain:pendidikanLain,
        rumah_sakit:rumahSakit,
        rumah_bersalin:rumahBersalin,
        poliklinik:poliklinik,
        puskesmas:puskesmas,
        pustu:pustu,
        polindes:polindes,
        poskesdes:poskesdes,
        posyandu:posyandu,
        apotik:apotik,
        toko_obat:tokoObat,
        dokter_spesialist:dokterSpesialist,
        dokter_umum:dokterUmum,
        bidan:bidan,
        tenaga_kesehatan:tenagaKesehatan,
        dukun:dukun,
      }

      setAkses(akses)
    }, [paud,tk,sd,smp,sma,universitas,pesantren,seminari,rumahSakit,rumahBersalin,poliklinik,
        puskesmas,pustu,polindes,poskesdes,posyandu,apotik,tokoObat,dokterSpesialist,
        dokterUmum,bidan,tenagaKesehatan,dukun,setAkses])
    

  return (
    <div className='overflow-y-scroll scrollbar'
        style={{
        height:"430px"
        }}
    >
        <div >
          <div className='py-2'><b>Akses pendidikan terdekat (Jarak, Waktu tempuh, kemudahan)</b></div>
          <div className='py-2'>
            <TableJarakWaktu judul={"PAUD"} setTabel={setPaud}/>
          </div>
          <div className='py-2'>
            <TableJarakWaktu judul={"TK/RA"} setTabel={setTk}/>
          </div>
          <div className='py-2'>
            <TableJarakWaktu judul={"SD/MI"} setTabel={setSd}/>
          </div>
          <div className='py-2'>
            <TableJarakWaktu judul={"SMP/MT's"} setTabel={setSmp}/>
          </div>
          <div className='py-2'>
            <TableJarakWaktu judul={"SMA/MA"} setTabel={setSma}/>
          </div>
          <div className='py-2'>
            <TableJarakWaktu judul={"Perguruan Tinggi"} setTabel={setUniversitas}/>
          </div>
          <div className='py-2'>
            <TableJarakWaktu judul={"Pesantren"} setTabel={setPesantren}/>
          </div>
          <div className='py-2'>
            <TableJarakWaktu judul={"Seminari"} setTabel={setSeminari}/>
          </div>
          <div className='py-2'>
            <TableJarakWaktu judul={"Pendidikan keagamaan lain"} setTabel={setPendidikanLain}/>
          </div>
        </div>
        <div >
          <div className='py-2'><b>Akses fasilitas kesehatan terdekat (Jarak, Waktu tempuh, kemudahan)</b></div>
          <div className='py-2'>
            <TableJarakWaktu judul={"Rumah sakit"} setTabel={setRumahSakit}/>
          </div>
          <div className='py-2'>
            <TableJarakWaktu judul={"Rumah sakit bersalin"} setTabel={setRumahBersalin}/>
          </div>
          <div className='py-2'>
            <TableJarakWaktu judul={"Poliklinik"} setTabel={setPoliklinik}/>
          </div>
          <div className='py-2'>
            <TableJarakWaktu judul={"Puskesmas"} setTabel={setPuskesmas}/>
          </div>
          <div className='py-2'>
            <TableJarakWaktu judul={"Puskesmas pembantu/pustu"} setTabel={setPustu}/>
          </div>
          <div className='py-2'>
            <TableJarakWaktu judul={"Polindes"} setTabel={setPolindes}/>
          </div>
          <div className='py-2'>
            <TableJarakWaktu judul={"Poskesdes"} setTabel={setPoskesdes}/>
          </div>
          <div className='py-2'>
            <TableJarakWaktu judul={"Posyandu"} setTabel={setPosyandu}/>
          </div>
          <div className='py-2'>
            <TableJarakWaktu judul={"Apotik"} setTabel={setApotik}/>
          </div>
          <div className='py-2'>
            <TableJarakWaktu judul={"Toko obat"} setTabel={setTokoObat}/>
          </div>
        </div>
        <div >
          <div className='py-2'><b>Akses tenaga kesehatan terdekat (Jarak, Waktu tempuh, kemudahan)</b></div>
          <div className='py-2'>
            <TableJarakWaktu judul={"Dokter spesialis"} setTabel={setDokterSpesialist}/>
          </div>
          <div className='py-2'>
            <TableJarakWaktu judul={"Dokter umum"} setTabel={setDokterUmum}/>
          </div>
          <div className='py-2'>
            <TableJarakWaktu judul={"Bidan"} setTabel={setBidan}/>
          </div>
          <div className='py-2'>
            <TableJarakWaktu judul={"Tenaga kesehatan"} setTabel={setTenagaKesehatan}/>
          </div>
          <div className='py-2'>
            <TableJarakWaktu judul={"Dukun"} setTabel={setDukun}/>
          </div>
        </div>
      </div>
   
  )
}

export default FormAkses