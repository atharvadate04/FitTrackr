import Store from "./Strore";
import { createSlice } from "@reduxjs/toolkit";

const intialstate={
    status:false,
    userdata:null,
}

const Authslice={
    name:"auth",
    reducer:{
        login:(state,action)=>{
            state.status=true
            state.userdata=action.payload;
        },
        logout(state)
        {
                state.status=false;
                state.userdata=null;
        }
    }
}