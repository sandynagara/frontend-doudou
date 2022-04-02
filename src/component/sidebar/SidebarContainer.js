import React from 'react'

function SidebarContainer({component,setInputBasemap ,inputBasemap }) {
  return (
    <div 
        className='w-30 h-screen absolute top-0 left-0 bg-white duration-500' 
        style={{zIndex:990}}
        >
        {component}
    </div>
  )
}

export default SidebarContainer