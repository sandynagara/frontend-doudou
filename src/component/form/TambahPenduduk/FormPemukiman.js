import React from 'react'
import SelectForm from './SelectForm'
import InputForm from './InputForm'

function FormPemukiman() {

  var list = {
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
  }

  console.log(list)

  return (
    <div className='overflow-y-scroll scrollbar'
        style={{
          height:"450px"
          }}
    >
        <div >
          <div className='py-2'>Tempat tinggal yang ditempati</div>
          <SelectForm name="Tempat tinggal" list={list["Tempat tinggal"]}/>
        </div>
        <div >
          <div className='py-2'>Status lahan tempat tinggal yang ditempati</div>
          <SelectForm name="Status lahan" list={list["Status lahan"]}/>
        </div>
        <div >
          <div className='py-2'>Luas lantai tempat tinggal (m<sup>2</sup>)</div>
          <InputForm placeholder="Luas lantai" name="luas-lantai-keluarga"/>
        </div>
        <div >
          <div className='py-2'>Luas lahan tempat tinggal (m<sup>2</sup>)</div>
          <InputForm placeholder="Luas lahan" name="luas-lahan-keluarga"/>
        </div>
        <div >
          <div className='py-2'>Jenis lantai tempat tinggal terluas</div>
          <SelectForm name="Lantai" list={list["Lantai"]}/>
        </div>
        <div >
          <div className='py-2'>Dinding sebagian besar rumah</div>
          <SelectForm name="Dinding" list={list["Dinding"]}/>
        </div>
        <div >
          <div className='py-2'>Kondisi jendela rumah</div>
          <SelectForm name="Jendela" list={list["Jendela"]}/>
        </div>
        <div >
          <div className='py-2'>Jenis atap rumah</div>
          <SelectForm name="Atap" list={list["Atap"]}/>
        </div>
        <div >
          <div className='py-2'>Penerangan rumah</div>
          <SelectForm name="Penerangan" list={list["Penerangan"]}/>
        </div>
        <div >
          <div className='py-2'>Energi untuk memasak</div>
          <SelectForm name="Memasak" list={list["Memasak"]}/>
        </div>
        <div >
          <div className='py-2'>Sumber kayu bakar</div>
          <SelectForm name="Kayu bakar" list={list["Kayu bakar"]}/>
        </div>
        <div >
          <div className='py-2'>Tempat pembuangan sampah</div>
          <SelectForm name="TPS" list={list["TPS"]}/>
        </div>
        <div >
          <div className='py-2'>Fasilitas MCK</div>
          <SelectForm name="MCK" list={list["MCK"]}/>
        </div>
        <div >
          <div className='py-2'>Sumber air mandi terbanyak</div>
          <SelectForm name="Sumber air mandi" list={list["Sumber air mandi"]}/>
        </div>
        <div >
          <div className='py-2'>Fasilitas buang air besar</div>
          <SelectForm name="BAB" list={list["BAB"]}/>
        </div>
    </div>
  )
}

export default FormPemukiman