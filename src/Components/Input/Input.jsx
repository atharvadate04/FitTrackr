

import React, { useId } from 'react'

function Input({type="text", label,placeholder="",
    className="",...props
},ref) {
    const id =useId();
    return (
        <div className='w-full'  >
            {
                label && <label className={`inline-block pb-1 pl-1 `}  htmlFor={id}  >
                    {label}

                </label>
            }
            <input type={type} 
            className={`     ${className}  w-full px-4 py-2 
            rounded-lg  border border-gray-300 
            focus:outline-none  focus: ring-2 
            focus:ring-orange-400   focus: border-transparent`}  placeholder={placeholder} ref={ ref }
            {...props} id={id}
            />

        </div>
        
    )
}

export default React.forwardRef(Input)
