
import React, { useState } from 'react'
import { InputComp } from '../UI/inputComp'
import { Button } from '../UI/button'
import useConnectHooks from '@/hooks/connectHooks'
import Image from 'next/image'
import logo from "@/assets/logo.svg"

export const Register = () => {

  const{email, setEmail, pwd, setPwd, repwd, setRepwd, pwdMatch, register, username, setUsername} = useConnectHooks();

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex gap-2'>
        <Image src={logo} alt='logo' className='w-7'/>
        <h2 className='text-2xl font-bold text-center'>Register</h2>
      </div>
      <InputComp required={true} type='text' heading='Set Username' placeholder='MeowCat98' content={username} setContent={setUsername} />
      <InputComp required={true} type='text' heading='Enter email' placeholder='meow@purr.cat' content={email} setContent={setEmail} />
      <InputComp required={true} type='password' heading='Enter password' placeholder='meow1998!' content={pwd} setContent={setPwd} />
      <InputComp required={true} type='password' heading='Re-Enter password' placeholder='meow1998!' content={repwd} setContent={setRepwd} />
      {!pwdMatch && <h3 className='text-red-500 text-sm text-left w-full mt-1'>Passwords do not match!</h3>}
      <Button type='primary' className='w-full mt-6 mb-4' onClick={()=>{register()}} >Register</Button>
    </div>
  )
}
