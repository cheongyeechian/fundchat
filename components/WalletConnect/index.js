import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export function WalletButton() {
  return (
    <div className="flex justify-end p-7">
        <WalletMultiButton></WalletMultiButton>
    </div>
  )
}

export default dynamic (() => Promise.resolve(WalletButton), {ssr: false} )