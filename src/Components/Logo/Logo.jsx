import React from 'react'

function Logo({width="20px" ,height="10px"}) {
    return (
        <div className={`w-[${width}]  h-[${height}] ` }   >
            <img src="health.svg" alt="" />   
        </div>
        
    )
}

export default Logo
