import React,{useState,useEffect} from 'react'
import InputForm from '../../form/InputForm'
import SelectForm from '../../form/SelectForm'

var listPendidikan = ["All","Tidak sekolah","SD dan sederajat","SMP dan sederajat","SMA dan sederajat","Diploma 1-3","S1 dan sederajat","S2 dan sederajat","S3 dan sederajat","Pesantren, seminari, wihara, dan sejenisnya","Lainnya"]
var listPekerjaan = {
    "kondisi-pekerjaan":["All","Bersekolah","Ibu rumah tangga","TIdak bekerja","Sedang mencari pekerjaan","Bekerja"],
    "pekerjaan":["All","Petani/pemilik lahan","Petani penyewa","Buruh tani","Nelayan pemilik kapal","Nelayan penyewa kapal","Buruh nelayan","Guru","Guru agama","Pedagang","Pengolahan Industri","PNS","TNI","Perangkat desa","Pegawai kantor desa","TKI","Lainnya"],
    "jaminan-kerja":["Peserta","Bukan peserta"],
    "penghasilan":["Lainnya","Padi","Palawija (jagung, kacang-kacangan, ubi-ubian, dll)","Holtikultura(buah,sayur,tanaman hias, dll)","Karet","Kelapa sawit","Kopi","Kakao","Kelapa","Lada","Cengkeh","Tembakau","Tebu","Sapi potong","Susu sapi","Domba","Ternak besar lainnya(Kuda, kerbau, dll)","Ayam pedagang","Telur ayam","Ternak kecil lainnya(bebek, burung, dll)","Perikanan tangkap","Perikanan budidaya","Bambu","Budidaya tanaman kehutanan (jati, mahoni, dll)","Pemungutan hasil hutan(madu, kayu bakar, dll)","Penangkapan satwa liar","Penangkaran satwa liar","Jasa pertanian","Pertambangan dan penggalian","Industri kerajinan","Industri pengolahan","Perdagangan","Warung atau rumah makan","Angkutan","Pergudangan","Komunikasi","Jasa di luar pertanian","Karyawan tetap","Karyawan tidak tetap","TNI","PNS","TKI","Sumbangan"],
  }

var listPenyakit = ["All","Tidak ada","Muntaber","Demam Berdarah","Campak","Malaria","Flu burung/SARS","Covid-19","Hepatitis B","Hepatitis E","Difteri","Chikungunya","Leplospirosis","Kolera","Gizi buruk","Jantung","TBC paru-paru","Kanker","Diabetes","Lumpuh","Lainnya"]
var listJaminan = ["All","Peserta","Bukan peserta"]
var listDisablitasi = ["All","Tunanetra (Buta)","Tunarungu (Tuli)","Tunawicara (Bisu)","Tunarungu-wicara (Tuli-Bisu)","Tunadaksa (Cacat tubuh)","Tunagrahita (Cacat mental, keterbelakangan mental)","Tunalaras (Eks-sakit jiwa, gangguan mengendalikan emosi dan kontrol sosial)","Cacat eks-sakit kusta, pernah sakit kusta dan dinyatakan sembuh oleh dokter","Cacat ganda (cacat fisik dan cacat mental)","Dipasung"]

function Filter({setFilter,activeFilter}) {

    const [rt, setRt] = useState("")
    const [kondisi, setKondisi] = useState("All")
    const [pekerjaan, setPekerjaan] = useState("All")
    const [jaminanKerja, setJaminanKerja] = useState("All")
    const [penghasilanMax, setPenghasilanMax] = useState("")
    const [penghasilanMin, setPenghasilanMin] = useState("")
    const [pendidikan, setPendidikan] = useState("All")
    const [penyakit, setPenyakit] = useState("All")
    const [jaminanKesehatan, setJaminanKesehatan] = useState("All")
    const [disabilitas, setDisabilitas] = useState("All")

    useEffect(() => {
      var hasilFilter = {
          rt:rt,
          jumlah_penghasilan:{
              min:penghasilanMin,
              max:penghasilanMax
          },
          pekerjaan:pekerjaan,
          jaminan_ketenagakerjaan:jaminanKerja,
          kondisi:kondisi,
          pendidikan:pendidikan,
          penyakit:penyakit,
          jaminan_kesehatan:jaminanKesehatan,
          disabilitas:disabilitas
      }
      setFilter(hasilFilter)
    }, [rt,pekerjaan,jaminanKerja,penghasilanMax,penghasilanMin,pendidikan,penyakit,jaminanKesehatan,disabilitas])
    

  return (
    <div className='text-left bg-gray-100 border-2 border-solid duration-200 text-xs px-2 mb-2 overflow-y-scroll scrollbar'
        style={activeFilter ? {height:"calc(100vh - 105px)"}:{height:"0px"}}
    >
        <div>
            <div className='font-bold text-sm mb-1'>
                Lokasi
            </div>
            Rt
            <div className='my-2'>
                <InputForm placeholder={"Rt"} type="Number" onChange={(e)=>setRt(e.target.value)}/>
            </div>
        </div>
       
        <div>
            <div className='font-bold text-sm mb-1'>
                Pekerjaan
            </div>
            Status pekerjaan
            <div className='my-2'>
                <SelectForm list={listPekerjaan["kondisi-pekerjaan"]} onChange={(e)=>setKondisi(e.target.value)}/>
            </div>
            Pekerjaan utama
            <div className='my-2'>
                <SelectForm list={listPekerjaan["pekerjaan"]} onChange={(e)=>setPekerjaan(e.target.value)}/>
            </div>
            Jaminan Ketenakerjaan
            <div className='my-2'>
                <SelectForm list={listJaminan} onChange={(e)=>setJaminanKerja(e.target.value)}/>
            </div>
            <div>
                Penghasilan
                <div className='my-2'>
                    <InputForm placeholder={"Penghasilan Minimum (Rp)"} type="Number" onChange={(e)=>setPenghasilanMin(e.target.value)}/>
                </div>
                <div className='my-2'>
                    <InputForm placeholder={"Penghasilan Maksimum (Rp)"} type="Number" onChange={(e)=>setPenghasilanMax(e.target.value)}/>
                </div>
            </div>
        </div>
        <div>
            <div className='font-bold my-2 text-sm'>
                Pendidikan
            </div>
            Pendidikan Terakhir
            <div className='my-2'>
                <SelectForm list={listPendidikan} onChange={(e)=>setPendidikan(e.target.value)}/>
            </div>
        </div>
        <div>
            <div className='font-bold my-2 text-sm'>
                Kesehatan
            </div>
            Penyakit
            <div className='my-2'>
                <SelectForm list={listPenyakit} onChange={(e)=>setPenyakit(e.target.value)}/>
            </div>
            Jaminan Kesehatan
            <div className='my-2'>
                <SelectForm list={listJaminan} onChange={(e)=>setJaminanKesehatan(e.target.value)}/>
            </div>
            Disabilitas
            <div className='my-2'>
                <SelectForm list={listDisablitasi} onChange={(e)=>setDisabilitas(e.target.value)}/>
            </div>
        </div>
    </div>
  )
}

export default Filter