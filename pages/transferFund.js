import dynamic from 'next/dynamic'
import React, { useState } from 'react';


const TransferFund = () => {
  const [query, setQuery] = useState(''); // To store user input
  const [tokenData, setTokenData] = useState(null); // To store fetched token data
  const [loading, setLoading] = useState(false); // To handle loading state
  
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

      const data = await response.json(); // Parse the JSON data
      console.log(data)
      setTokenData(data); // Set the fetched data

    } catch (error) {
      console.error("Error occurred while fetching token data", error);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update query on user input
        placeholder="Search for a token"
      />
      <button onClick={handleSearch} className='text-white'>Search</button>
      
      {loading && <p>Loading...</p>}
      
      {tokenData && (
        <div className='text-white'>
          {/* Render tokenData here */}
          <p>Name: {tokenData.name}</p>
          <p>Symbol: {tokenData.symbol}</p>
          {/* ... other token data fields ... */}
        </div>
      )}
    </div>
  );
};

export default TransferFund;
