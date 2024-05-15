import * as React from 'react';
import styles from './Navbar.module.css';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <Link to="/" className={styles.navbar__link}>
            <img
                src={Logo}
                alt="app logo"
                className={styles.navbarlink__logo}
            />
            <p className={styles.navbarlink__p}>
                Class Management
            </p>
        </Link>
    </nav>
  )
}

export default Navbar;