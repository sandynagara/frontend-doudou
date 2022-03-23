import React from 'react'

function InputForm({placeholder,name,teksInput,setTeks}) {
  return (
    <div>
        <input className='w-full h-9 px-3 bg-gray-100 border-solid border-neutral-200 border-2'
            placeholder={placeholder}
            name={name}
        />
    </div>
  )
}

export default InputForm