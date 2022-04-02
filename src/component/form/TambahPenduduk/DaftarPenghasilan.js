import React from 'react'
import {MdDelete} from "react-icons/md"

function DaftarPenghasilan({list,setIdDelete,edit=true}) {

    var	number_string = list.penghasilan.toString(),
	sisa 	= number_string.length % 3,
	rupiah 	= number_string.substr(0, sisa),
	ribuan 	= number_string.substr(sisa).match(/\d{3}/g);
		
    if (ribuan) {
        var separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }

  return (
    <div className='relative bg-white border-2 rounded-md p-3 mb-3 mt-1 text-sm'>
        <div>Sumber Penghasilan : {list.judul}</div>
        <div>Volume : {list.volume} {list.satuan}</div>
        <div>Pendapatan : Rp {rupiah}</div>
        {edit && 
            <div className='absolute right-3 bottom-4 cursor-pointer'
            onClick={()=>{setIdDelete(list.id)}}
            >
                <MdDelete style={{width:"1rem", height:"1rem",color:"red"}}/>
            </div>
        }
        
    </div>
  )
}

export default DaftarPenghasilan