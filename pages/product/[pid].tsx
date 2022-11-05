import Image from 'next/image';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import Layout from '../../components/layout';
import { Store } from '../../utils/Store';
import Product from '../../models/product';
import styles from '../../styles/[pid].module.css'
import db from '../../utils/db';

const ProductScreen = ({ product }: any) => {
	const { state, dispatch } = useContext(Store);

	const { query } = useRouter();
	const { pid } = query;


	if (!product) {
		return <div>Product Not Found</div>
	}
	
	const addToCartHandler = () => {
		const existItem = state.cart.cartItems.find((x: any) => x.pid === product.pid);
		const quantity = existItem ? existItem.quantity + 1 : 1

		if (product.countInStock < quantity) {
			alert('Product is out of stock.');
			return;
		}
		
		dispatch({type: 'CART_ADD_ITEM', payload: {...product, quantity: quantity}});
		console.log(state.cart.cartItems)
	}

	return (
		<Layout>
			<p>
			Product: {pid} 
			<div className={styles.image}>
				<Image layout='fill' alt={product.name} src={product.image}></Image>
			</div>
			</p> 
			<button onClick={addToCartHandler}>Add to cart</button>
		</Layout>
		)
	}
	
export default ProductScreen;

export async function getServerSideProps(context: any) {
	const { params } = context;
	const { pid } = params;

	await db.connect();
	const product = await Product.findOne({ pid }).lean();
	await db.disconnect();

	return {
		props: {
			product: product ? db.convertDocToObj(product) : null
		}
	}
}