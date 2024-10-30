"use client"
import axios from 'axios'
import { headers } from 'next/headers'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'

export const useDashboardHooks = () => {

    const[titles, setTitles] = useState<Array<titleType>>([])
    const[cookies] = useCookies(['token'])
    const router = useRouter();

    async function fetchTitles(){
        try{
            const res = await axios.get("http://localhost:8000/api/v1/title", {headers:{"Authorization" : cookies.token}})

            setTitles(res.data);
        }
        catch(err:any){
            console.log(err);

            if(err.status == 401){
                router.push("/connect");
            }
        }
    }

    useEffect(()=>{
        fetchTitles();
    },[cookies])

  return {
    titles, fetchTitles
  }
}
