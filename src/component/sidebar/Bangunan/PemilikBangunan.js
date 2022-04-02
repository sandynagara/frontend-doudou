import React from 'react'

function HasilPencarian({data,setDetailPenduduk,setDeletePemilik}) {
  return (
    <div className='my-2 mx-2 rounded-mdtext-left text-xs border-2 solid border-gray-200 '>
      <div className='py-2 px-3 text-left'>
        <div className='font-bold mb-1'>Nama</div>
        <div>{data["individu"]["nama"]}</div>
        <div className='font-bold mt-2 mb-1'>NIK</div>
        <div>{data["individu"]["nik"]}</div>
      </div>
      <div className='flex justify-around items-center  text-white'>
      <div className='bg-red-500 hover:bg-red-800 w-full h-full p-2 cursor-pointer hover:bg-black'
            onClick={()=>setDeletePemilik(data["_id"])}
        >Delete</div>
        <div className='bg-gray-400 w-full h-full p-2 cursor-pointer hover:bg-black'
            onClick={()=>setDetailPenduduk(data["_id"])}
        >Detail</div>
      </div>
    </div>
  )
}

export default HasilPencarian