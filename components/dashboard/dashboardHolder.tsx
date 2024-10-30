"use client"
import React from 'react'
import { Button } from '../UI/button'
import { TitleRenderer } from './titleRenderer'
import ConnectWallet from '../walletConnect/walletButton'
import { useDashboardHooks } from '@/hooks/dashboardHooks'

import { Card } from '../UI/card'
import { InputComp } from '../UI/inputComp'
import { ImCross } from "react-icons/im";
import { useGlobalContext } from '@/context/dashboardContext'
import { AddTitleModal } from './addTitleModal'


export const DashboardHolder = () => {

    const{fetchTitles, setAddTitleModal} = useGlobalContext()
    const{titleName, setTitleName, addTitle} = useDashboardHooks()

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
                <Button onClick={()=>{setAddTitleModal(true)}} type='primary' >+ Add Title</Button>
            </div>
        </div>
        
        <TitleRenderer/>
        <AddTitleModal/>
    </div>
  )
}
