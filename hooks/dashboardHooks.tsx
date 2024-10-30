"use client"
import { useGlobalContext } from '@/context/dashboardContext'
import axios from 'axios'
import { headers } from 'next/headers'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'

export const useDashboardHooks = () => {

    const{fetchTitles, setAddTitleModal} = useGlobalContext()
    const[titleName, setTitleName] = useState<string>("")
    
    const[cookies] = useCookies(['token'])

    async function addTitle(){
        if(titleName == ""){
            return;
        }
        try{
            const res = await axios.post("http://localhost:8000/api/v1/title", {title: titleName}, {headers:{"Authorization": cookies.token}});
            console.log(res);
            fetchTitles()
            setAddTitleModal(false);
            setTitleName("")
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        fetchTitles();
    },[cookies])

  return {
    fetchTitles, titleName, setTitleName, addTitle
  }
}
