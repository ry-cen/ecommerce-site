import Header from './header'
import styles from './layout.module.css'

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
    return (
		<div>
			<Header></Header>
			<div className={styles.container}>{children}</div>
		</div>
		);
  }

export default Layout;
  