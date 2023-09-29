import React from "react"
import dynamic from 'next/dynamic'


export function Layout({ children }) {
  return (
    <>
      <main className="background w-full h-screen">{children}</main>
    </>
  )
}

export default dynamic (() => Promise.resolve(Layout), {ssr: false} )
