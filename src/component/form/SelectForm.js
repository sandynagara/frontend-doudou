import React,{useEffect,useRef} from 'react'

function SelectForm({name,list,onChange=()=>{},edit=true,text=""}) {

  const inputData = useRef()

  useEffect(() => {
    if(!edit){
      inputData.current.value = text
      inputData.current.disabled = true
    }
  }, [edit,text])

  return (
    <select 
    name={name}  
    onChange={onChange}
    ref={inputData}
    className="w-full h-9 px-3 bg-gray-100 border-solid border-neutral-200 border-2">
        {list.map((e,index)=>{
            return <option value={e} key={index}>{e}</option>
        })}
    </select>
  )
}

export default SelectForm