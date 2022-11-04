import { FC } from 'react';
import Image from 'next/image';
import styles from './productCard.module.css';
import Link from 'next/link';

type Props = {
    product: any,
}

const ProductCard: FC<Props> = (props) => {

    const { product } = props;

    return (
        <Link href={'/product/' + product.pid}>
            <div className={styles.card}>
                <div className={styles.image}>
                    <Image  alt='' layout='fill' src={product.image}></Image>
                </div>
                <span className={styles.name}>
                    <b>{product.name}</b>
                </span>
                <span className={styles.price}>
                    <b>{'$' + product.price}</b>
                </span>
            </div>
        </Link>
	);
}

export default ProductCard;