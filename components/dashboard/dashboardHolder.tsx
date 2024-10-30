"use client"
import React from 'react'
import { Button } from '../UI/button'
import { TitleRenderer } from './titleRenderer'
import ConnectWallet from '../walletConnect/walletButton'

export const DashboardHolder = () => {
  return (
    <div className='mt-10 w-full border-t-[1px] border-green-500/20 py-10'>
        <div className='absolute top-5 max-md:right-5 right-20 '>
            <ConnectWallet/>
        </div>
        <div className='md:flex'>
            <div className='md:w-1/2'>
                <h2 className='text-2xl font-semibold'>Titles</h2>
            </div>
            <div className='w-full flex justify-end md:w-1/2'>
                <Button type='primary' >+ Add Title</Button>
            </div>
        </div>

        <TitleRenderer/>
    </div>
  )
}
