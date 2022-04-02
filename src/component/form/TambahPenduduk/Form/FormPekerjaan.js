import React,{useEffect, useState} from 'react'
import SelectForm from '../../SelectForm'
import InputForm from '../../InputForm'
import ButtonTambah from '../ButtonTambah'
import {GrFormAdd} from "react-icons/gr"
import DaftarPenghasilan from '../DaftarPenghasilan'

var list = {
  "kondisi-pekerjaan":["Bersekolah","Ibu rumah tangga","TIdak bekerja","Sedang mencari pekerjaan","Bekerja"],
  "pekerjaan":["Petani/pemilik lahan","Petani penyewa","Buruh tani","Nelayan pemilik kapal","Nelayan penyewa kapal","Buruh nelayan","Guru","Guru agama","Pedagang","Pengolahan Industri","PNS","TNI","Perangkat desa","Pegawai kantor desa","TKI","Lainnya"],
  "jaminan-kerja":["Peserta","Bukan peserta"],
  "penghasilan":["Lainnya","Padi","Palawija (jagung, kacang-kacangan, ubi-ubian, dll)","Holtikultura(buah,sayur,tanaman hias, dll)","Karet","Kelapa sawit","Kopi","Kakao","Kelapa","Lada","Cengkeh","Tembakau","Tebu","Sapi potong","Susu sapi","Domba","Ternak besar lainnya(Kuda, kerbau, dll)","Ayam pedagang","Telur ayam","Ternak kecil lainnya(bebek, burung, dll)","Perikanan tangkap","Perikanan budidaya","Bambu","Budidaya tanaman kehutanan (jati, mahoni, dll)","Pemungutan hasil hutan(madu, kayu bakar, dll)","Penangkapan satwa liar","Penangkaran satwa liar","Jasa pertanian","Pertambangan dan penggalian","Industri kerajinan","Industri pengolahan","Perdagangan","Warung atau rumah makan","Angkutan","Pergudangan","Komunikasi","Jasa di luar pertanian","Karyawan tetap","Karyawan tidak tetap","TNI","PNS","TKI","Sumbangan"],
}

var listSatuan = {
  "Lainnya":"Bulan",
  "Padi":"Ton",
  "Palawija(jagung, kacang-kacangan, ubi-ubian, dll)":"Ton",
  "Holtikultura(buah,sayur,tanaman hias, dll)":"Kg",
  "Karet":"Ton",
  "Kelapa sawit":"Ton",
  "Kopi":"Kg",
  "Kakao":"Ton",
  "Kelapa":"Ton",
  "Lada":"Kg",
  "Cengkeh":"Kg",
  "Tembakau":"Kg",
  "Tebu":"Ton",
  "Sapi potong":"Ekor",
  "Susu sapi":"Liter",
  "Domba":"Ekor",
  "Ternak besar lainnya(Kuda, kerbau, dll)":"Ekor",
  "Ayam pedagang":"Ekor",
  "Telur ayam":"Kg",
  "Ternak kecil lainnya(bebek, burung, dll)":"Ekor",
  "Perikanan tangkap":"Kg",
  "Perikanan budidaya":"Kg",
  "Bambu":"Batang",
  "Budidaya tanaman kehutanan (jati, mahoni, dll)":"Batang",
  "Pemungutan hasil hutan(madu, kayu bakar, dll)":"Kg",
  "Penangkapan satwa liar":"Ekor",
  "Penangkaran satwa liar":"Ekor",
  "Jasa pertanian":"Hari",
  "Pertambangan dan penggalian":"Kg",
  "Industri kerajinan":"Bulan",
  "Industri pengolahan":"Bulan",
  "Perdagangan":"Bulan",
  "Warung atau rumah makan":"Bulan",
  "Angkutan":"Bulan",
  "Pergudangan":"Bulan",
  "Komunikasi":"Bulan",
  "Jasa di luar pertanian":"Bulan",
  "Karyawan tetap":"Bulan",
  "Karyawan tidak tetap":"Bulan",
  "TNI":"Bulan",
  "PNS":"Bulan",
  "TKI":"Bulan",
  "Sumbangan":"Bulan"
}

