
import React, { useState } from 'react'
import { Button } from '../UI/button';
import { InputComp } from '../UI/inputComp';
import Image from 'next/image';
import logo from "@/assets/logo.svg"
import useConnectHooks from '@/hooks/connectHooks';

export const Login = () => {

  const{email, setEmail, pwd, setPwd, login} = useConnectHooks();

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex gap-2'>
        <Image src={logo} alt='logo' className='w-7'/>
        <h2 className='text-2xl font-bold text-center'>Login</h2>
      </div>
      <InputComp required={true} type='text' heading='Enter email' placeholder='meow@purr.cat' content={email} setContent={setEmail} />
      <InputComp required={true} type='password' heading='Enter password' placeholder='meow1998!' content={pwd} setContent={setPwd} />
      <Button type='primary' className='w-full mt-6 mb-4' onClick={()=>{login()}} >Login</Button>
    </div>
  )
}
