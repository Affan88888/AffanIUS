//layout.js
import { Inter } from 'next/font/google'
import './globals.css'

import Footer from './component/Footer'
import Navbar from './component/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ADS studio',
}

export default function layout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-800 text-slate-100`}>
        
      <Navbar/>

        <main className="container p-4 mx-auto">{children}</main>
        
        <Footer/>

        </body>
    </html>
  )
}
