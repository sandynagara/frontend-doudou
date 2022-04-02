import React from 'react'
import {RiErrorWarningFill} from "react-icons/ri"

function ButtonTipeInput({teks,pilih,setPilih,wajib=false}) {
  return (
    <div className='px-6 py-1 cursor-pointer flex justify-center items-center border-b-2 pb-2 border-gray-300 text-gray-400 solid'
        style={pilih === teks ? {border:"solid",borderWidth:"0px 0px 2px 0px",borderColor:"rgb(14 165 233)",color:"rgb(14 165 233)"} : {}}
        onClick={()=>{setPilih(teks)}}
    >
      <div className='mr-2 ml-1'>
        {teks}
      </div>
      {wajib && 
        <RiErrorWarningFill style={{color:"red"}}/>
      }
    </div>
  )
}

export default ButtonTipeInput