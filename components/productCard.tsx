import { FC } from 'react';
import Image from 'next/image';
import styles from './productCard.module.css';
import Link from 'next/link';

interface Props {
    name: string,
    price: number,
    imagesrc: string,
    pid: string,
}

const ProductCard: FC<Props> = (props) => {


    return (
        <Link href={'/product/' + props.pid}>
            <div className={styles.card}>
                <div className={styles.image}>
                    <Image  alt='' layout='fill' src={props.imagesrc}></Image>
                </div>
                <span className={styles.name}>
                    <b>{props.name}</b>
                </span>
                <span className={styles.price}>
                    <b>{'$' + props.price}</b>
                </span>
            </div>
        </Link>
	);
}

export default ProductCard;