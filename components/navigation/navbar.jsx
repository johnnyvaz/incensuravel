import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
export default function Navbar() {
	return (
		<nav className={styles.navbar}>
				<p className={styles.alchemy_logo}>Incensurável</p>
			<ConnectButton></ConnectButton>
		</nav>
	);
}
