import Header from './header'
import styles from './layout.module.css'

export default function Layout({ children }) {
    return (
		<div>
			<Header></Header>
			<div class={styles.container}>{children}</div>
		</div>
		);
  }
  