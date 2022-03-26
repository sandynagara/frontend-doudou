import React from 'react'
import {MdDelete} from "react-icons/md"

function DaftarPenyakit({list,judul,isi = false,setIdDelete}) {
  return (
    <div className='relative bg-white border-2 rounded-md p-3 mb-1 mt-1 text-sm'>
        <div>{judul} : {list.judul}</div>
        {isi && <div>{isi} : {list.isi}</div>}
        <div className='absolute right-3 bottom-4 cursor-pointer'
            onClick={()=>{setIdDelete(list.id)}}
        >
            <MdDelete style={{width:"1rem", height:"1rem",color:"red"}}/>
        </div>
    </div>
  )
}

export default DaftarPenyakit