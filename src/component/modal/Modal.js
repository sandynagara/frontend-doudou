import React from 'react'

function Modal({component}) {
  return (
    <div 
      className='absolute top-0 bg-black bg-opacity-40 w-screen h-screen right-0 flex items-center justify-center'
      style={{zIndex:10000}}
    >
      {component}
    </div>
  )
}

export default Modal