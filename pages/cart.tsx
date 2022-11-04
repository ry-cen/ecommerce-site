import React, { useContext } from 'react'
import Layout from '../components/layout';
import { Store } from '../utils/Store'

export default function CartScreen() {
  const { state, dispatch } = useContext(Store);

  return (
    <Layout>
      <div>Shopping Cart</div>
    </Layout>
  )
}