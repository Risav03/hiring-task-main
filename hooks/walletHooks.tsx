"use client"
import React, { useState } from 'react'

export const useWalletHooks = () => {
    const [account, setAccount] = useState<string>('');

  return {
    account, setAccount
  }
}
