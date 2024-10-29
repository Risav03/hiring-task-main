"use client"
import React, { useState } from 'react'
import { InputComp } from '../UI/inputComp'
import { Button } from '../UI/button'

export const Register = () => {

  const[email, setEmail] = useState<string>("");
  const[pwd, setPwd] = useState<string>("");

  return (
    <div className='flex flex-col justify-center items-center'>
      <h2 className='text-2xl font-bold text-green-500 text-center'>Register</h2>
      <InputComp required={true} type='text' heading='Enter email' placeholder='meow@purr.cat' content={email} setContent={setEmail} />
      <InputComp required={true} type='password' heading='Enter password' placeholder='meow1998!' content={pwd} setContent={setPwd} />
      <InputComp required={true} type='password' heading='Re-Enter password' placeholder='meow1998!' content={pwd} setContent={setPwd} />
      <Button type='primary' className='w-full mt-6 mb-4' onClick={()=>{}} >Register</Button>
    </div>
  )
}
