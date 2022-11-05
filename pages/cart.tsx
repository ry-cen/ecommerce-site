import React, { useContext } from 'react'
import Layout from '../components/layout';
import { Store } from '../utils/Store'
import styles from '../styles/cart.module.css'
import Link from 'next/link';
import Image from 'next/image';

export default function CartScreen() {
  const { state, dispatch } = useContext(Store);

  const {
    cart: { cartItems }
  } = state;


  const removeItemHandler = (item: any) => {
    dispatch({type: 'CART_REMOVE_ITEM', payload: item})
  }

  return (
    <Layout>
      <h1 className={styles.title}>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div>
          Cart is empty.
        </div>
      ) : (
        <div className={styles.cartGrid}>
          <div className={styles.cartItems}>
            <table className={styles.table}>
              <thead className={styles.bottomBorder}>
                <tr className={styles.tableRow}>
                  <th className={styles.tableCell}>Item</th>
                  <th className={styles.tableCell}>Quantity</th>
                  <th className={styles.tableCell}>Price</th>
                  <th className={styles.tableCell}>Action</th>
                </tr>
              </thead>
              <tbody>
                {console.log(cartItems)}
                {cartItems.map((item: any) => (
                  <tr key={item.pid} className={styles.tableRow}>
                    <td className={styles.tableCell}>
                      <Link href={`/product/${item.pid}`}>
                        <a className={styles.flexContainer}>
                          <Image 
                            src={item.image}
                            alt={item.name}
                            width={50}
                            height={50}></Image>
                          &nbsp;
                          {item.name}
                        </a>
                      </Link>
                    </td>
                    <td className={styles.tableCell}>{item.quantity}</td>
                    <td className={styles.tableCell}>{"$" + item.price}</td>
                    <td className={styles.tableCell}><button onClick={() => removeItemHandler(item)}>X</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div>
              <ul>
                <li><div>Subtotal ({cartItems.reduce((a: number, c: any) => a + c.quantity, 0)}) : $
                {cartItems.reduce((a: number, c: any) => a + c.quantity * c.price, 0)}</div></li>
              </ul>
            </div>
          </div>
        </div>
      )

      }
    </Layout>
  )
}