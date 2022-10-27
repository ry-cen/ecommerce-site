import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import ProductCard from '../components/productCard'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Layout>
    <div className={styles.container}>
      <div className={styles.flex_box}>
        <ProductCard name={'pants'} price='5' imagesrc={'/../public/unknown (4).png'}></ProductCard>
      </div>
    </div>
    </Layout>
  )
}

export default Home
