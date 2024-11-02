import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Next.js',
}

const RootLayout = ({ children } : { children: React.ReactNode }) => <>
  <html lang="en">
    <body className='p-0 box-border text-slate-300'>
      {children}
    </body>
  </html>
</>

export default RootLayout;