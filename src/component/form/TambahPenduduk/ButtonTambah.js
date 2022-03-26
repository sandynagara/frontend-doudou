import React from 'react'

function ButtonTambah({click=()=>{}}) {
  return (
    <button 
    className='w-full bg-blue-500 rounded-md text-center p-1 text-white cursor-pointer'
    onClick={click}>
        Tambah
    </button>
  )
}

export default ButtonTambah