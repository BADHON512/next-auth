"use client"
import { PostData } from "@/utils/hellper"
import { useState } from "react"
import { useMutation } from "react-query"
import {signIn ,useSession , signOut} from "next-auth/react"
import Link from "next/link"


export const metadata={
  title:"Home"
}
export default function Home() {
  const {data}= useSession()
  console.log(data?.user);
  const [email ,setEmail]=useState("")
  const [password ,setPassword]=useState("")

const add= useMutation(PostData,{
  onSuccess:()=>{console.log("data inserted");}
})

  const formHandle= async(e)=>{
    e.preventDefault()
    setEmail("")
    setPassword("")
    const formdata={email,password}
  
    add.mutate(formdata)
    try {
      const data =await signIn("credentials",{
        redirect:false,
      email,
      password
      })
      console.log(data);
    } catch (error) {
      console.log(error);
      
    }
  
  }
  return (
    <div className="login">
        {
          data?.user?(
          <h1 onClick={()=>signOut()}>{data.user.name}logout</h1>):<h1>login</h1>
        }
   
      <main>
      
        <form  onSubmit={formHandle}>
          <h1>Login</h1>
          <input required name="password" value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter your email" />
          <input required name="password" value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter your password" />
          <div className="button">
            <button type="submit">Login</button>
          </div>
        </form>
      </main>
    </div>
  )
}
