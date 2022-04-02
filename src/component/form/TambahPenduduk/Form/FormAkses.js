import React,{useState,useEffect} from 'react'
import TableJarakWaktu from '../../TableJarakWaktu'

function FormAkses({setAkses=()=>{},edit=true,akses=false}) {

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
      if(akses){
        setPaud(akses["paud"])
        setTk(akses["tk"])
        setSd(akses["sd"])
        setSmp(akses["smp"])
        setSma(akses["sma"])
        setUniversitas(akses["universitas"])
        setPesantren(akses["pesantren"])
        setSeminari(akses["seminari"])
        setPendidikanLain(akses["pendidikan_lain"])
        setRumahSakit(akses["rumah_sakit"])
        setRumahBersalin(akses["rumah_bersalin"])
        setPoliklinik(akses["poliklinik"])
        setPuskesmas(akses["puskesmas"])
        setPustu(akses["pustu"])
        setPolindes(akses["polindes"])
        setPoskesdes(akses["poskesdes"])
        setPosyandu(akses["posyandu"])
        setApotik(akses["apotik"])
        setTokoObat(akses["toko_obat"])
        setDokterSpesialist(akses["dokter_spesialist"])
        setDokterUmum(akses["dokter_umum"])
        setBidan(akses["bidan"])
        setTenagaKesehatan(akses["tenaga_kesehatan"])
        setDukun(akses["dukun"])
      }
    }, [akses])

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
        pendidikan_lain:pendidikanLain,
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
        height:"100%"
        }}
    >
        <div >
          <div className='py-2'><b>Akses pendidikan terdekat (Jarak, Waktu tempuh, kemudahan)</b></div>
          <div className='py-2'>
            <TableJarakWaktu judul={"PAUD"} setTabel={setPaud} edit={edit} data={paud}/>
          </div>
          <div className='py-2'>
            <TableJarakWaktu judul={"TK/RA"} setTabel={setTk} edit={edit} data={tk}/>
          </div>
          <div className='py-2'>
            <TableJarakWaktu judul={"SD/MI"} setTabel={setSd} edit={edit} data={sd}/>
          </div>
          <div className='py-2'>
            <TableJarakWaktu judul={"SMP/MT's"} setTabel={setSmp} edit={edit} data={smp}/>
          </div>
          <div className='py-2'>
            <TableJarakWaktu judul={"SMA/MA"} setTabel={setSma} edit={edit} data={sma}/>
          </div>
          <div className='py-2'>
            <TableJarakWaktu judul={"Perguruan Tinggi"} setTabel={setUniversitas} edit={edit} data={universitas}/>
          </div>
          <div className='py-2'>
            <TableJarakWaktu judul={"Pesantren"} setTabel={setPesantren} edit={edit} data={pesantren}/>
          </div>
          <div className='py-2'>
            <TableJarakWaktu judul={"Seminari"} setTabel={setSeminari} edit={edit} data={seminari}/>
          </div>
          <div className='py-2'>
            <TableJarakWaktu judul={"Pendidikan keagamaan lain"} setTabel={setPendidikanLain} edit={edit} data={pendidikanLain}/>
          </div>
        </div>
        <div >
          <div className='py-2'><b>Akses fasilitas kesehatan terdekat (Jarak, Waktu tempuh, kemudahan)</b></div>
          <div className='py-2'>
            <TableJarakWaktu judul={"Rumah sakit"} setTabel={setRumahSakit} edit={edit} data={rumahSakit}/>
          </div>
          <div className='py-2'>
            <TableJarakWaktu judul={"Rumah sakit bersalin"} setTabel={setRumahBersalin} edit={edit} data={rumahBersalin}/>
          </div>
          <div className='py-2'>
            <TableJarakWaktu judul={"Poliklinik"} setTabel={setPoliklinik} edit={edit} data={poliklinik}/>
          </div>
          <div className='py-2'>
            <TableJarakWaktu judul={"Puskesmas"} setTabel={setPuskesmas} edit={edit} data={puskesmas}/>
          </div>
          <div className='py-2'>
            <TableJarakWaktu judul={"Puskesmas pembantu/pustu"} setTabel={setPustu} edit={edit} data={pustu}/>
          </div>
          <div className='py-2'>
            <TableJarakWaktu judul={"Polindes"} setTabel={setPolindes} edit={edit} data={polindes}/>
          </div>
          <div className='py-2'>
            <TableJarakWaktu judul={"Poskesdes"} setTabel={setPoskesdes} edit={edit} data={poskesdes}/>
          </div>
          <div className='py-2'>
            <TableJarakWaktu judul={"Posyandu"} setTabel={setPosyandu} edit={edit} data={posyandu}/>
          </div>
          <div className='py-2'>
            <TableJarakWaktu judul={"Apotik"} setTabel={setApotik} edit={edit} data={apotik}/>
          </div>
          <div className='py-2'>
            <TableJarakWaktu judul={"Toko obat"} setTabel={setTokoObat} edit={edit} data={tokoObat}/>
          </div>
        </div>
        <div >
          <div className='py-2'><b>Akses tenaga kesehatan terdekat (Jarak, Waktu tempuh, kemudahan)</b></div>
          <div className='py-2'>
            <TableJarakWaktu judul={"Dokter spesialis"} setTabel={setDokterSpesialist} edit={edit} data={dokterSpesialist}/>
          </div>
          <div className='py-2'>
            <TableJarakWaktu judul={"Dokter umum"} setTabel={setDokterUmum} edit={edit} data={dokterUmum}/>
          </div>
          <div className='py-2'>
            <TableJarakWaktu judul={"Bidan"} setTabel={setBidan} edit={edit} data={bidan}/>
          </div>
          <div className='py-2'>
            <TableJarakWaktu judul={"Tenaga kesehatan"} setTabel={setTenagaKesehatan} edit={edit} data={tenagaKesehatan}/>
          </div>
          <div className='py-2'>
            <TableJarakWaktu judul={"Dukun"} setTabel={setDukun} edit={edit} data={dukun}/>
          </div>
        </div>
      </div>
   
  )
}

export default FormAkses