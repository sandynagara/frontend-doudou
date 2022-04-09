import React from 'react'

function ItemPengenalPenduduk({icon,judul="-",isi="-"}) {
  return (
    <div className='text-sm flex items-center my-1'>
        {icon}
        <div className='mx-3'>
            <div className='font-bold'>
                {judul}
            </div>
            <div>
                {isi}
            </div>
        </div>
    </div>
  )
}

export default ItemPengenalPenduduk