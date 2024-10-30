"use client"
import { useDashboardHooks } from '@/hooks/dashboardHooks'
import React, { useEffect } from 'react'
import { Card } from '../UI/card';
import { Subheading } from '../UI/subheading';
import { useGlobalContext } from '@/context/dashboardContext';

export const TitleRenderer = () => {

    const{titles, setTitles} = useGlobalContext();

    const formatDate = (date:string) => {
        const newDate = new Date(date);
        return `${newDate.getMonth()+1}/${newDate.getUTCDate()}/${newDate.getUTCFullYear()}`
    }

  return (
    <div className='w-full flex flex-wrap gap-2 my-5'>
        { titles && titles?.length > 0 &&
            titles?.map((item:titleType)=>(
                <Card key={item.uuid} className=''>
                    <Subheading size='text-xl font-semibold mb-5 w-60' >{item.title}</Subheading>
                    <h3 className='text-gray-400 text-sm'>Created at: {formatDate(item.createdAt)}</h3>
                    <h3 className='text-gray-400 text-sm'>Updated at: {formatDate(item.updatedAt)}</h3>
                </Card>
            ))
        }
    </div>
  )
}