function FormPekerjaan({setPekerjaan=()=>{},edit=true,pekerjaan=false}) {

    const [kondisiKerja, setKondisiKerja] = useState("Bersekolah")
    const [pekerjaanUtama, setPerkerjaanUtama] = useState("Petani/pemilik lahan")

    const [tambah, setTambah] = useState(true)
    const [idDelete, setIdDelete] = useState()
    const [daftarPenghasilan, setDaftarPenghasilan] = useState([])

    const [jaminanKerja, setJaminanKerja] = useState("Peserta")
    const [penghasilan, setPenghasilan] = useState("Padi")

    const [volume, setVolume] = useState()
    const [penghasilanSetahun, setPenghasilanSetahun] = useState()

    useEffect(() => {
      if(pekerjaan){
        setKondisiKerja(pekerjaan["kondisi"])
        setPerkerjaanUtama(pekerjaan["pekerjaan"])
        setJaminanKerja(pekerjaan["jaminan_ketenagakerjaan"])
        setDaftarPenghasilan(pekerjaan["penghasilan"])
        setTambah(false)
      }
    }, [pekerjaan])

    var tambahPenghasilan = () => {
        var dataPenghasilan = {
            "id":Math.random().toString(16).slice(2),
            "judul":penghasilan,
            "volume":volume,
            "satuan":listSatuan[penghasilan],
            "penghasilan":penghasilanSetahun
        }
        setDaftarPenghasilan(daftarPenghasilan.concat(dataPenghasilan))
        setTambah(false)
    }

    useEffect(() => {
      console.log(idDelete)
      var lists = daftarPenghasilan.filter(x => {
        return x.id !== idDelete;
      })
      console.log(lists)
      setDaftarPenghasilan(lists)
    }, [idDelete])
    
    useEffect(() => {
      var pekerjaan = {
          kondisi:kondisiKerja,
          pekerjaan:pekerjaanUtama,
          jaminan_ketenagakerjaan:jaminanKerja,
          penghasilan:daftarPenghasilan
      }
      setPekerjaan(pekerjaan)
    }, [daftarPenghasilan,kondisiKerja,jaminanKerja,pekerjaanUtama,setPekerjaan])
    

  return (
    <div className='overflow-y-scroll scrollbar'
        style={{
          height:"100%"
          }}
    >
        <div>
          <div className='py-2'>Kondisi pekerjaan</div>
          <SelectForm name="kondisi-pekerjaan" list={list["kondisi-pekerjaan"]} text={kondisiKerja} edit={edit} onChange={(e)=>{setKondisiKerja(e.target.value)}}/>
        </div>
        <div>
          <div className='py-2'>Pekerjaan Utama</div>
          <SelectForm name="pekerjaan" list={list["pekerjaan"]} text={pekerjaanUtama} edit={edit} onChange={(e)=>{setPerkerjaanUtama(e.target.value)}}/>
        </div>
        <div>
          <div className='py-2'>Jaminan sosial ketenagakerjaan</div>
          <SelectForm name="jaminan-kerja" list={list["jaminan-kerja"]} text={jaminanKerja} edit={edit} onChange={(e)=>{setJaminanKerja(e.target.value)}}/>
        </div>
        <div>
          <div className='flex items-center'>
            <div className='py-2'>Penghasilan</div>
            <div className="bg-gray-200 mx-2 rounded-full cursor-pointer hover:bg-blue-400"
                onClick={()=>{setTambah(true)}}
            >
                {edit && <GrFormAdd className='hover:fill-white'/>}
            </div>  
          </div>

          {tambah && <div>
            <SelectForm name="penghasilan" list={list["penghasilan"]} onChange={(e)=>{setPenghasilan(e.target.value)}}/>
            <div className='grid my-2 grid-cols-2'>
                <InputForm name={"volume"} placeholder="Volume" type='number' onChange={(e)=>{setVolume(e.target.value)}}/>
                <div className='bg-gray-200 flex justify-center items-center ml-2'>{listSatuan[penghasilan]}</div>
            </div>
            <div className='my-2'>
                <InputForm placeholder="Penghasilan setahun" name={"penghasilan_setahun"} onChange={(e)=>{setPenghasilanSetahun(e.target.value)}}/>
            </div>
            <ButtonTambah click={tambahPenghasilan}/>
        </div>}
          
          {daftarPenghasilan !== [] && daftarPenghasilan.map((e,index)=>{
              return <DaftarPenghasilan list={e} key={index} edit={edit} setIdDelete={setIdDelete}/>
          }) }

        
        </div>
    </div>
  )
}

export default FormPekerjaan