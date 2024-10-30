import React, { useState, useCallback, useEffect } from 'react';
import { ethers } from 'ethers';
import { Button } from '@/components/UI/button';
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";
import { useCookies } from 'react-cookie';
import { useWalletHooks } from '@/hooks/walletHooks';

interface ConnectWalletProps {
  onAddressChange?: (address: string) => void;
  onConnectedChange?: (connected: boolean) => void;
}

interface EthereumWindow extends Window {
  ethereum?: {
    request: (args: { method: string; params?: any[] }) => Promise<any>;
    on: (event: string, callback: (params: any) => void) => void;
    removeListener: (event: string, callback: (params: any) => void) => void;
    isMetaMask?: boolean;
  };
}

declare const window: EthereumWindow;

const ConnectWallet: React.FC<ConnectWalletProps> = ({ 
  onAddressChange, 
  onConnectedChange 
}) => {
  const{account, setAccount} = useWalletHooks()
  const [isConnected, setIsConnected] = useState<boolean>(false);

  const[cookies, setCookie, removeCookie] = useCookies(['address'])

  const truncateAddress = (address: string): string => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const handleAccountsChanged = useCallback((accounts: string[]) => {
    if (accounts.length > 0) {
      const newAddress = accounts[0];
      setAccount(newAddress);
      setIsConnected(true);
      onAddressChange?.(newAddress);
      onConnectedChange?.(true);
    } else {
      setAccount('');
      setIsConnected(false);
      onAddressChange?.('');
      onConnectedChange?.(false);
    }
  }, [onAddressChange, onConnectedChange]);

  const connectWallet = async (): Promise<void> => {
    try {
      if (typeof window.ethereum !== 'undefined') {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        
        const accounts = await window.ethereum.request({ 
          method: 'eth_requestAccounts' 
        });
        
        const signer = provider.getSigner();
        const address = await signer.getAddress();

        setCookie('address', address, {
            path: '/',
            maxAge: 3600,
            sameSite: 'lax'
          })
        
        setAccount(address);
        setIsConnected(true);
        onAddressChange?.(address);
        onConnectedChange?.(true);

        // Set up the account change listener only after successful connection
        window.ethereum.on('accountsChanged', handleAccountsChanged);
      } else {
        throw new Error('No Ethereum wallet found. Please install MetaMask.');
      }
    } catch (error) {
      console.error('Error connecting wallet:', error);
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('An error occurred while connecting the wallet');
      }
    }
  };

  useEffect(()=>{
    if(cookies.address){
        setAccount(cookies.address);
        setIsConnected(true);
        onAddressChange?.(cookies.address);
        onConnectedChange?.(true);
    }
  },[cookies])

  const disconnectWallet = (): void => {
    if (window.ethereum) {
      // Remove the account change listener on disconnect
      window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
      removeCookie('address');
    }
    setAccount('');
    setIsConnected(false);
    onAddressChange?.('');
    onConnectedChange?.(false);
  };

  return (
    <div className="flex gap-4 items-center">
      {!isConnected ? (
        <Button
          onClick={connectWallet}
          type='primary'
          className="flex items-center gap-2 w-52 justify-center"
        >
          <IoWalletOutline className="w-4 h-4" />
          Connect Wallet
        </Button>
      ) : (
        <div className='flex flex-row-reverse gap-5'>
         
          <Button
            onClick={disconnectWallet}
            type='primary'
            className="flex items-center gap-2 w-52 justify-center peer"
          >
            <RiLogoutCircleRLine className="w-4 h-4" />
            Disconnect
          </Button>
          <span className="text-lg text-white bg-green-500/20 peer-hover:-translate-y-1 duration-200 rounded-l-lg p-[0.45rem] px-8 font-semibold translate-x-8 relative z-[-1] ">
            {truncateAddress(account)}
          </span>
        </div>
      )}
    </div>
  );
};

export default ConnectWallet;