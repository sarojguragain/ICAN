import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { GetUsers } from '../redux/user/action'

export default function Home() {
  const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(GetUsers());
  
    
  // }, [])
  
  return (
    <div className={styles.container}>
      <Head>
        <title>ICAN | Institute of Chartered Accountants of Nepal</title>
        <meta name="description" content="Institute of Chartered Accountants of Nepal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
       
      </main>
      
    </div>
  )
}
