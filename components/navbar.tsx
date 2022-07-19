import Link from "next/link";
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div>
                <Link href="/"> Home</Link>
                <Link href="/cv">About Me</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </div>
    )
}

export default Navbar;