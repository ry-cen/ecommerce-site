import type { NextPage } from 'next'
import ProductCard from '../components/productCard'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import Product from '../models/product'
import db from '../utils/db'

const Home: NextPage = ({products}: any) => {

  return (
    <Layout>
    <div className={styles.container}>
      <div className={styles.flex_box}>
          {products.map((product: any, index: number) => 
             <ProductCard key={index} product={product}></ProductCard>
          )}
      </div>
    </div>
    </Layout>
  )
}

export default Home

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find().lean()
  return {
    props: {
      products: products.map(db.convertDocToObj)
    }
  }

}
