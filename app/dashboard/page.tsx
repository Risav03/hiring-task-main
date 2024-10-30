

import { DashboardHolder } from '@/components/dashboard/dashboardHolder';
import { Subheading } from '@/components/UI/subheading';
import React from 'react'

export default function Dashboard(){

  return (
    <div className=' w-screen min-h-screen flex flex-col max-md:justify-center items-start md:p-20 px-4 py-12 '>
        <h2 className='text-4xl font-bold'>Dashboard</h2>
        <Subheading size='text-xl my-4' >This dashboard allows you to add or delete titles and see all titles present in the app.</Subheading>

        <DashboardHolder/>
    </div>
  )
}
