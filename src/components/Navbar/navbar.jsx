import React, { useState, useEffect, useRef } from 'react';
import styles from './navbar.module.css';
import { MDBIcon } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { getImageUrl } from '../../../utilis';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const menuRef = useRef(null);
  

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 830) {
        setMenuOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a href='/'><img src={getImageUrl('logos/logo.png')} alt="Company Logo" /></a>
      </div>
      <ul ref={menuRef} className={`${styles.menu} ${isMenuOpen ? styles.showMenu : ''}`}>
        <a href='/'><li>Home</li></a>
        <a href='/about'><li>About Us</li></a>
        <a href='/products'><li>Products</li></a>
        <a href=''><li>Find a store <FontAwesomeIcon icon={faMapMarkerAlt} /></li></a>
        <a href=''><li><MDBIcon flag='sa' /></li></a>
        <a href='/cart'><li className={styles.cartIconContainer}>
          <FontAwesomeIcon icon={faShoppingCart} className={styles.cartIcon} />
        </li></a>
      </ul>
      {windowWidth <= 830 && (
        <div className={styles.menuIcon} onClick={toggleMenu}>
          <MDBIcon icon="bars" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
