import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Link href={"/home"}> Home </Link>
      <Link href={"/cv"}> About Me </Link>
      <Link href={"/contact"}> Contact </Link>
      <h1>Hello World</h1>
    </div>
  )
}

export default Home
