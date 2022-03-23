import React from 'react'
import SelectForm from './SelectForm'

function FormKesehatan() {

    var list = ["Tidak","Ya"]
    var listJaminan = ["Peserta","Bukan peserta"]

  return (
    <div className='overflow-y-scroll scrollbar'
        style={{
          height:"450px"
          }}
    >
        <div className='py-2'><b>Penyakit yang diderita setahun terakhir</b></div>
        <div>
          <div className='py-2'>Muntaber</div>
          <SelectForm name="Muntaber" list={list}/>
        </div>
        <div>
          <div className='py-2'>Demam Berdarah</div>
          <SelectForm name="Demam Berdarah" list={list}/>
        </div>
        <div>
          <div className='py-2'>Campak</div>
          <SelectForm name="Campak" list={list}/>
        </div>
        <div>
          <div className='py-2'>Malaria</div>
          <SelectForm name="Malaria" list={list}/>
        </div>
        <div>
          <div className='py-2'>Flu burung/SARS</div>
          <SelectForm name="Flu burung/SARS" list={list}/>
        </div>
        <div>
          <div className='py-2'>Covid-19</div>
          <SelectForm name="Covid-19" list={list}/>
        </div>
        <div>
          <div className='py-2'>Hepatitis B</div>
          <SelectForm name="Hepatitis B" list={list}/>
        </div>
        <div>
          <div className='py-2'>Hepatitis E</div>
          <SelectForm name="Hepatitis E" list={list}/>
        </div>
        <div>
          <div className='py-2'>Difteri</div>
          <SelectForm name="Difteri" list={list}/>
        </div>
        <div>
          <div className='py-2'>Chikungunya</div>
          <SelectForm name="Chikungunya" list={list}/>
        </div>
        <div>
          <div className='py-2'>Leplospirosis</div>
          <SelectForm name="Leplospirosis" list={list}/>
        </div>
        <div>
          <div className='py-2'>Kolera</div>
          <SelectForm name="Kolera" list={list}/>
        </div>
        <div>
          <div className='py-2'>Gizi buruk</div>
          <SelectForm name="Gizi buruk" list={list}/>
        </div>
        <div>
          <div className='py-2'>Jantung</div>
          <SelectForm name="Jantung" list={list}/>
        </div>
        <div>
          <div className='py-2'>TBC paru-paru</div>
          <SelectForm name="TBC" list={list}/>
        </div>
        <div>
          <div className='py-2'>Kanker</div>
          <SelectForm name="Kanker" list={list}/>
        </div>
        <div>
          <div className='py-2'>Diabetes</div>
          <SelectForm name="Diabetes" list={list}/>
        </div>
        <div>
          <div className='py-2'>Lumpuh</div>
          <SelectForm name="Lumpuh" list={list}/>
        </div>
        <div>
          <div className='py-2'>Lainnya</div>
          <SelectForm name="Lainnya" list={list}/>
        </div>
        <div className='py-2'><b>Kunjungan ke fasilitas kesehatan dalam setahun terakhir</b></div>
        <div>
          <div className='py-2'>Jaminan sosial kesehatan</div>
          <SelectForm name="jaminan-kesehatan" list={listJaminan}/>
        </div>
    </div>
  )
}

export default FormKesehatan