import Header from './header'
import styles from './layout.module.css'

import { ToastContainer } from "react-toastify";

const Layout = ({ children }: React.PropsWithChildren<{}>) => {

    return (
		<div>
			<Header></Header>
			<ToastContainer position="bottom-center" limit={1}></ToastContainer>
			<div className={styles.container}>{children}</div>
		</div>
		);
  }

export default Layout;
  