import React, { ReactElement, ReactHTMLElement } from 'react'

export const Subheading = ({children, size}:{children:React.ReactNode, size: string}) => {
  return (
    <h2 className={` bg-gradient-to-b from-emerald-500 to-green-500 bg-clip-text text-transparent font-medium ${size} `}>
        {children}
    </h2>
  )
}
