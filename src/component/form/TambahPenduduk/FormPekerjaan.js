import React from 'react'
import SelectForm from './SelectForm'
import InputForm from './InputForm'

function FormPekerjaan() {

    var list = {
        "kondisi-pekerjaan":["Bersekolah","Ibu rumah tangga","TIdak bekerja","Sedang mencari pekerjaan","Bekerja"],
        "pekerjaan":["Petani/pemilik lahan","Petani penyewa","Buruh tani","Nelayan pemilik kapal","Nelayan penyewa kapal","Buruh nelayan","Guru","Guru agama","Pedagang","Pengolahan Industri","PNS","TNI","Perangkat desa","Pegawai kantor desa","TKI","Lainnya"],
        "jaminan-kerja":["Peserta","Bukan peserta"],
        "penghasilan":["Lainnya","Padi","Palawija(jagung, kacang-kacangan, ubi-ubian, dll)","Holtikultura(buah,sayur,tanaman hias, dll)","Karet","Kelapa sawit","Kopi","Kakao","Kelapa","Lada","Cengkeh","Tembakau","Tebu","Sapi potong","Susu sapi","Domba","Ternak besar lainnya(Kuda, kerbau, dll)","Ayam pedagang","Telur ayam","Ternak kecil lainnya(bebek, burung, dll)","Perikanan tangkap","Perikanan budidaya","Bambu","Budidaya tanaman kehutanan (jati, mahoni, dll)","Pemungutan hasil hutan(madu, kayu bakar, dll)","Penangkapan satwa liar","Penangkaran satwa liar","Jasa pertanian","Pertambangan dan penggalian","Industri kerajinan","Industri pengolahan","Perdagangan","Warung atau rumah makan","Angkutan","Pergudangan","Komunikasi","Jasa di luar pertanian","Karyawan tetap","Karyawan tidak tetap","TNI","PNS","TKI","Sumbangan"],
      }

  return (
    <div className='overflow-y-scroll scrollbar'
        style={{
          height:"450px"
          }}
    >
        <div>
          <div className='py-2'>Kondisi pekerjaan</div>
          <SelectForm name="kondisi-pekerjaan" list={list["kondisi-pekerjaan"]}/>
        </div>
        <div>
          <div className='py-2'>Pekerjaan Utama</div>
          <SelectForm name="pekerjaan" list={list["pekerjaan"]}/>
        </div>
        <div>
          <div className='py-2'>jaminan sosial ketenagakerjaan</div>
          <SelectForm name="jaminan-kerja" list={list["jaminan-kerja"]}/>
        </div>
    </div>
  )
}

export default FormPekerjaan