import React from "react";
import dynamic from 'next/dynamic'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from '@/components/ChatFeed';

// <div className="flex justify-end p-7">
        //     <WalletMultiButton></WalletMultiButton>
        // </div>

export function Chatroom() {
    return (

        <div>
            <ChatEngine 
                height="100vh"
                projectID="045e6687-4524-4ade-8826-7955561457f8"
                userName="GEfMBVX9gKqMNJRUArmHDrAb7uNFqQRxQLvYBnK7YqGh"
                userSecret="Qwerty135"
                renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}>
            </ChatEngine> 
                
            
        </div>
    );
}
export default dynamic(() => Promise.resolve(Chatroom), { ssr: false });
