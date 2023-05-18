import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
import LoginBtn from './LoginBtn'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import LogOutBtn from './LogOutBtn'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({ children }) {
  let session = await getServerSession(authOptions);
  // console.log(session);
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex justify-center mt-5'>
        <Link href="/" className='mr-3'>Main</Link>
        <Link href="/create" className='mr-3'>글작성</Link>
        </div>
        <div className='flex justify-center items-center'>{
          session ? <div className='flex items-center'>
          <span className=' font-bold'>{session.user.name} 님 환영합니다 😍 </span>
          <span className='ml-3'><LogOutBtn /></span>
          </div>
          :<LoginBtn/>
        }</div>
        {children}</body>
    </html>
  )
}
