import React from 'react'

function Search({onChange}) {
  return (
    <input className='w-full h-9 px-3 bg-gray-100 border-solid border-neutral-200 border-2'
        placeholder='Cari Nama Penduduk'
        onChange={onChange}
    />
  )
}

export default Search