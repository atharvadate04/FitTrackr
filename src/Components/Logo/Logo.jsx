import React from 'react'

function Logo({width="w-[50%]" ,height="h-[50%]"}) {
    return (
        <div className={`${width}  ${height} ` }   >
            <img src="/icon.png" alt="" />   
        </div>
        
    )
}

export default Logo
