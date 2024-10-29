"use client"

import { Button } from "@/components/UI/button";
import { Navbar } from "@/components/UI/navbar";
import { Subheading } from "@/components/UI/subheading";
import logo from "@/assets/logo.svg"
import Image from 'next/image'
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  return (
    <>
    <Navbar/>
    <div className=" w-screen min-h-screen flex max-md:flex-col max-md:justify-center items-center md:p-20 px-4 py-12 ">
      <div className="flex flex-col max-md:items-center max-md:text-center md:w-[50%]">
        <h1 className=" leading-[1.2] text-[3rem] max-md:text-[2rem] font-bold font-poppins ">Make titles on the go with wallet connection.</h1>
        <div className=" text-[1.5rem] mt-4 ">
          <Subheading size="text-[1.5rem] max-md:text-[1.2rem]" >Making titles has been this easy. Authenticate, connect wallet and make titles</Subheading>
        </div>
        <Button onClick={()=>router.push("/connect")} type="primary" className="mt-6" >Login</Button>
      </div>
      <div className="flex items-center justify-center md:w-[50%]">
        <Image src={logo} alt="logo" className="w-60 floating-div" />
      </div>
    </div>
    </>
  );
}
