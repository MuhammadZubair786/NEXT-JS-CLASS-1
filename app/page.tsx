"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {

  return (
    <>
      <h1>Home Page</h1>
      <Link href={"/components/user"}>
        user Page
      </Link>

    </>

  )
}
