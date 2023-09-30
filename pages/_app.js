// Importing necessary libraries and components
import React, { createContext, useState } from 'react';
import '@/styles/globals.css';
import Layout from '@/components/Layout';
import { WalletConnectProvider } from "@/components/WalletConnectProvider";
import '@solana/wallet-adapter-react-ui/styles.css'

// Creating context
const AppContext = createContext();

// Exporting custom hook for using this context
export const useAppContext = () => {
  return React.useContext(AppContext);
};

// App component
function App({ Component, pageProps }) {
  // State to be shared with other components
  const [data, setData] = useState({});
  const value = { data, setData };

  // Returning the component tree
  return (
    <AppContext.Provider value={value}>
      <WalletConnectProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </WalletConnectProvider>
    </AppContext.Provider>
  );
}

export default App;
