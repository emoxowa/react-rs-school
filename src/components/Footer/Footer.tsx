import React, { Component } from 'react';
import styles from './Footer.module.css';

class Footer extends Component {
  render(): JSX.Element {
    return (
      <footer className={styles.footer}>
        <p>&copy; Designed by emoxowa. All Rights Reserved.</p>
      </footer>
    );
  }
}

export default Footer;
