import LandingPage from '@/components/LandingPage';
import dynamic from 'next/dynamic'

export function Home() {

  return (
    <main className='bg-black h-screen'>
      <div>
        <LandingPage></LandingPage>
      </div>

    </main>
  )
}

export default dynamic (() => Promise.resolve(Home), {ssr: false} )