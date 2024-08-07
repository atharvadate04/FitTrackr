import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default  function Header(){
    const authstatus= useSelector(state=>state.auth.status );
     const navigate = useNavigate();
     const comp=[
        {
            name:"Login",
             transfer:"/login",
             active:!authstatus
        },
        {
            name:"Sign-up",
             transfer:"/signup",
             active:!authstatus
        },
        {
            name:"Home",
             transfer:"/",
             active:authstatus
        },
        {
            name:"Workouts",
            transfer:"/workouts",
            active:authstatus
        },
        {
            name:"Suggestion",
             transfer:"/suggestion",
             active:authstatus
        },
     ]

    return{
        
    }
}