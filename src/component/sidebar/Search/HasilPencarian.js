import React from 'react'
import {BsArrowRightSquare} from "react-icons/bs"

function HasilPencarian({data,setBangunanId,setDetailPenduduk}) {
  return (
    <div className='my-2 rounded-mdtext-left text-xs border-2 solid border-gray-200 '>
      <div className='py-2 px-3 text-left'>
        <div className='font-bold mb-1'>Nama</div>
        <div>{data["individu"]["nama"]}</div>
        <div className='font-bold mt-2 mb-1'>NIK</div>
        <div>{data["individu"]["nik"]}</div>
        {data["bangunan"] !== [] && data["bangunan"].map((data,index)=>{
          return (
          <div className=''>
            {/* <div className='font-bold mt-2 mb-1'>Tempat tinggal {index+1}</div> */}
            <div className='bg-gray-100 w-full flex justify-between font-bold items-center hover:bg-black py-2 px-2 mt-2 mb-1 rounded-sm text-black hover:text-white  cursor-pointer'
                onClick={()=>setBangunanId(data["id"])}
            >
             Tempat tinggal {index+1}
             <BsArrowRightSquare style={{width:"15px",height:"15px"}}/> 
            </div>
           
          </div>
          )
        })}
      </div>
      <div className='flex justify-around items-center  text-white'>
        <div className='bg-gray-400 w-full h-full p-2 cursor-pointer hover:bg-black'
            onClick={()=>setDetailPenduduk(data["_id"])}
        >Detail</div>
      </div>
    </div>
  )
}

export default HasilPencarian