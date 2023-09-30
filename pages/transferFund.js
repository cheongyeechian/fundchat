import dynamic from 'next/dynamic'
import Link from "next/link";
import { useAppContext } from './_app.js';
import React, { useState } from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const TransferFund = () => {

    const [query, setQuery] = useState(''); // To store user input
    const [tokenData, setTokenData] = useState(null); // To store fetched token data
    const [loading, setLoading] = useState(false); // To handle loading state
    const [amount, setAmount] = useState(''); // To store user input
    const { setData } = useAppContext();


    const handleSearch = async () => {

        if (!query) return; // if query is empty, return early
        
        setLoading(true);
        try {
        // Replace this URL with the actual URL of Jupiter Aggregator API
        const response = await fetch(`https://token.jup.ag/all`);
        if (!response.ok) {
            console.error("Failed to fetch token data");
            return;
        }

        const allCoinDataInArray = await response.json(); // Parse the JSON data

        let targetCoin = null;
        let userInput = query.toUpperCase()
        for (let i = 0; i < allCoinDataInArray.length; i++) {
            if (allCoinDataInArray[i].symbol == userInput) {
            targetCoin = allCoinDataInArray[i];
            break;
            }
        }
        
        if (targetCoin == null) {
            setTokenData({
            "name": "Not Found",
            "symbol": "Not Found"
            })
        } else {
            setTokenData(targetCoin); // Set the fetched data
        }
        

        setData({tokenSymbol: targetCoin.symbol, walletAddress: "GEfMBVX9gKqMNJRUArmHDrAb7uNFqQRxQLvYBnK7YqGh", tokenAmount: amount});

        } catch (error) {
        console.error("Error occurred while fetching token data", error);
        } finally {
        setLoading(false); // Reset loading state
        }
    };

    return (
        <div className=''>
            <div className="flex justify-end p-7">
                <WalletMultiButton></WalletMultiButton>
            </div>
        <div className='mt-8'>
            <label className=' text-white ml-96 '>Token Symbol: </label>
            <input
                className='btn-gradient-border h-14 w-3/6 bg-gray-800 ml-96 mt-2 text-white'
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)} // Update query on user input
                placeholder="Search for a token"
            />
            <button onClick={handleSearch} className='text-white btn-gradient-border'>Search</button>
            
            {loading && <p>Loading...</p>}
            
            {tokenData && (
            <div className='text-white btn-gradient-border w-64 ml-96 mt-0'>
                {/* Render tokenData here */}
                <p>Name: {tokenData.name}</p>
                <p>Symbol: {tokenData.symbol}</p>
            </div>
            )}  
        </div>
        <div className='mt-8'>
            <label className=' text-white ml-96'>Wallet Address: </label>
            <input
                className='btn-gradient-border h-14 w-3/6 bg-gray-800 ml-96 mt-2 text-white'
                type="text"
                placeholder="Wallet Address"
            />
            <Link href="/chatroom">
                <button onClick={handleSearch} className='text-white btn-gradient-border'>Send Transfer Fund Message</button>
            </Link>
        </div>
        <div className='mt-8'>
            <label className=' text-white ml-96'>Amount: </label>
            <input
                className='btn-gradient-border h-14 w-3/6 bg-gray-800 ml-96 mt-2 text-white'
                type="text"
                placeholder="Amount"
                onChange={(e) => setAmount(e.target.value)}
            />
        </div>
        <div className='mt-24 '>
            <div className='ml-96 btn-gradient-border w-1/6'>
                Total Amount: {amount}
            </div>
            <div className='btn-gradient-border w-1/6 mr-96'>
                Withdraw
            </div>
        </div>
    </div>
    );
    };

    export default TransferFund;
