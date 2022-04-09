import React from 'react'

function ButtonHeaderForm({teks,pilih,setPilih}) {
  return (
    <div className='px-10 py-3 cursor-pointer '
        style={pilih === teks ? {background:"black",color:"white",borderRadius:"6px 6px 0px 0px"} : {}}
        onClick={()=>{setPilih(teks)}}
    >
        {teks}
    </div>
  )
}

export default ButtonHeaderForm