import type { NextPage } from 'next'
import ProductCard from '../components/productCard'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import data from '../utils/data.js'

const Home: NextPage = () => {



  return (
    <Layout>
    <div className={styles.container}>
      <div className={styles.flex_box}>
          {data.products.map((product, index) => 
             <ProductCard key={index} name={product.name} price={product.price} imagesrc={product.imagesrc} pid={product.pid}></ProductCard>
          )}
      </div>
    </div>
    </Layout>
  )
}

export default Home
