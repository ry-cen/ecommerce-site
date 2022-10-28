import { useRouter } from 'next/router';
import Layout from '../../components/layout';

const Product = () => {
	const router = useRouter();
	const { pid } = router.query;
	
	return (
		<Layout>
			<p>
			Product: {pid} 
			</p> 
		</Layout>
		)
	}
	
	export default Product;