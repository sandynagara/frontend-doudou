import React from 'react'

function SelectForm({name,list,value}) {
  return (
    <select name={name} className="w-full h-9 px-3 bg-gray-100 border-solid border-neutral-200 border-2">
        {list.map((e)=>{
            return <option value={e}>{e}</option>
        })}
    </select>
  )
}

export default SelectForm