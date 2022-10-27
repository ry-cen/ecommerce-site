import Link from 'next/link';
import styles from './header.module.css';


const Header = () => {
    return (
        <div className={styles.navbar}>
			<span><Link href="/">Home</Link></span>
            <span className={styles.spacer}></span>
            <span><Link href="/login">Login</Link></span>
		</div>
    );
}

export default Header;