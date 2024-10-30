"use client"
import React from 'react'
import { CookiesProvider } from 'react-cookie'

export const Providers = ({children}:{children:React.ReactNode}) => {
  return (
    <CookiesProvider>
        {children}
    </CookiesProvider>
  )
}
