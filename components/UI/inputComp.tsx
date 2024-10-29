import React, { Dispatch } from 'react'

export const InputComp = ({content, setContent, heading, placeholder, type, required}:{type?: string, required:boolean, content:string, setContent:Dispatch<string>, heading:string, placeholder:string}) => {
  return (
    <div className="w-full text-start flex flex-col">
          <input type={type} placeholder={placeholder} onChange={(e) => { setContent(e.target.value) }} value={content} className={`p-2 peer placeholder:text-green-300/40 bg-green-300/20 w-full focus:outline-none focus:border-green-500 focus:border-2 rounded-xl border-[1px] border-green-500/50 duration-200 `}></input>
          <h2 className={`text-sm text-semibold text-nifty-gray-1 order-first mt-4 peer-focus:font-semibold duration-200 peer-focus:text-green-500 text-green-500/80 `}>{heading} {required && <span className="text-red-500 font-semibold ml-1">*</span>}</h2>
      </div>
  )
}
