import { useRouter } from 'next/router';
import { useContext } from 'react';
import Layout from '../../components/layout';
import data from '../../utils/data';
import { Store } from '../../utils/Store';

const Product = () => {
	const { state, dispatch } = useContext(Store);

	const { query } = useRouter();
	const { pid } = query;

	const product = data.products.find((x: any) => x.pid === pid)

	if (!product) {
		return <div>Product Not Found</div>
	}
	
	const addToCartHandler = () => {
		const existItem = state.cart.cartItems.find((x: any) => x.pid === product.pid);
		const quantity = existItem ? existItem.quantity + 1 : 1
		
		dispatch({type: 'CART_ADD_ITEM', payload: {...product, quantity: quantity}});
		console.log(quantity)
	}

	return (
		<Layout>
			<p>
			Product: {pid} 
			</p> 
			<button onClick={addToCartHandler}>Add to cart</button>
		</Layout>
		)
	}
	
	export default Product;