import React, { useState } from 'react';
import { Navigate, Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Logo from '../Components/Logo/Logo';
import Input from '../Components/Input/Input';
import Button from '../Components/Button';

function Login() {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const login = async (data) => {
        setError('');
        try {
            // Your login logic here
        } catch (error) {
            // Handle error
        }
    };

    return (
        <div className='min-h-full flex justify-center items-center'>
            <div className='w-full h-full bg-[url(/Sign.jpg)] bg-cover bg-center bg-no-repeat'>
            <div className='mx-auto  mt-[30px] z-50 shadow-md max-w-3xl bg-gray-400/60 p-4 flex-col justify-center items-center  border rounded-lg  '     >
    <div  className='flex justify-center items-center'    >
        <div  className=' border-4 border-blue-500 hover:animate-bounce  mt-5 rounded-full p-3 '   >  <Logo width='w-20%'/>  </div>
        
    </div>
    <div className='flex-col justify-center items-center mt-5 '   >
        <h2 className='text-center font-semibold text-3xl mt-3 mb-2 '  >Create  your account </h2>
        <div  className='flex justify-center   '>
           <p classNamle='text-center text-base  text-base/60'> Already have an account ?&nbsp;</p>
           <Link to='/login'  className='text-sky-500  transition-all duration-200 '  > Login</Link>
        </div>
        {error &&<p className='text-red-500' >{error}</p>}
        <form  onSubmit={handleSubmit(login)} >
            <div className='max-w-2xl mt-3 flex p-4 gap-6 flex-col ' >
                <div  className='flex gap-4' >
                    <Input  label="FirstName: " className="w-[50%] ml-2 "  type="name"{...register("First-name",{required:true})} />
                    <Input  label="LastName:  "  className="w-[50%] ml-2 "  type="name" {...register("Last-name",{required:true})}/>
                </div>
            <Input label="EMAil: " type="email" placeholder="Enter yor email.."  className="  ml-2   " {...register("email",{required:true,
                    validate:{matchpatern:(value)=> /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value )||
                        "Email Address must be a valid address"
                    }
                    
                 })}  />
            <Input type="password" className="ml-2" placeholder="Enter your password..." label="Password"  {...register("email",{required:true})} ></Input>
            <Button  childern="Sign-up"  className='font-bold text-xl mt-1 '  type="submit" /> 
            
                 
            </div>
            
            
        </form>


    </div>
</div   >
            </div>
        </div>
    );
}

export default Login;
