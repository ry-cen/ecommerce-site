import Link from 'next/link';
import styles from './header.module.css';

export default function Header({children}) {
    return (
        <div class={styles.navbar}>
			<span><Link href="/">Home</Link></span>
            <span class={styles.spacer}></span>
            <span><Link href="/login">Login</Link></span>
		</div>
    );
}