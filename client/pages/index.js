import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { GetUsers } from '../redux/user/action'
import Login from './user/login'

export default function Home() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetUsers());
  
    
  }, [])
  
  return (
    <div className={styles.container}>
      <Head>
        <title>ICAN | Institute of Chartered Accountants of Nepal</title>
        <meta name="description" content="Institute of Chartered Accountants of Nepal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {/* <h1 className={styles.title}>
          Welcome to <a href="https://en.ican.org.np/en/">ICAN</a>
        </h1> */}
      </main>
      {/* <footer className={styles.footer}>
        <a
          href="https://en.ican.org.np/en/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
         PCS
        </a>
      </footer> */}
    </div>
  )
}
