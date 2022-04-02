import React,{useState,useEffect} from 'react'
import InputForm from '../../form/InputForm'
import Filter from './Filter'
import {BiSortDown} from "react-icons/bi"
import {AiOutlineSearch} from "react-icons/ai"
import configApi from "../../config.json"
import HasilPencarian from './HasilPencarian'

function Search({open,jenis,setDetailPenduduk,setbangunanSelect}) {

  const [activeFilter, setActiveFilter] = useState(false)
  const [filter, setFilter] = useState()
  const [nama, setNama] = useState("")
  const [bangunanId, setbangunanId] = useState()
  const [daftarPenduduk, setDaftarPenduduk] = useState(false)

  const cariPenduduk = () => {
    const url = configApi.SERVER_API_Develop + "caripendudukfilter"
    fetch(url,{
      method:"POST",
      credentials:"include",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nama:nama,
        filter:filter,
    }),
    }).then(res=>res.json()).then(res=>{
      setDaftarPenduduk(res)
      console.log(res)
    }).catch(err=>console.log(err))
  }

  useEffect(() => {
    const url = configApi.SERVER_API_Develop +`bangunan/${bangunanId}`
    fetch(url,{
      method:"GET",
      credentials:"include"
    }).then(res=>res.json()).then(res=>{
      console.log(res)
      res["id"] = res["_id"]
      setbangunanSelect(res)
    }).catch(err=>console.log(err))
  }, [bangunanId])
  

  return (
    <div className='w-30 px-2 duration-500 p-3 h-screen overflow-y-clip'
    style={open === jenis ? {marginLeft:"50px", width: "275px" } : {marginLeft:"-300px", width: "275px"}}
    >
        <div className='flex'>
          <InputForm onChange={(e)=>setNama(e.target.value)}/>
          <AiOutlineSearch className='bg-black ml-2 rounded-md cursor-pointer fill-white p-2 h-9 w-10'
            onClick={cariPenduduk}
          />
        </div>
        
        
        <div className='w-full py-1 text-sm rounded-sm my-2 text-white bg-gray-800 flex justify-center items-center cursor-pointer'
            onClick={()=>setActiveFilter(!activeFilter)}
        >
          <BiSortDown className='mx-2'/>
          Filter
        </div>
        
        <Filter setFilter={setFilter} activeFilter={activeFilter}/>
        <div className=' overflow-y-scroll scrollbar'
            style={{height:'calc(100vh - 110px)'}}
        >
          {daftarPenduduk && daftarPenduduk.map(data=>{
            return ( 
            <HasilPencarian 
              data={data} 
              key={data["individu"]["nik"]}
              setDetailPenduduk={setDetailPenduduk}
              setBangunanId={setbangunanId}
            />
            )
          })}
        </div>
        
    </div>
  )
}

export default Search