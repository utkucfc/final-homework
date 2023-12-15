import Link from "next/link";
import styles from "@/styles/Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.navContainer}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <Link legacyBehavior href="/cars">
                            <a className={styles.link}>Car List</a>
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link legacyBehavior href="/cars/add-car">
                            <a className={styles.link}>Add Car</a>
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link legacyBehavior href="/cars/update-car">
                            <a className={styles.link}>Update Car</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
