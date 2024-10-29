import React from 'react'

export const Card = ({className, children}:{className:string, children: React.ReactNode}) => {
  return (
    <div className={` ${className} p-4 rounded-xl border-t-[1px] border-r-[1px] shadow-xl border-green-500/20 bg-gradient-to-br from-emerald-950/20 to-green-800/20 `}>
        {children}
    </div>
  )
}
