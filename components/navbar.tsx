import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css"

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.links}>
                <Link href="/"> Home</Link>
                <Link href="/cv">About Me</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </div>
    )
}

