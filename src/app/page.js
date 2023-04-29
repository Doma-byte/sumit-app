"use client"; // this is a client component 👈🏽

import Image from 'next/image'
import styles from './page.module.css'
import { useEffect } from 'react'
import Register from './(authR)/register/page'
import Login from './(authR)/login/page'
import { useRouter } from 'next/navigation'

export default function Home() {

const router =  useRouter();

useEffect(() => {
  localStorage.getItem('sucess')?router.push('/'):router.push('/login')
}, [])



  return (
    <main className={styles.main}>
     {/* Name is Sumit here */}
{/* <Login/> */}
     {/* <Register/> */}
    </main>
  )
}
