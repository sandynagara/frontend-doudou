import React,{useState} from 'react'
import Search from './SearchPenduduk/Search'
import configAPi from "../config.json"
import ItemPenduduk from './SearchPenduduk/ItemPenduduk'
import Swal from "sweetalert2"

function SearchPage({bangunanSelect,setTambahPemilik}) {

  const [daftarPenduduk, setDaftarPenduduk] = useState([])
  const [pilih, setPilih] = useState(false)

  const cariNamaPenduduk = (e) =>{
    const nama = e.target.value
    if(nama === ""){
      setDaftarPenduduk([])
      return
    }
    console.log(nama)
    fetch(configAPi.SERVER_API + `caripenduduk/${nama}`).
    then(res=>res.json()).
    then(res=>setDaftarPenduduk(res)).
    catch(err=>console.log(err))
  }  

  const tambahPemilik = () => {
    console.log(bangunanSelect)
    fetch(configAPi.SERVER_API + `tambahpemilik`,{
      method:"PATCH",
      credentials:"include",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },body: JSON.stringify({
          id:{
            "bangunan":bangunanSelect["id"],
            "pemilik":pilih["_id"]
          }
      }),
    }).then(res=>res.json()).then(res=>{
      console.log(res)
      if(res["RTN"]){
        Swal.fire({
          icon: 'success',
          title: 'Penduduk berhasil ditambahkan',
        })
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Penduduk gagal ditambahkan',
          text: res["MSG"],
        })
      }
    }).catch(err=>console.log(err))
  }

  return (
    <div className='p-3 w-full h-full bg-white'
        style={{height:"470px"}}
    >
        <Search onChange={cariNamaPenduduk}/>
        <div className='overflow-y-scroll scrollbar'
          style={{height:"100%"}}
        >
          {daftarPenduduk !== [] && daftarPenduduk.map((e)=>{
            return <ItemPenduduk key={e._id} list={e} pilih={pilih} setPilih={setPilih}/>
          })}
        </div>
        <div className='w-full p-2 flex justify-end'
        >
          <button className='bg-red-500 px-8 rounded-md cursor-pointer py-2 text-white hover:bg-sky-800'
            onClick={()=>{setTambahPemilik(false)}}
          >
            Cancel
          </button>
          <button className='bg-sky-500 px-8 rounded-md cursor-pointer py-2 mx-3  text-white hover:bg-sky-800'
            style={pilih ? {disable:"false"}:{disable:"true",backgroundColor:"rgb(186 230 253)",cursor:"default"}}
            onClick={tambahPemilik}
          >
            Add
          </button>
        </div>
    </div>
  )
}

export default SearchPage