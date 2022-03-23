import React from 'react'
import InputForm from "./InputForm"

function FormEnumerator() {
  return (
    <div>
        <div>
          <div className='py-2'>Nama</div>
          <InputForm placeholder="Nama" name="nama"/>
        </div>
        <div>
          <div className='py-2'>Alamat</div>
          <InputForm placeholder="Alamat" name="alamat"/>
        </div>
        <div>
          <div className='py-2'>HP/Telepon</div>
          <InputForm placeholder="Hp" name="hp"/>
        </div>
    </div>
  )
}

export default FormEnumerator