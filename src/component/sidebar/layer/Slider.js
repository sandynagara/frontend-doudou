import React,{useRef,useEffect} from 'react'

function Slider({setOpacity,label}) {
    const input = useRef()

    useEffect(() => {
        input.current.value = 100
    }, [])

    return(<div className='flex flex-col'>
        <p className='mb-1'>{label}</p>
        <input ref={input} type="range" onChange={(e)=>setOpacity(e.target.value)}/>
        </div>
    )
}

export default Slider