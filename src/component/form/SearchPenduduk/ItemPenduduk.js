import React,{useEffect,useState} from 'react'

function ItemPenduduk({list,pilih,setPilih}) {

    const [select, setSelect] = useState(false)

    useEffect(() => {
        try{
            setSelect(pilih["_id"])
        }catch{
            setSelect(false)
        }
        
    }, [pilih])
    

  return (
    <div className='w-full py-3 px-5 border-2 my-3 rounded-md  text-left bg-gray-50 cursor-pointer hover:border-sky-300'
        style={select === list["_id"] ? {borderColor:"rgb(125 211 252)"} : {}}
        onClick={()=>{
            if(select === list["_id"]){
                setPilih(false)
            }else{
                setPilih(list)
            }
        }}
    >
        <div className="font-bold text-lg">
            {list["individu"]["nama"]}
        </div>
        <div className="text-gray-500 text-sm py-1">
            {list["individu"]["nik"]}
        </div>
        <div className="text-gray-500 text-sm py-1">
            {list["lokasi"]["alamat"]}
        </div>
    </div>
  )
}

export default ItemPenduduk