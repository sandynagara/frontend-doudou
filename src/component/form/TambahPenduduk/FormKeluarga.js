import React from 'react'
import InputForm from './InputForm'

function FormKeluarga() {
  return (
    <div className='overflow-y-scroll scrollbar'
        style={{
          height:"450px"
          }}
    >
        <div >
          <div className='py-2'>Nomor KK</div>
          <InputForm placeholder="Nomor KK" name="kk-keluarga"/>
        </div>
        <div>
          <div className='py-2'>NIK kepala keluarga</div>
          <InputForm placeholder="NIK kepala keluarga" name="NIK-kepala-keluarga"/>
        </div>
    </div>
  )
}

export default FormKeluarga