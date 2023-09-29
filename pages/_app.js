import '@/styles/globals.css';
import Layout from '@/components/Layout';
import { WalletConnectProvider } from "@/components/WalletConnectProvider";
import '@solana/wallet-adapter-react-ui/styles.css'
import dynamic from 'next/dynamic'


export default function App({ Component, pageProps }) {
  return ( 
    <WalletConnectProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </WalletConnectProvider>
  );
}
