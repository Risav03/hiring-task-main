"use client"
import { useGlobalContext } from '@/context/dashboardContext'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { toast } from 'react-toastify'

export const useDashboardHooks = () => {

    const{fetchTitles, setAddTitleModal} = useGlobalContext()
    const[titleName, setTitleName] = useState<string>("")
    
    const[cookies] = useCookies(['token', 'address']);

    async function addTitle(){
        if(titleName == ""){
            return;
        }

        if(!cookies.address){
            toast.error("Please connect wallet to perform this action!")
            return ;
        }

        if(titleName.length>24){
            toast.error("Title needs to be less than 24 characters")
            return ;
        }

        try{
            const res = await axios.post("http://localhost:8000/api/v1/title", {title: titleName}, {headers:{"Authorization": cookies.token}});
            console.log(res);
            fetchTitles()
            setAddTitleModal(false);
            setTitleName("")
        }
        catch(err){
            toast.error("Unknown error while adding title.")
            console.log(err);
        }
    }

    async function deleteTitle(){

        if(!cookies.address){
            toast.error("Please connect wallet to perform this action!")
            return ;
        }

        try{
            
        }
        catch(err){
            toast.error("Unknown error while deleting title.")
            console.log(err);
        }
    }

    useEffect(()=>{
        fetchTitles();
    },[cookies.token])

  return {
    fetchTitles, titleName, setTitleName, addTitle
  }
}
