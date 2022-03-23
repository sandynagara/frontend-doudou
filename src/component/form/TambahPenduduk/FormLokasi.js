import React from 'react'
import InputForm from "./InputForm"

function FormLokasi() {
  return (
    <div className='overflow-y-scroll scrollbar'
        style={{
          height:"450px"
          }}
    >
        <div >
          <div className='py-2'>Provinsi</div>
          <InputForm placeholder="Provinsi" name="provinsi-lokasi"/>
        </div>
        <div>
          <div className='py-2'>Kabupaten/kota</div>
          <InputForm placeholder="Kabupaten/kota" name="kabupaten-lokasi"/>
        </div>
        <div>
          <div className='py-2'>Kecamatan</div>
          <InputForm placeholder="Desa" name="desa-lokasi"/>
        </div>
        <div>
          <div className='py-2'>RT/RW</div>
          <InputForm placeholder="RT/RW" name="rt/rw-lokasi"/>
        </div>
        <div>
          <div className='py-2'>Nama</div>
          <InputForm placeholder="Desa" name="nama-lokasi"/>
        </div>
        <div>
          <div className='py-2'>Alamat</div>
          <InputForm placeholder="Alamat" name="alamat-lokasi"/>
        </div>
        <div>
          <div className='py-2'>Nomor Hp</div>
          <InputForm placeholder="Nomor Hp" name="hp-lokasi"/>
        </div>
        <div>
          <div className='py-2'>Nomor telepon kabel/rumah</div>
          <InputForm placeholder="Nomor telepon kabel/rumah" name="hp-rumah-lokasi"/>
        </div>
    </div>
  )
}

export default FormLokasi