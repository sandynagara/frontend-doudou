import React,{useState} from 'react'
import Search from './SearchPenduduk/Search'
import configAPi from "../config.json"
import ItemPenduduk from './SearchPenduduk/ItemPenduduk'

function SearchPage() {

  const [daftarPenduduk, setDaftarPenduduk] = useState([])
  const [pilih, setPilih] = useState(false)

  const cariNamaPenduduk = (e) =>{
    const nama = e.target.value
    if(nama === ""){
      setDaftarPenduduk([])
      return
    }
    console.log(nama)
    fetch(configAPi.SERVER_API_Develop + `caripenduduk/${nama}`).
    then(res=>res.json()).
    then(res=>setDaftarPenduduk(res)).
    catch(err=>console.log(err))
  }  

  return (
    <div className='p-3 w-full h-full bg-white'>
        <Search onChange={cariNamaPenduduk}/>
        <div className='overflow-y-scroll scrollbar'
          style={{height:"430px"}}
        >
          {daftarPenduduk !== [] && daftarPenduduk.map((e)=>{
            return <ItemPenduduk key={e._id} list={e} pilih={pilih} setPilih={setPilih}/>
          })}
        </div>
        <div className='w-full p-2'
        >
          <button className='bg-sky-500 px-8 rounded-md cursor-pointer py-2 mx-3 absolute right-0 text-white hover:bg-sky-800'
            style={pilih ? {disable:"false"}:{disable:"true",backgroundColor:"rgb(186 230 253)",cursor:"default"}}
          >
            Add
            </button>
        </div>
    </div>
  )
}

export default SearchPage