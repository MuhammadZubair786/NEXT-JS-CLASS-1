"use client"
import Image from 'next/image'
import Home1 from './Components/Home/hOME'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const router = useRouter()

  let [email, setemail] = useState("")

  const openpage = () => {
    console.log("test")
    if (email.length > 0) {

      router.push("/Components/Student")
    }

  }
  return (
    <>
      <Home1 />
      {
        email.length > 0 ?
          <h1>Test</h1> :
          <Link href={"/Components/Home"}>
            Go to Home
          </Link>
      }
      <br />
      <Link href={"/Components/Student"}>
        Go to Student
      </Link>
      <br />
      <input type="text" value={email} onChange={(e) => setemail(e.target.value)} />
      <button
        className='border border-red-200'
        onClick={() => openpage()}
      >
        Login
      </button>

      <br/>
      <Link href={"/Components/User"}>
        Go to Users
      </Link>
    </>

  )
}
