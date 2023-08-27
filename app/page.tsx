import Image from 'next/image'
import Signup from './Components/User/SignUp/page'
import Link from 'next/link'
export default function Home() {
  return (
    <>

      <Link href={"Components/User/SignUp"}> Sign Up
      </Link>

      <Link href={"Components/User/Login"}> Login User
      </Link>
    </>
  )
}
