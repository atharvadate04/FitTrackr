import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";


export default  function Header(){
    // const authstatus= useSelector(state=>state.auth.status );
     const navigate = useNavigate();
    
     const comp=[
        {
            name:"Login",
             transfer:"/login",
            //  active:!authstatus
        },
        {
            name:"Sign-up",
             transfer:"/signup",
            //  active:!authstatus
        },
        {
            name:"Home",
             transfer:"/",
             active:true
        },
        {
            name:"Workouts",
            transfer:"/workouts",
            active:true
        },
        {
            name:"Suggestion",
             transfer:"/suggestion",
             active:true
        },
     ]

    return(
        <header className="shadow sticky z-50 top-0 "  >
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-3.5  "      >
                <div className="  flex flex-wrap justify-between items-center mx-aut0 max-w-screen-xl "   >
                    <Link to='/' className="flex"  >
                        <Logo/>
                    </Link>
                    <ul  className="flex items-center   "   >
                    {

                        comp.map((item)=>(item.active==true?(<li key={item.name}>
                        <button className="py-4 px-3 inline-block gap-1 outline:none focus:ring-1 focus:ring-sky-400 hover:text-orange-500 font-bold tracking-wider antialiased hover:subpixel-antialiased " onClick={()=>navigate(item.transfer)}   >
                                {item.name}
                        </button>
                        </li>):null))  
                        }
                        {
                        // After prepare the logout button
                        // authstatus? 
                        }
                    </ul>
                    <div>
                    
                    </div>

                </div>
                
                
             </nav>  
        <div>
           
        </div>

        </header>
    )
}