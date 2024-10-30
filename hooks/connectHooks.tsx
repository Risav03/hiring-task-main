"use client"
import { useEffect, useState } from "react";
import axios from "axios"
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import { headers } from "next/headers";

export default function useConnectHooks(){

    const[email, setEmail] = useState<string>("");
    const[username, setUsername] = useState<string>("");
    const[pwd, setPwd] = useState<string>("");
    const[repwd, setRepwd] = useState<string>("");
    const[pwdMatch, setPwdMatch] = useState<boolean>(true);
    const[type, setType] = useState<string>("login");

    const [cookies, setCookie] = useCookies(['token'])

    const router = useRouter();

    async function login(){
        try{
            const res = await axios.post("http://localhost:8000/api/v1/auth/login",{email: email, password:pwd});
            console.log(res);

            if(res.data.token){
                setCookie('token', res.data.token, {
                    path: '/',
                    maxAge: 3600,
                    sameSite: 'lax'
                  })
                router.push("/dashboard");
            }
        }
        catch(err){
            console.log(err);
        }
    }

    async function register(){
        try{
            const res = await axios.post("http://localhost:8000/api/v1/auth/register",{email: email, password:pwd, username:username});
            console.log(res);
            
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        if(cookies.token){
            router.push("/dashboard")
        }
    },[cookies])

    useEffect(()=>{
        if(pwd !== repwd){
            setPwdMatch(false);
        }
        else{
            setPwdMatch(true);
        }
    },[pwd, repwd])


    return{
        email, setEmail, pwd, setPwd, repwd, setRepwd, pwdMatch, login, register, username, setUsername, type, setType
    }
}