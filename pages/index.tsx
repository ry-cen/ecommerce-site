import type { NextPage } from 'next'
import ProductCard from '../components/productCard'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const products = [{ name: 'pants', price: 5, imagesrc: '/../public/unknown (4).png', pid: '123' },
  { name: 'dogs', price: 5, imagesrc: '/../public/unknown (4).png', pid: '23' },
  { name: 'dra', price: 5, imagesrc: '/../public/unknown (4).png', pid: '13253223' },
  { name: 'dfg', price: 5, imagesrc: '/../public/unknown (4).png', pid: '153423423' },
  { name: 'dogs', price: 5, imagesrc: '/../public/unknown (4).png', pid: '23' },
  { name: 'dra', price: 5, imagesrc: '/../public/unknown (4).png', pid: '13253223' },
  { name: 'dfg', price: 5, imagesrc: '/../public/unknown (4).png', pid: '153423423' },
  { name: 'dogs', price: 5, imagesrc: '/../public/unknown (4).png', pid: '23' },
  { name: 'dra', price: 5, imagesrc: '/../public/unknown (4).png', pid: '13253223' },
  { name: 'dfg', price: 5, imagesrc: '/../public/unknown (4).png', pid: '153423423' }]

  return (
    <Layout>
    <div className={styles.container}>
      <div className={styles.flex_box}>
          {products.map((product, index) => 
             <ProductCard key={index} name={product.name} price={product.price} imagesrc={product.imagesrc} pid={product.pid}></ProductCard>
          )}
      </div>
    </div>
    </Layout>
  )
}

export default Home
