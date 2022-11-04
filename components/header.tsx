import { CallTracker } from 'assert';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useContext } from 'react';
import { Store } from '../utils/Store';
import styles from './header.module.css';

const Header = () => {

    const { state, dispatch } = useContext(Store);
    const { cart } = state;

    const { status, data: session } = useSession();

    return (
        <div className={styles.navbar}>
			<span><Link href="/">Home</Link></span>
            <span className={styles.spacer}></span>
            <span>Cart {cart.cartItems.length > 0 && (<span>{cart.cartItems.reduce((a: any, c: any) => a + c.quantity, 0)}</span>)}</span>
            <span>
                {status === 'loading' ? ('Loading')
                : 
                (session?.user ? session.user.name 
                : 
                (<Link href="/login">Login</Link>))}
            </span>
		</div>
    );
}

export default Header;