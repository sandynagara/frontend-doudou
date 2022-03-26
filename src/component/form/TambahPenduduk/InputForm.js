import React,{useState} from 'react'

function InputForm({placeholder,name,type="teks",onChange=()=>{},wajib=false}) {
  
  const [isi, setIsi] = useState(false)
  
  return (
    <div>
        <input className='w-full h-9 px-3 bg-gray-100 border-solid border-neutral-200 border-2 rounded-sm'
            placeholder={placeholder}
            name={name}
            type={type}
            onChange={onChange}
            onInput={(e)=>{setIsi(e.target.value)}}
            style={wajib && isi === "" ? {borderColor:"rgb(220 38 38)",borderWidth:"2px"} : {}}
        />
    </div>
  )
}

export default InputForm