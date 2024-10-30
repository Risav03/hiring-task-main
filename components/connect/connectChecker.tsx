"use client"
import {Login} from "./login";
import React from 'react'

import { Register } from './register';
import useConnectHooks from "@/hooks/connectHooks";

export const ConnectChecker = () => {

    const{type, setType} = useConnectHooks();
    

  return (
    <div>
        {
            type == "login" && <>
                <Login/>
                <h3 className="text-sm">Don't have an account? <span className='text-green-500 font-semibold cursor-pointer' onClick={()=>{setType("register")}} >Create one!</span></h3>
            </>
        }

        {
            type == "register" && <>
                <Register/>
                <h3 className="text-sm">Already have an account? <span className='text-green-500 font-semibold cursor-pointer' onClick={()=>{setType("login")}} >Log in</span></h3>
            </>
        }
    </div>
  )
}
