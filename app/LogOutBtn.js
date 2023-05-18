'use client'
import {signOut } from 'next-auth/react'
export default function LogOutBtn(){
   return(
    <div>
   <button className='border-2 px-2 border-purple-400 rounded-xl bg-purple-300 font-semibold' 
   onClick={()=>{signOut()}}>LogOut</button>
   </div>
   ) 

}