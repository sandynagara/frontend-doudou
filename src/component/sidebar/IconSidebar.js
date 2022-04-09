import React,{useState} from 'react'


function IconSidebar({icon,judul ,open, setOpen,jenis}) {

    const [hover ,setHover] = useState(false)

  return (
    <div className='flex items-center'>
        <div 
        className='rounded flex items-center justify-center duration-500 text-white cursor-pointer px-2 m-2 py-3'
        style={open === judul ? {borderRadius : "5px 0px 0px 5px",margin:"2px 0px 14px 8px" ,padding:"12px 18px 12px 7px" ,backgroundColor:"white",color:"black"}: {}}
        onMouseEnter={() => {
            setHover(true) 
        }} 
        onMouseLeave={()=> {
            setHover(false)
        }} 
        onClick={()=> {open === judul ?  setOpen(false) : setOpen(judul)}}>
            {icon}
        </div>
        {hover && <div className="ml-16 rounded px-3 py-2 bg-black text-white absolute" style={{fontSize:"12px"}}>
            {judul}
        </div>}
    </div>
  )
}

export default IconSidebar