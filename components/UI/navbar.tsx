"use client"

import React from 'react'
import { Button } from './button'
import { useRouter } from 'next/navigation'

export const Navbar = () => {

    const router = useRouter()

  return (
    <div className='flex w-screen items-center justify-center px-4 md:px-20 absolute'>
        <div className='flex items-center w-1/2 text-xl'>
            <h2 className='font-bold'>Title Generator</h2>
        </div>
        <div className='w-1/2 flex justify-end'>
            <Button onClick={()=>router.push("/connect")} type="primary" className="mt-6" >Login</Button>
        </div>
    </div>
  )
}
