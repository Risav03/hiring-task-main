"use client"
import { GlobalContextProvider } from '@/context/dashboardContext'
import React from 'react'
import { CookiesProvider } from 'react-cookie'

export const Providers = ({children}:{children:React.ReactNode}) => {
  return (
    <GlobalContextProvider>
        <CookiesProvider>
            {children}
        </CookiesProvider>
    </GlobalContextProvider>
  )
}
