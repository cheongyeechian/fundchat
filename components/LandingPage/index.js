import React from "react";
import Link from "next/link";
import dynamic from 'next/dynamic'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Button } from '@/components/Button';
import { useWallet } from "@solana/wallet-adapter-react";

export function LandingPage() {
    const {connect} = useWallet();

    const handleClick = (event) => {
        if (!connect){
            event.preventDefault(); // stop the navigation
            alert("Please connect your wallet first");
        }
    }
    return (
        <main className="bg-neutral-950 bg-black h-full">
            <div className="background-img w-full h-screen">
                <div className=' grid grid-rows-5 grid-flow-col gap-4 text-white  text-[100px]  '>
                    <div className="flex justify-end p-7">
                        <WalletMultiButton></WalletMultiButton>
                    </div>
                    <div className="row-start-2">
                        <span className='text-gradient ml-32 font-bold'>FundChat</span>
                        <p className='flex text-white ml-32 text-[30px] font-sans '>A Place For You to<span className="text-gradient-short-word text-glow px-3 font-bold"> Chat</span> Before You <span className="text-gradient-short-word text-glow px-3 font-bold">Make Transaction</span> $ </p>
                    </div>
                    <div className="ml-32 p-4 text-[25px]">
                        <Link href="/chatroom">
                            <Button onClick={handleClick}>Get Started</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default dynamic (() => Promise.resolve(LandingPage), {ssr: false} )