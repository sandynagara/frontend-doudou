import React from 'react'

function ButtonHeaderForm({teks,pilih,setPilih}) {
  return (
    <div className='px-10 py-3 cursor-pointer'
        style={pilih === teks ? {border:"solid black", borderWidth:"0px 0px 3px 0px"} : {}}
        onClick={()=>{setPilih(teks)}}
    >
        {teks}
    </div>
  )
}

export default ButtonHeaderForm