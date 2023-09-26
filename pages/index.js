import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='background w-full h-screen'>
      <div className=' flex text-white text-glow text-[100px] font-bold '>
        <span className='text-gradient ml-32 mt-14'>FundChat</span>
      </div>
      <div><p className='flex text-white mt-50 ml-32 text-[35px]'>A place where </p></div>
      <div><p className='flex justify-start text-white -[35px]'>A place where </p></div>
    </main>
  )
}
