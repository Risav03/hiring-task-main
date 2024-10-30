import { useGlobalContext } from '@/context/dashboardContext'
import { useDashboardHooks } from '@/hooks/dashboardHooks';
import React from 'react'
import { InputComp } from '../UI/inputComp';
import { Button } from '../UI/button';
import { Card } from '../UI/card';
import { ImCross } from 'react-icons/im';

export const AddTitleModal = () => {
    const{addTitleModal, setAddTitleModal} = useGlobalContext();
    const{titleName, setTitleName, addTitle} = useDashboardHooks()

  return (
    <div className={` ${addTitleModal ? " translate-y-0 " : " -translate-y-[100rem] "} duration-500 w-screen h-screen backdrop-blur-xl fixed top-0 left-0 flex items-center justify-center `}>
        <Card className='w-80' >
            <div className='flex'>
                <h2 className='text-xl font-semibold w-1/2'>Add Title</h2>
                <div className='flex justify-end w-1/2'>
                    <button onClick={()=>{setAddTitleModal(false)}} className='hover:text-red-500 duration-200 text-sm'><ImCross/></button>
                </div>
            </div>
            <InputComp content={titleName} heading='Title name' placeholder='Solidty Developer' required={true} setContent={setTitleName} ></InputComp>
            <Button type='primary' className='mt-4 w-full' onClick={()=>{addTitle()}} >Add</Button>
        </Card>
    </div>
  )
}
