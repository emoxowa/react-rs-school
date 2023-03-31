import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../assets/logo.png';
import * as ROUTES from '../../constants/routes';

class Header extends Component {
  render(): JSX.Element {
    return (
      <header className={styles.header}>
        <Link to="/">
          <img src={logo} alt="" className={styles.logo} />
        </Link>
        <nav className={styles.navigation}>
          <ul className={styles['navigation__list']}>
            <li className={styles['navigation__item']}>
              <Link to={ROUTES.HOME}>Home</Link>
            </li>
            <li className={styles['navigation__item']}>
              <Link to={ROUTES.ABOUT}>About</Link>
            </li>
            <li className={styles['navigation__item']}>
              <Link to={ROUTES.FORMS}>Forms</Link>
            </li>
            <li className={styles['navigation__item']}>
              <Link to="/contacts">NotFound</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
