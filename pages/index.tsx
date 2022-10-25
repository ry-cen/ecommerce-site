import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Layout>
    <div className={styles.heroImageWrapper}>
      <Image layout='fill' src='/../public/unknown (4).png'></Image>
    </div>
    <div className={styles.container}>
    </div>
    </Layout>
  )
}

export default Home
