import React, { useState } from 'react'
import { Navigate, Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Logo from '../Components/Logo/Logo'
import Input from '../Components/Input/Input'
import Button from '../Components/Button'
function Login() {
    const[error,seterror]=useState('')
        const navigate=useNavigate();
        const{register,handleSubmit}=useForm()
        const login= async(data)=>{
            seterror('')    
        try {
            
        } catch (error) {
            
        }

        }
    return (
        < div className='max-w-full max-h-screen   overflow-y-hidden '  >
         <div  className='w-full   bg-[url(/Fitness.jpg)]  bg-cover bg-center bg-no-repeat        overflow-hidden  '   >

<div className='mx-auto  mt-[50px] z-50 shadow-md max-w-3xl bg-gray-400/40 p-4 flex-col justify-center items-center  border rounded-lg  '     >
    <div  className='flex justify-center items-center'    >
        <div  className=' border-4 border-blue-500 hover:animate-bounce  mt-5 rounded-full p-3 '   >  <Logo width='w-20%'/>  </div>
        
    </div>
    <div className='flex-col justify-center items-center mt-5 '   >
        <h2 className='text-center font-semibold text-3xl mt-3 mb-2 '  >Login to your account </h2>
        <div  className='flex justify-center   '>
           <p className='text-center text-base  text-base/60'> Don&apos;t have an account ?&nbsp;</p>
           <Link to='/signup'  className='text-sky-500  transition-all duration-200 '  > Sign-up</Link>
        </div>
        {error &&<p className='text-red-500' >{error}</p>}
        <form  onSubmit={handleSubmit(login)} >
            <div className='max-w-2xl mt-4 flex p-4 gap-6 flex-col ' >
            <Input label="EMAil: " type="email" placeholder="Enter yor email.."  className="  ml-2   " {...register("email",{required:true,
                    validate:{matchpatern:(value)=> /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value )||
                        "Email Address must be a valid address"
                    }
                    
                 })}  />
            <Input type="password" className="ml-2" placeholder="Enter your password..." label="Password"  {...register("email",{required:true})} ></Input>
            <Button  childern="login"  className='font-bold text-xl mt-3 '  type="submit" /> 
            
                 
            </div>
            
            
        </form>


    </div>
</div   >

    
</div>

       </div>
    )
}

export default Login
