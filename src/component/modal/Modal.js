import React from 'react'

function Modal({component,close=false}) {
  return (
    <div 
      className='absolute w-screen h-screen right-0 flex items-center justify-center'
      style={{zIndex:1000}}
     
    >
      <div
        style={{zIndex:1000}}
      >
        {component}
      </div>
      <div
        onClick={close}
        className='absolute top-0 bg-black bg-opacity-40 w-screen h-screen right-0 '
      >
        
      </div>
    </div>
  )
}

export default Modal