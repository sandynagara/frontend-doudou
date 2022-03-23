import React from 'react'
import SelectForm from './SelectForm'
import InputForm from './InputForm'

function FormIndividu() {

    var list = {
        "Jenis kelamin":["Laki-laki","Perempuan"],
        "Agama":["Islam","Kristen","Katolik","Buddha","Hindu"],
        "Pernikanan":["Kawin","Tidak kawin","Duda/Janda"],
        "Warga negara":["WNI","WNA"]
      }

  return (
    <div className='overflow-y-scroll scrollbar'
        style={{
          height:"450px"
          }}
    >
        <div>
          <div className='py-2'>Nomor Kartu Keluarga</div>
          <InputForm placeholder="Nomor Kartu Keluarga" name="kk-individu"/>
        </div>
        <div>
          <div className='py-2'>NIK</div>
          <InputForm placeholder="NIK" name="nik-Individu"/>
        </div>
        <div>
          <div className='py-2'>Nama</div>
          <InputForm placeholder="Nama" name="nama-individu"/>
        </div>
        <div>
          <div className='py-2'>Jenis Kelamin</div>
          <SelectForm name="jenis-kelamin" list={list["Jenis kelamin"]}/>
        </div>
        <div>
          <div className='py-2'>Tempat lahir</div>
          <InputForm placeholder="Tempat lahir" name="tempat-lahir"/>
        </div>
        <div>
          <div className='py-2'>Status Pernikanan</div>
          <SelectForm name="pernikanan-individu" list={list["Pernikanan"]}/>
        </div>
        <div>
          <div className='py-2'>Agama</div>
          <SelectForm name="agama" list={list["Agama"]}/>
        </div>
        <div>
          <div className='py-2'>Suku bangsa</div>
          <InputForm placeholder="Suku Bangsa" name="suku-individu"/>
        </div>
        <div>
          <div className='py-2'>Warga negara</div>
          <SelectForm name="warga negara" list={list["Warga negara"]}/>
        </div>
        <div>
          <div className='py-2'>Nomor HP</div>
          <InputForm placeholder="Nomor HP" name="hp-individu"/>
        </div>
        <div>
          <div className='py-2'>Nomor untuk Whatsapp</div>
          <InputForm placeholder="Nomor untuk Whatsapp" name="wa-individu"/>
        </div>
        <div>
          <div className='py-2'>Alamat email pribadi</div>
          <InputForm placeholder="Alamat email pribadi" name="email-individu"/>
        </div>
        <div>
          <div className='py-2'>Alamat Facebook</div>
          <InputForm placeholder="Alamat Facebook pribadi" name="fb-individu"/>
        </div>
        <div>
          <div className='py-2'>Alamat Twitter</div>
          <InputForm placeholder="Alamat twitter pribadi" name="twitter-individu"/>
        </div>
        <div>
          <div className='py-2'>Alamat Instagram</div>
          <InputForm placeholder="Alamat Instagram pribadi" name="ig-individu"/>
        </div>
    </div>
  )
}

export default FormIndividu