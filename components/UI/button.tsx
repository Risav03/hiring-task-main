import React from 'react'

export const Button = ({children, type, className, onClick}:{children:React.ReactNode, onClick?:()=>void, type:string, className?:string}) => {

    if(type == "primary")
  return (
    <button onClick={onClick} className={` bg-gradient-to-br from-emerald-600 to-green-500 text-white font-bold w-40 h-10 text-xl hover:-translate-y-1 duration-200 rounded-lg hover:brightness-105 ${className} `} >
        {children}
    </button>
  )
}
