import Link from 'next/link';
import styles from './layout.module.css'

export default function Layout({ children }) {
    return (
		<div>
			<div class={styles.navbar}>
				<span><Link href="/">Home</Link></span>
			</div>
			<div class={styles.container}>{children}</div>
		</div>
		);
  }
  