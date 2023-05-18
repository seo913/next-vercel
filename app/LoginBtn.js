'use client'
import {signIn } from 'next-auth/react'
export default function LoginBtn(){
   return(
    <div>
   <button className='mt-2 border-2 px-2 border-purple-400 rounded-xl bg-purple-300 font-semibold' 
    onClick={()=>{signIn()}}>Login</button>
   </div>
   ) 

}