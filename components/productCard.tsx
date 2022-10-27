import { FC } from 'react';
import Image from 'next/image';
import styles from './productCard.module.css';

interface Props {
    name: string,
    price: number,
    imagesrc: string,
}

const ProductCard: FC<Props> = (props) => {
    return (
        <div>
            <div className={styles.card}>
                <div className={styles.image}>
                    <Image  alt='' layout='fill' src={props.imagesrc}></Image>
                </div>
                <span className={styles.name}>
                    {props.name}
                </span>
            </div>
        </div>
	);
}

export default ProductCard;