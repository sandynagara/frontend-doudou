import React from 'react'

function ButtonTipeInput({teks,pilih,setPilih}) {
  return (
    <div className='px-6 py-1 cursor-pointer'
        style={pilih === teks ? {border:"solid black", borderWidth:"0px 0px 3px 0px"} : {}}
        onClick={()=>{setPilih(teks)}}
    >
        {teks}
    </div>
  )
}

export default ButtonTipeInput