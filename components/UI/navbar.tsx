"use client"

import React from 'react'
import { Button } from './button'
import { useRouter } from 'next/navigation'
import logo from "@/assets/logo.svg"
import Image from 'next/image'

export const Navbar = () => {

    const router = useRouter()

  return (
    <div className='flex w-screen items-center justify-center px-4 md:px-20 absolute h-20'>
        <div className='flex items-center w-1/2 text-xl gap-2'>
            <Image src={logo} alt='logo' className='w-8' />
            <h2 className='font-bold'>Title Generator</h2>
        </div>
        <div className='w-1/2 flex items-center justify-end'>
            <Button onClick={()=>router.push("/connect")} type="primary" className="" >Login</Button>
        </div>
    </div>
  )
}
